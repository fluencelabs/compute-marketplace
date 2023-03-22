// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../../internal/interfaces/IDealConfigInternal.sol";
import "../../internal/interfaces/IStatusControllerInternal.sol";
import "../../../Utils/Consts.sol";

abstract contract IPaymentInternal {
    function _getPaymentBalance() internal view virtual returns (uint256);
}

abstract contract IPaymentMutableInternal {
    function _depositToPaymentBalance(uint256 amount) internal virtual;

    function _withdrawFromPaymentBalance(IERC20 token, uint256 amount) internal virtual;
}
