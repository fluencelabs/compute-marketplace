// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "src/deal/interfaces/IDeal.sol";
import "src/utils/OwnableUpgradableDiamond.sol";
import "src/core/modules/BaseModule.sol";
import "./interfaces/IDealFactory.sol";

/*
 * @dev On init mas.sender becomes owner.
 */
contract DealFactory is BaseModule, IDealFactory {
    using SafeERC20 for IERC20;

    // ------------------ Storage ------------------
    bytes32 private constant _STORAGE_SLOT = bytes32(uint256(keccak256("fluence.market.storage.v1.dealFactory")) - 1);

    struct DealFactoryStorage {
        IDeal dealImpl;
        mapping(IDeal => bool) hasDeal;
    }

    DealFactoryStorage private _storage;

    function _getDealFactoryStorage() private pure returns (DealFactoryStorage storage s) {
        bytes32 storageSlot = _STORAGE_SLOT;
        assembly {
            s.slot := storageSlot
        }
    }

    // ------------------ Initializer ------------------
    function __DealFactory_init(IDeal dealImpl_) internal onlyInitializing {
        DealFactoryStorage storage dealFactoryStorage = _getDealFactoryStorage();

        dealFactoryStorage.dealImpl = dealImpl_;
    }

    // ----------------- View -----------------
    function hasDeal(IDeal deal) external view returns (bool) {
        return _getDealFactoryStorage().hasDeal[deal];
    }

    // ----------------- Mutable -----------------
    function deployDeal(
        CIDV1 calldata appCID_,
        IERC20 paymentToken_,
        uint256 minWorkers_,
        uint256 targetWorkers_,
        uint256 maxWorkersPerProvider_,
        uint256 pricePerWorkerEpoch_,
        CIDV1[] calldata effectors_,
        IDeal.AccessType accessType_,
        address[] calldata accessList_
    ) external returns (IDeal) {
        DealFactoryStorage storage dealFactoryStorage = _getDealFactoryStorage();

        ICore core = _core();

        IDeal deal = IDeal(
            address(
                new ERC1967Proxy(
                    address(dealFactoryStorage.dealImpl),
                    abi.encodeWithSelector(
                        IDeal.initialize.selector,
                        core,
                        appCID_,
                        paymentToken_,
                        minWorkers_,
                        targetWorkers_,
                        maxWorkersPerProvider_,
                        pricePerWorkerEpoch_,
                        effectors_,
                        accessType_,
                        accessList_,
                        msg.sender
                    )
                )
            )
        );

        dealFactoryStorage.hasDeal[deal] = true;

        uint256 amount = pricePerWorkerEpoch_ * targetWorkers_ * core.minDealDepositedEpoches();
        paymentToken_.safeTransferFrom(msg.sender, address(this), amount);
        paymentToken_.approve(address(deal), amount);
        deal.deposit(amount);

        OwnableUpgradableDiamond(address(deal)).transferOwnership(msg.sender);

        emit DealCreated(
            msg.sender,
            deal,
            core.currentEpoch(),
            paymentToken_,
            minWorkers_,
            targetWorkers_,
            maxWorkersPerProvider_,
            pricePerWorkerEpoch_,
            effectors_,
            appCID_
        );

        return deal;
    }
}