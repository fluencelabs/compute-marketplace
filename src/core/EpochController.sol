// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "./interfaces/IEpochController.sol";

contract EpochController is Initializable, IEpochController {
    // ------------------ Storage ------------------
    bytes32 private constant _STORAGE_SLOT =
        bytes32(uint256(keccak256("fluence.market.storage.v1.epochController")) - 1);

    struct EpochControllerStorage {
        uint256 initTimestamp;
        uint256 epochDuration;
    }

    EpochControllerStorage private _storage;

    function _getEpochControllerStorage() private pure returns (EpochControllerStorage storage s) {
        bytes32 storageSlot = _STORAGE_SLOT;
        assembly {
            s.slot := storageSlot
        }
    }

    // ------------------ Initializer ------------------
    function __EpochController_init(uint256 epochDuration_) internal onlyInitializing {
        EpochControllerStorage storage epochControllerStorage = _getEpochControllerStorage();

        epochControllerStorage.initTimestamp = block.timestamp;
        epochControllerStorage.epochDuration = epochDuration_;
    }

    // ------------------ View ------------------
    function currentEpoch() public view returns (uint256) {
        EpochControllerStorage storage epochControllerStorage = _getEpochControllerStorage();

        return (block.timestamp - epochControllerStorage.initTimestamp) / epochControllerStorage.epochDuration;
    }

    function epochDuration() public view returns (uint256) {
        return _getEpochControllerStorage().epochDuration;
    }

    function initTimestamp() public view returns (uint256) {
        return _getEpochControllerStorage().initTimestamp;
    }
}
