/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  OwnableUpgradableDiamond,
  OwnableUpgradableDiamondInterface,
} from "../OwnableUpgradableDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608080604052346100165761020b908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c8063715018a6146101125780638da5cb5b146100dc5763f2fde38b1461003e57600080fd5b346100d95760203660031901126100d9576004356001600160a01b03818116918290036100d55761006d61017c565b81156100bc576000805160206101b683398151915280546001600160a01b031981168417909155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b604051631e4fbdf760e01b815260048101849052602490fd5b8280fd5b80fd5b50346100d957806003193601126100d9576000805160206101b6833981519152546040516001600160a01b039091168152602090f35b50346100d957806003193601126100d95761012b61017c565b6000805160206101b683398151915280546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b6000805160206101b6833981519152546001600160a01b0316330361019d57565b60405163118cdaa760e01b8152336004820152602490fdfec43ef91433cf7d0ab2ca98c18785d28d6a5685461d30e867805d7a83cc8deb80a2646970667358221220ac452f3efe5946ef673624d410cf065b36795cdf1ac68e59c0bd277e74fbd0c264736f6c63430008130033";

type OwnableUpgradableDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableUpgradableDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableUpgradableDiamond__factory extends ContractFactory {
  constructor(...args: OwnableUpgradableDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      OwnableUpgradableDiamond & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): OwnableUpgradableDiamond__factory {
    return super.connect(runner) as OwnableUpgradableDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableUpgradableDiamondInterface {
    return new Interface(_abi) as OwnableUpgradableDiamondInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OwnableUpgradableDiamond {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as OwnableUpgradableDiamond;
  }
}