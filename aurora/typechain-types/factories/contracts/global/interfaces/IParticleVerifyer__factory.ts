/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IParticleVerifyer,
  IParticleVerifyerInterface,
} from "../../../../contracts/global/interfaces/IParticleVerifyer";

const _abi = [
  {
    inputs: [
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
        internalType: "struct Particle",
        name: "particle",
        type: "tuple",
      },
    ],
    name: "verifyParticle",
    outputs: [
      {
        internalType: "PATId[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IParticleVerifyer__factory {
  static readonly abi = _abi;
  static createInterface(): IParticleVerifyerInterface {
    return new utils.Interface(_abi) as IParticleVerifyerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IParticleVerifyer {
    return new Contract(address, _abi, signerOrProvider) as IParticleVerifyer;
  }
}
