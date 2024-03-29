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
import type { NonPayableOverrides } from "../../../common";
import type {
  Multicall3,
  Multicall3Interface,
} from "../../../src/utils/Multicall3";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate3Value",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610a93908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630f28c97d14610107578063174dea7114610102578063252dba42146100fd57806327e86d6e146100f85780633408e470146100f3578063399542e9146100ee5780633e64a696146100e957806342cbb15c146100e45780634d2301cc146100df57806382ad56cb146100da57806386d516e8146100d5578063a8b0574e146100d0578063bce38bd7146100cb578063c3077fa9146100c65763ee82ac5e146100c157600080fd5b610744565b6106aa565b610687565b61066c565b610651565b610587565b61055f565b610533565b610518565b6104f4565b610485565b610465565b6103a4565b610249565b34610122576000366003190112610122576020604051428152f35b600080fd5b9181601f84011215610122578235916001600160401b038311610122576020808501948460051b01011161012257565b602060031982011261012257600435906001600160401b0382116101225761018191600401610127565b9091565b919082519283825260005b8481106101b1575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610190565b908082519081815260208091019281808460051b8301019501936000915b8483106101f35750505050505090565b9091929394958480610225600193601f19868203018752828b5180511515835201519060409081858201520190610185565b98019301930191949392906101e3565b9060206102469281815201906101c5565b90565b61025236610157565b600061025d826108d5565b91815b8181106102865761028284610276853414610a14565b60405191829182610235565b0390f35b610290818561087b565b5161029c8284886109f2565b60008060406102d081850135809901986102b5866107f6565b926102c36060880188610800565b9390915180948193610832565b03925af1916102dd610840565b906102f2602094859384840152829015159052565b5191013517156103055750600101610260565b62461bcd60e51b600052600452601760245276135d5b1d1a58d85b1b0cce8818d85b1b0819985a5b1959604a1b60445260846000fd5b90604082019082526020604081840152835180925260608301928160608460051b8301019501936000915b8483106103765750505050505090565b9091929394958480610394600193605f198682030187528a51610185565b9801930193019194939290610366565b6103ad36610157565b906103bf6103ba836107a2565b610778565b82815291601f196103cf826107a2565b0160005b81811061045457505060005b8181106103f5576040518061028286438361033b565b8061044e60008061040960019587896107cf565b81610421610416836107f6565b926020810190610800565b919061043260405180948193610832565b03925af161043e610840565b610448848961087b565b5261088f565b016103df565b8060606020809388010152016103d3565b346101225760003660031901126101225760206040516000194301408152f35b34610122576000366003190112610122576020604051468152f35b9060406003198301126101225760043580151581036101225791602435906001600160401b0382116101225761018191600401610127565b61024693926060928252602082015281604082015201906101c5565b610282610509610503366104a0565b9161093a565b604051918291434043846104d8565b34610122576000366003190112610122576020604051488152f35b34610122576000366003190112610122576020604051438152f35b6001600160a01b0381160361012257565b3461012257602036600319011261012257602060043561057e8161054e565b31604051908152f35b61059036610157565b610599816108d5565b9060005b8181106105b257604051806102828582610235565b6105bc818461087b565b516105c88284876109d0565b6000806105d4836107f6565b6105e68260406102c381880188610800565b03925af1916105f3610840565b90610608602094859384840152829015159052565b51910135171561061b575060010161059d565b62461bcd60e51b600052600452601760245276135d5b1d1a58d85b1b0cce8818d85b1b0819985a5b1959604a1b60445260646000fd5b34610122576000366003190112610122576020604051458152f35b34610122576000366003190112610122576020604051418152f35b610282610696610503366104a0565b6040519182916020835260208301906101c5565b6106b336610157565b6106bc816108d5565b9160005b8281106106d957604051806102828643804090846104d8565b8061073e6106e96001938761087b565b516106f58387876107cf565b60008082356107038161054e565b8161071360209586810190610800565b9190826040519384928337810182815203925af190610730610840565b90830152151580915261088f565b016106c0565b34610122576020366003190112610122576020604051600435408152f35b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b0381118382101761079d57604052565b610762565b6001600160401b03811161079d5760051b60200190565b634e487b7160e01b600052603260045260246000fd5b91908110156107f15760051b81013590603e1981360301821215610122570190565b6107b9565b356102468161054e565b903590601e198136030182121561012257018035906001600160401b0382116101225760200191813603831361012257565b908092918237016000815290565b3d15610876573d906001600160401b03821161079d57610869601f8301601f1916602001610778565b9182523d6000602084013e565b606090565b80518210156107f15760209160051b010190565b1561089657565b60405162461bcd60e51b8152602060048201526017602482015276135d5b1d1a58d85b1b0cce8818d85b1b0819985a5b1959604a1b6044820152606490fd5b906108e26103ba836107a2565b82815280926108f3601f19916107a2565b016000805b8281106109055750505050565b604080519091908083016001600160401b0381118282101761079d5760209352838152826060818301528287010152016108f8565b929190610946826108d5565b9360005b8381106109575750505050565b806109646001928861087b565b51836109718388886107cf565b600080823561097f8161054e565b8161098f60209586810190610800565b9190826040519384928337810182815203925af1906109ac610840565b9084015215158092526109c1575b500161094a565b6109ca9061088f565b386109ba565b91908110156107f15760051b81013590605e1981360301821215610122570190565b91908110156107f15760051b81013590607e1981360301821215610122570190565b15610a1b57565b60405162461bcd60e51b815260206004820152601a60248201527909aead8e8d2c6c2d8d8667440ecc2d8eaca40dad2e6dac2e8c6d60331b6044820152606490fdfea2646970667358221220e333528f16b68d46e4735d79755910094060491a0e7ea697988e896b65a38caa64736f6c63430008130033";

type Multicall3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall3__factory extends ContractFactory {
  constructor(...args: Multicall3ConstructorParams) {
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
      Multicall3 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Multicall3__factory {
    return super.connect(runner) as Multicall3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall3Interface {
    return new Interface(_abi) as Multicall3Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): Multicall3 {
    return new Contract(address, _abi, runner) as unknown as Multicall3;
  }
}
