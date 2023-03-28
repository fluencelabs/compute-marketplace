/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WorkersManager,
  WorkersManagerInterface,
} from "../../../../contracts/Deal/external/WorkersManager";

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
        internalType: "PATId",
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
        indexed: false,
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RemoveProviderToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum DealStatus",
        name: "newStatus",
        type: "uint8",
      },
    ],
    name: "StatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "createProviderToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getPATOwner",
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
    inputs: [
      {
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "removeProviderToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class WorkersManager__factory {
  static readonly abi = _abi;
  static createInterface(): WorkersManagerInterface {
    return new utils.Interface(_abi) as WorkersManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WorkersManager {
    return new Contract(address, _abi, signerOrProvider) as WorkersManager;
  }
}
