// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.19;

import "../deal/interfaces/ICore.sol";
import "./interfaces/IGlobalConfig.sol";
import "./interfaces/IMatcher.sol";
import "../utils/LinkedList.sol";
import "../deal/base/Types.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MatcherState {
    // ----------------- Types -----------------
    struct ComputeProvider {
        uint minPricePerEpoch;
        uint maxCollateral;
        IERC20 paymentToken;
        uint totalFreeWorkerSlots;
    }

    struct ComputePeer {
        uint freeWorkerSlots;
    }

    // ----------------- Events -----------------
    event ComputeProviderMatched(address indexed computeProvider, ICore deal, uint dealCreationBlock, CIDV1 appCID);
    event ComputePeerMatched(bytes32 indexed peerId, ICore deal, bytes32 patId, uint dealCreationBlock, CIDV1 appCID);
    event ComputeProviderRegistered(
        address computeProvider,
        uint minPricePerEpoch,
        uint maxCollateral,
        IERC20 paymentToken,
        CIDV1[] effectors
    );
    event ComputeProviderRemoved(address computeProvider);
    event WorkersSlotsChanged(bytes32 peerId, uint newWorkerSlots);

    event MaxCollateralChanged(address computeProvider, uint newMaxCollateral);
    event MinPricePerEpochChanged(address computeProvider, uint newMinPricePerEpoch);
    event PaymentTokenChanged(address computeProvider, IERC20 newPaymentToken);
    event EffectorAdded(address computeProvider, CIDV1 effector);
    event EffectorRemoved(address computeProvider, CIDV1 effector);

    // ----------------- Immutable -----------------
    IGlobalConfig public immutable globalConfig;

    // ----------------- Public Vars -----------------
    mapping(address => ComputeProvider) public computeProviderByOwner;
    mapping(bytes32 => ComputePeer) public computePeerByPeerId;
    mapping(address => bool) public whitelist;

    // ----------------- Internal Vars -----------------
    LinkedList.Bytes32List internal _computeProvidersList;
    mapping(address => LinkedList.Bytes32List) internal _computePeersListByProvider;
    mapping(address => mapping(bytes32 => bool)) internal _effectorsByComputePeerOwner;

    constructor(IGlobalConfig globalConfig_) {
        globalConfig = globalConfig_;
    }
}

