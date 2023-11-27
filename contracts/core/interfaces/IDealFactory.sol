// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.19;

import "../../deal/base/Types.sol";
import "../../deal/interfaces/IDeal.sol";

interface IDealFactory {
    // ----------------- Events -----------------
    event DealCreated(
        address indexed owner,
        IDeal deal,
        uint createdAtEpoch,
        IERC20 paymentToken,
        uint minWorkers,
        uint targetWorkers,
        uint maxWorkersPerProvider,
        uint pricePerWorkerEpoch
    );

    // ----------------- View -----------------
    function hasDeal(IDeal deal) external view returns (bool);

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
    ) external returns (IDeal);
}
