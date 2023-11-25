/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC721TokenReceiver,
  IERC721TokenReceiverInterface,
} from "../../MockERC721.sol/IERC721TokenReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC721TokenReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721TokenReceiverInterface {
    return new Interface(_abi) as IERC721TokenReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC721TokenReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IERC721TokenReceiver;
  }
}
