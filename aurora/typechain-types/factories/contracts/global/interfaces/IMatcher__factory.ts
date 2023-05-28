/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMatcher,
  IMatcherInterface,
} from "../../../../contracts/global/interfaces/IMatcher";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICore",
        name: "deal",
        type: "address",
      },
    ],
    name: "matchWithDeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMatcher__factory {
  static readonly abi = _abi;
  static createInterface(): IMatcherInterface {
    return new utils.Interface(_abi) as IMatcherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMatcher {
    return new Contract(address, _abi, signerOrProvider) as IMatcher;
  }
}
