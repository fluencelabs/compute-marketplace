// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IConfig.sol";
import "./IWorkerManager.sol";
import "src/core/interfaces/ICore.sol";

interface IDeal is IConfig, IWorkerManager {
    // ------------------ Types ------------------
    enum Status {
        INACTIVE,
        ACTIVE,
        ENDED
    }

    // ----------------- Events -----------------
    event Deposited(uint256 amount);
    event Withdrawn(uint256 amount);

    event RewardWithdrawn(bytes32 computeUnitId, uint256 reward);

    event MaxPaidEpochUpdated(uint256 maxPaidEpoch);

    event DealEnded(uint256 endedEpoch);

    // ------------------ Init ------------------
    function initialize(
        ICore globalCore_,
        CIDV1 calldata appCID_,
        IERC20 paymentToken_,
        uint256 minWorkers_,
        uint256 targetWorkers_,
        uint256 maxWorkersPerProvider_,
        uint256 pricePerWorkerEpoch_,
        CIDV1[] calldata effectors_,
        IConfig.AccessType accessType_,
        address[] calldata accessList_
    ) external;

    // ------------------ Public Ownable Functions ------------------
    function deposit(uint256 amount) external;

    function withdraw(uint256 amount) external;

    // ------------------ Public View Functions ------------------
    function getStatus() external view returns (Status);

    function getFreeBalance() external view returns (uint256);

    function getRewardAmount(bytes32 computeUnitId) external view returns (uint256);

    function getMaxPaidEpoch() external view returns (uint256);

    // ------------------ Public Mutable Functions ------------------
    function addComputeUnit(address computeProvider, bytes32 unitId, bytes32 peerId) external;

    function removeComputeUnit(bytes32 computeUnitId) external;

    function withdrawRewards(bytes32 computeUnitId) external;

    function setWorker(bytes32 computeUnitId, bytes32 workerId) external;
}