abstract contract MatcherInternal is MatcherState, UUPSUpgradeable {
    using SafeERC20 for IERC20;
    using LinkedList for LinkedList.Bytes32List;

    modifier onlyOwner() {
        require(msg.sender == globalConfig.owner(), "Only owner can call this function");
        _;
    }

    function _getComputeProvider(address owner) internal view returns (ComputeProvider storage) {
        ComputeProvider storage computeProvider = computeProviderByOwner[owner];
        require(address(computeProvider.paymentToken) != address(0x00), "Compute provider doesn't exist");

        return computeProvider;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function _isEffectorsMatched(IConfigModule dealConfig, address computeProvider) internal view returns (bool) {
        CIDV1[] memory dealEffectors = dealConfig.effectors();

        for (uint i = 0; i < dealEffectors.length; i++) {
            bytes32 dealEffector = keccak256(abi.encodePacked(dealEffectors[i].prefixes, dealEffectors[i].hash));
            if (!_effectorsByComputePeerOwner[computeProvider][dealEffector]) {
                return false;
            }
        }

        return true;
    }
}

abstract contract MatcherOwnable is MatcherInternal {
    function setWhiteList(address owner, bool hasAccess) external onlyOwner {
        whitelist[owner] = hasAccess;
    }
}

abstract contract MatcherComputeProviderSettings is MatcherInternal, IMatcher {
    using LinkedList for LinkedList.Bytes32List;

    using SafeERC20 for IERC20;

    // ----------------- View -----------------
    function getFreeWorkersSolts(bytes32 peerId) external view returns (uint) {
        return computePeerByPeerId[peerId].freeWorkerSlots;
    }

    // ----------------- Mutable -----------------
    function registerComputeProvider(uint minPricePerEpoch, uint maxCollateral, IERC20 paymentToken, CIDV1[] calldata effectors) external {
        //TODO: require(whitelist[owner], "Only whitelisted can call this function");

        // validate input
        require(minPricePerEpoch > 0, "Min price per epoch should be greater than 0");
        require(maxCollateral > 0, "Max collateral should be greater than 0");
        require(address(paymentToken) != address(0x00), "Compute provider already");

        address owner = msg.sender;
        require(address(computeProviderByOwner[owner].paymentToken) == address(0x00), "Compute provider already");

        // register compute provider
        computeProviderByOwner[owner] = ComputeProvider({
            minPricePerEpoch: minPricePerEpoch,
            maxCollateral: maxCollateral,
            paymentToken: paymentToken,
            totalFreeWorkerSlots: 0
        });
        _computeProvidersList.push(bytes32(bytes20(owner)));

        // register effectors
        for (uint i = 0; i < effectors.length; i++) {
            bytes32 dealEffector = keccak256(abi.encodePacked(effectors[i].prefixes, effectors[i].hash));
            _effectorsByComputePeerOwner[owner][dealEffector] = true;
        }

        emit ComputeProviderRegistered(owner, minPricePerEpoch, maxCollateral, paymentToken, effectors);
    }

    function addWorkersSlots(bytes32 peerId, uint workerSlots) external {
        address owner = msg.sender;

        require(workerSlots > 0, "Worker slots should be greater than 0");

        // calculate new free worker slots
        uint256 freeWorkerSlots = computePeerByPeerId[peerId].freeWorkerSlots;

        // add peer to compute provider list if it's not there
        if (freeWorkerSlots == 0) {
            _computePeersListByProvider[owner].push(peerId);
        }

        freeWorkerSlots += workerSlots;

        computePeerByPeerId[peerId].freeWorkerSlots = freeWorkerSlots;

        // put collateral
        uint amount = computeProviderByOwner[owner].maxCollateral * workerSlots;
        computeProviderByOwner[owner].paymentToken.safeTransferFrom(owner, address(this), amount);

        emit WorkersSlotsChanged(peerId, freeWorkerSlots);
    }

    function subWorkersSlots(bytes32 peerId, uint workerSlots) external {
        address owner = msg.sender;

        // validate input
        uint256 freeWorkerSlots = computePeerByPeerId[peerId].freeWorkerSlots - workerSlots;
        computePeerByPeerId[peerId].freeWorkerSlots = freeWorkerSlots;

        // remove peer from compute provider list if it has no free worker slots
        if (freeWorkerSlots == 0) {
            _computePeersListByProvider[owner].remove(peerId);
        }

        // retrun collateral
        uint amount = computeProviderByOwner[owner].maxCollateral * workerSlots;
        computeProviderByOwner[owner].paymentToken.safeTransferFrom(address(this), owner, amount);

        emit WorkersSlotsChanged(peerId, freeWorkerSlots);
    }

    function changeMinPricePerEpoch(uint newMinPricePerEpoch) external {
        require(newMinPricePerEpoch > 0, "Min price per epoch should be greater than 0");

        ComputeProvider storage computeProvider = _getComputeProvider(msg.sender);

        computeProvider.minPricePerEpoch = newMinPricePerEpoch;

        emit MinPricePerEpochChanged(msg.sender, newMinPricePerEpoch);
    }

    function changeMaxCollateral(uint newMaxCollateral) external {
        require(newMaxCollateral > 0, "Max collateral should be greater than 0");

        address owner = msg.sender;
        ComputeProvider storage computeProvider = _getComputeProvider(owner);

        uint oldMaxCollateral = computeProvider.maxCollateral;

        require(oldMaxCollateral != newMaxCollateral, "Max collateral is the same");
        computeProvider.maxCollateral = newMaxCollateral;

        // if compute provider has no free worker slots. Do nothing.
        if (computeProvider.totalFreeWorkerSlots == 0) {
            return;
        }

        // calculate new collateral
        if (oldMaxCollateral > newMaxCollateral) {
            uint amount = (oldMaxCollateral - newMaxCollateral) * computeProvider.totalFreeWorkerSlots;

            computeProvider.paymentToken.safeTransfer(owner, amount);
        } else {
            uint amount = (newMaxCollateral - oldMaxCollateral) * computeProvider.totalFreeWorkerSlots;

            computeProvider.paymentToken.safeTransferFrom(owner, address(this), amount);
        }

        emit MaxCollateralChanged(owner, newMaxCollateral);
    }

    function changePaymentToken(IERC20 newPaymentToken, uint newMaxCollateral) external {
        require(address(newPaymentToken) != address(0x00), "Payment token should be not zero address");

        address owner = msg.sender;
        ComputeProvider storage computeProvider = _getComputeProvider(owner);

        IERC20 oldPaymentToken = computeProvider.paymentToken;
        computeProvider.paymentToken = newPaymentToken;

        uint oldAmount = computeProvider.maxCollateral * computeProvider.totalFreeWorkerSlots;
        oldPaymentToken.safeTransfer(owner, oldAmount);

        uint newAmount = newMaxCollateral * computeProvider.totalFreeWorkerSlots;
        newPaymentToken.safeTransferFrom(owner, address(this), newAmount);

        emit PaymentTokenChanged(owner, newPaymentToken);
    }

    function addEffector(CIDV1 calldata effector) external {
        address owner = msg.sender;

        bytes32 effectorCIDHash = keccak256(abi.encodePacked(effector.prefixes, effector.hash));

        require(_effectorsByComputePeerOwner[owner][effectorCIDHash] == false, "Effector already exists");
        _effectorsByComputePeerOwner[owner][effectorCIDHash] = true;

        emit EffectorAdded(owner, effector);
    }

    function removeEffector(CIDV1 calldata effector) external {
        address owner = msg.sender;

        bytes32 effectorCIDHash = keccak256(abi.encodePacked(effector.prefixes, effector.hash));

        require(_effectorsByComputePeerOwner[owner][effectorCIDHash] == true, "Effector doesn't exist");
        _effectorsByComputePeerOwner[owner][effectorCIDHash] = false;

        emit EffectorRemoved(owner, effector);
    }

    function removeComputeProvider() external {
        address owner = msg.sender;
        ComputeProvider storage computeProvider = _getComputeProvider(owner);

        require(address(computeProvider.paymentToken) != address(0x00), "Compute provider doesn't exist");

        IERC20 paymentToken = computeProvider.paymentToken;
        uint amount = computeProvider.maxCollateral * computeProvider.totalFreeWorkerSlots;

        delete computeProvider.minPricePerEpoch;
        delete computeProvider.maxCollateral;
        delete computeProvider.paymentToken;
        delete computeProvider.totalFreeWorkerSlots;

        paymentToken.safeTransfer(owner, amount);

        _computeProvidersList.remove(bytes32(bytes20(owner)));

        emit ComputeProviderRemoved(owner);
    }
}

contract Matcher is MatcherComputeProviderSettings, MatcherOwnable {
    using SafeERC20 for IERC20;
    using LinkedList for LinkedList.Bytes32List;

    constructor(IGlobalConfig globalConfig_) MatcherState(globalConfig_) {}

    // ----------------- Mutable -----------------

    // extra bad solution - temp solution
    function matchWithDeal(ICore deal) external {
        require(globalConfig.factory().isDeal(address(deal)), "Deal is not from factory");

        // load deal modules
        IConfigModule config = deal.configModule();
        IWorkersModule workersModule = deal.workersModule();

        // load deal config
        CIDV1 memory dealAppCID = config.appCID();
        uint dealRequiredCollateral = config.requiredCollateral();
        uint dealPricePerEpoch = config.pricePerEpoch();
        uint dealCreationBlock = config.creationBlock();
        uint freeWorkerSlotsInDeal = config.targetWorkers() - workersModule.getPATCount();

        // go through the compute providers list
        bytes32 currentId = _computeProvidersList.first();

        while (currentId != bytes32(0x00) && freeWorkerSlotsInDeal > 0) {
            address computeProviderAddress = address(bytes20(currentId));

            uint maxCollateral = computeProviderByOwner[computeProviderAddress].maxCollateral;
            {
                uint minPricePerEpoch = computeProviderByOwner[computeProviderAddress].minPricePerEpoch;

                if (
                    minPricePerEpoch > dealPricePerEpoch ||
                    maxCollateral < dealRequiredCollateral ||
                    !_isEffectorsMatched(config, computeProviderAddress)
                ) {
                    currentId = _computeProvidersList.next(currentId);
                    continue;
                }
            }

            // go through the compute peers list by compute provider
            {
                LinkedList.Bytes32List storage computePeersList = _computePeersListByProvider[computeProviderAddress];

                bytes32 peerId = computePeersList.first();
                while (peerId != bytes32(0x00) && freeWorkerSlotsInDeal > 0) {
                    {
                        uint freeWorkerSlots = computePeerByPeerId[peerId].freeWorkerSlots;

                        freeWorkerSlots--;
                        // update free worker slots
                        if (freeWorkerSlots == 0) {
                            delete computePeerByPeerId[peerId];
                            computePeersList.remove(peerId);
                        } else {
                            computePeerByPeerId[peerId].freeWorkerSlots = freeWorkerSlots;
                        }
                    }

                    // create PATs
                    globalConfig.fluenceToken().approve(address(workersModule), dealRequiredCollateral);
                    bytes32 patId = workersModule.createPAT(computeProviderAddress, peerId);

                    {
                        // refound collateral
                        uint refoundByWorker = maxCollateral - dealRequiredCollateral;
                        if (refoundByWorker > 0) {
                            globalConfig.fluenceToken().transfer(computeProviderAddress, refoundByWorker);
                        }

                        freeWorkerSlotsInDeal--;
                    }

                    emit ComputePeerMatched(peerId, deal, patId, dealCreationBlock, dealAppCID);

                    peerId = computePeersList.next(peerId);
                }
            }

            emit ComputeProviderMatched(computeProviderAddress, deal, dealCreationBlock, dealAppCID);

            // get next compute provider
            currentId = _computeProvidersList.next(currentId);
        }
    }
}
