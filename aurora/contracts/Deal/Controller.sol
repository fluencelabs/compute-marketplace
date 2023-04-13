// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "./interfaces/IController.sol";
import "./base/ModuleBase.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Controller is ModuleBase, OwnableUpgradeable, IController {
    function initialize() public initializer {
        __Ownable_init();
    }

    function owner() public view override(IController, OwnableUpgradeable) returns (address) {
        return OwnableUpgradeable.owner();
    }

    function setAppCID(string calldata cid) external onlyOwner {
        _core().getConfig().setAppCID(cid);
    }

    function join() external {
        _core().getWorkers().createPAT(msg.sender);
    }
}
