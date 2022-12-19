/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ProviderManager,
  ProviderManagerInterface,
} from "../../../../contracts/Deal/ProviderManager.sol/ProviderManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "ProviderManagerState.PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "AddProviderToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "ProviderManagerState.PATId",
        name: "",
        type: "bytes32",
      },
    ],
    name: "PATs",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "addProviderToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aquaProxy",
    outputs: [
      {
        internalType: "contract AquaProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "cancelWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fluenceToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getRole",
    outputs: [
      {
        internalType: "enum RoleManagerState.Role",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ProviderManagerState.PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "removeProviderToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requiredStake",
            type: "uint256",
          },
        ],
        internalType: "struct DealConfigState.Settings",
        name: "settings_",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "propertyBits",
        type: "bytes32",
      },
    ],
    name: "setNewSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requiredStake",
            type: "uint256",
          },
        ],
        internalType: "struct DealConfigState.Settings",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ProviderManagerState.PATId",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "air",
            type: "string",
          },
          {
            internalType: "string",
            name: "prevData",
            type: "string",
          },
          {
            internalType: "string",
            name: "params",
            type: "string",
          },
          {
            internalType: "string",
            name: "callResults",
            type: "string",
          },
        ],
        internalType: "struct AquaProxy.Particle",
        name: "particle",
        type: "tuple",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subnetId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ProviderManager__factory {
  static readonly abi = _abi;
  static createInterface(): ProviderManagerInterface {
    return new utils.Interface(_abi) as ProviderManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProviderManager {
    return new Contract(address, _abi, signerOrProvider) as ProviderManager;
  }
}
