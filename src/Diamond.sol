// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
*
* Implementation of a diamond.
/******************************************************************************/

import {LibDiamond} from "src/lib/LibDiamond.sol";
import {LibCore} from "src/lib/LibCore.sol";
import {LibWhitelist} from "src/lib/LibWhitelist.sol";
import {IDiamondCut} from "src/interfaces/IDiamondCut.sol";
import {IERC165} from "src/interfaces/IERC165.sol";
import {IDiamondLoupe} from "src/interfaces/IDiamondLoupe.sol";
import {ICapacityConst} from "src/core/interfaces/ICapacityConst.sol";
import {GlobalConstStorage, LibGlobalConst} from "src/lib/LibGlobalConst.sol";
import {CapacityConstStorage, LibCapacityConst, RewardPoolPerEpoch} from "src/lib/LibCapacityConst.sol";
import {EpochControllerStorage, LibEpochController} from "src/lib/LibEpochController.sol";
import {IDeal} from "src/deal/interfaces/IDeal.sol";
import {ICore} from "src/core/interfaces/ICore.sol";

contract Diamond {    
    struct CoreParams {
        uint256 epochDuration;
        IDeal dealImpl;
        bool isWhitelistEnabled;
        ICapacityConst.CapacityConstInitArgs capacityConstInitArgs;
    }

    struct GlobalConstParams {
        uint256 minDealDepositedEpochs;
        uint256 minDealRematchingEpochs;
        uint256 minProtocolVersion;
        uint256 maxProtocolVersion;
    }

    constructor(
        address _diamondCutFacet,
        CoreParams memory coreParams,
        GlobalConstParams memory globalConstParams
    ) payable {        
        LibDiamond.setContractOwner(msg.sender);

        // Add the diamondCut external function from the diamondCutFacet
        IDiamondCut.FacetCut[] memory cut = new IDiamondCut.FacetCut[](1);
        bytes4[] memory functionSelectors = new bytes4[](1);
        functionSelectors[0] = IDiamondCut.diamondCut.selector;
        cut[0] = IDiamondCut.FacetCut({
            facetAddress: _diamondCutFacet, 
            action: IDiamondCut.FacetCutAction.Add, 
            functionSelectors: functionSelectors
        });
        LibDiamond.diamondCut(cut, address(0), "");

        // Initialize the diamond
        LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();
        ds.supportedInterfaces[type(IERC165).interfaceId] = true;
        ds.supportedInterfaces[type(IDiamondCut).interfaceId] = true;
        ds.supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;

        // from Core
        LibCore.store().dealImpl = coreParams.dealImpl;
        emit ICore.DealImplSet(coreParams.dealImpl);
        LibWhitelist.store().isWhitelistEnabled = coreParams.isWhitelistEnabled;

        // from GlobalConst
        GlobalConstStorage storage globalConstantsStorage = LibGlobalConst.store();
        globalConstantsStorage.minDealDepositedEpochs = globalConstParams.minDealDepositedEpochs;
        globalConstantsStorage.minDealRematchingEpochs = globalConstParams.minDealRematchingEpochs;
        globalConstantsStorage.minProtocolVersion = globalConstParams.minProtocolVersion;
        globalConstantsStorage.maxProtocolVersion = globalConstParams.maxProtocolVersion;

        // from CapacityConst
        CapacityConstStorage storage constantsStorage = LibCapacityConst.store();
        ICapacityConst.CapacityConstInitArgs memory initArgs = coreParams.capacityConstInitArgs;
        constantsStorage.commitment.minDuration = initArgs.minDuration;
        constantsStorage.commitment.usdCollateralPerUnit = initArgs.usdCollateralPerUnit;
        constantsStorage.commitment.slashingRate = initArgs.slashingRate;
        constantsStorage.commitment.withdrawEpochsAfterFailed = initArgs.withdrawEpochsAfterFailed;
        constantsStorage.commitment.maxFailedRatio = initArgs.maxFailedRatio;

        constantsStorage.reward.usdTargetRevenuePerEpoch = initArgs.usdTargetRevenuePerEpoch;
        constantsStorage.reward.minRewardPerEpoch = initArgs.minRewardPerEpoch;
        constantsStorage.reward.maxRewardPerEpoch = initArgs.maxRewardPerEpoch;
        constantsStorage.reward.vestingPeriodDuration = initArgs.vestingPeriodDuration;
        constantsStorage.reward.vestingPeriodCount = initArgs.vestingPeriodCount;

        constantsStorage.proof.minProofsPerEpoch = initArgs.minProofsPerEpoch;
        constantsStorage.proof.maxProofsPerEpoch = initArgs.maxProofsPerEpoch;
        constantsStorage.proof.difficulty = initArgs.difficulty;
        constantsStorage.proof.nextDifficulty = initArgs.difficulty;

        constantsStorage.randomXProxy = initArgs.randomXProxy;
        constantsStorage.oracle = initArgs.oracle;

        constantsStorage.reward.rewardPoolPerEpochs.push(
            RewardPoolPerEpoch({epoch: 1, value: initArgs.initRewardPool}) // TODO DIAMOND ensure it is 1
        );

        constantsStorage.fltPrice = initArgs.fltPrice;
        constantsStorage.commitment.fltCollateralPerUnit =
            LibCapacityConst._calcFLTCollateralPerUnit(initArgs.usdCollateralPerUnit, initArgs.fltPrice);

        // from EpochController
        EpochControllerStorage storage epochControllerStorage = LibEpochController.store();
        epochControllerStorage.epochDuration = coreParams.epochDuration;
        epochControllerStorage.initTimestamp = block.timestamp;
    }

    // DO NOT EDIT FURTHER

    // Find facet for function that is called and execute the
    // function if a facet is found and return any value.
    fallback() external payable {
        LibDiamond.DiamondStorage storage ds;
        bytes32 position = LibDiamond.DIAMOND_STORAGE_POSITION;
        // get diamond storage
        assembly {
            ds.slot := position
        }
        // get facet from function selector
        address facet = ds.selectorToFacetAndPosition[msg.sig].facetAddress;
        require(facet != address(0), "Diamond: Function does not exist");
        // Execute external function from facet using delegatecall and return any value.
        assembly {
            // copy function selector and any arguments
            calldatacopy(0, 0, calldatasize())
            // execute function call using the facet
            let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
            // get any return value
            returndatacopy(0, 0, returndatasize())
            // return any return value or error back to the caller
            switch result
                case 0 {
                    revert(0, returndatasize())
                }
                default {
                    return(0, returndatasize())
                }
        }
    }

    receive() external payable {}
}
