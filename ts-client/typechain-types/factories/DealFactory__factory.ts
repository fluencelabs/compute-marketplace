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
import type { DealFactory, DealFactoryInterface } from "../DealFactory";

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
        internalType: "enum GlobalConst.Constant",
        name: "constantType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ConstantsUpdated",
    type: "event",
  },
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
        internalType: "contract IDeal",
        name: "deal",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAtEpoch",
        type: "uint256",
      },
    ],
    name: "DealCreated",
    type: "event",
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
    name: "currentEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes4",
            name: "prefixes",
            type: "bytes4",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct CIDV1",
        name: "appCID_",
        type: "tuple",
      },
      {
        internalType: "contract IERC20",
        name: "paymentToken_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minWorkers_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetWorkers_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWorkersPerProvider_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerWorkerEpoch_",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes4",
            name: "prefixes",
            type: "bytes4",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct CIDV1[]",
        name: "effectors_",
        type: "tuple[]",
      },
      {
        internalType: "enum IConfig.AccessType",
        name: "accessType_",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "accessList_",
        type: "address[]",
      },
    ],
    name: "deployDeal",
    outputs: [
      {
        internalType: "contract IDeal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epochDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fluenceToken",
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
        internalType: "contract IDeal",
        name: "deal",
        type: "address",
      },
    ],
    name: "hasDeal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minDepositedEpoches",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minRematchingEpoches",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum GlobalConst.Constant",
        name: "constantType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
    ],
    name: "setConstant",
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
  "0x6080806040523461001657611027908161001c8239f35b600080fdfe60808060405260043610156200001457600080fd5b600090813560e01c908163210530531462000a195750806342e14eb214620009da5780634ff0876a146200099b578063715018a6146200092c5780637358c57a14620008ed5780637667180814620008c6578063805f2c3114620003495780638da5cb5b1462000310578063ac027f9714620002c6578063d6f563d81462000198578063df23872114620001595763f2fde38b14620000b257600080fd5b346200015657602036600319011262000156576004356001600160a01b03818116918290036200015157620000e662000b80565b8115620001385760008051602062000fd283398151915280546001600160a01b031981168417909155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b604051631e4fbdf760e01b815260048101849052602490fd5b600080fd5b80fd5b5034620001565780600319360112620001565760207f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fea54604051908152f35b50346200015657604036600319011262000156576004356002811015620002c257602435620001c662000b80565b600091806200024057817f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fe9555b604051926200022c57825260208201527f2e1ab86f1064ccfa48a8bdbdac5c07e8da91d61e58f10bdba0e53257c0d7294390604090a180f35b634e487b7160e01b84526021600452602484fd5b600181036200027257817f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fea55620001f3565b60405162461bcd60e51b815260206004820152602260248201527f476c6f62616c436f6e73743a20756e6b6e6f776e20636f6e7374616e74207479604482015261706560f01b6064820152608490fd5b5080fd5b503462000156578060031936011262000156577f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fe8546040516001600160a01b039091168152602090f35b5034620001565780600319360112620001565760008051602062000fd2833981519152546040516001600160a01b039091168152602090f35b5034620001565736600319016101408112620002c2576040136200015657604435906001600160a01b0382168203620001565767ffffffffffffffff60e43511620001565736602360e435011215620001565767ffffffffffffffff60e4356004013511620001565736602460e4356004013560061b60e43501011162000156576003610104351015620001565767ffffffffffffffff6101243511620001565736602361012435011215620001565767ffffffffffffffff6101243560040135116200015657366024610124356004013560051b6101243501011162000156577f21811dc5bb11da2b2076245a2c14796806445512606a02297e6b92fb11728107546040516363ec861f60e11b6020820152306024820152906001600160a01b03166004356001600160e01b031981168103620008c25763ffffffff60e01b166044830152602435606483015260018060a01b038416608483015260643560a483015260843560c483015260a43560e483015260c4356101048301526101806101248301526101a4820160e4356004013590526101c4820182602460e4350191855b60e43560040135811062000882575060209192506101043561014484015260231983820301610164840152610124356004013581520160246101243501855b6101243560040135811062000848575050336101848301520362000558601f199182810185528462000aa9565b60405192610416928385019385851067ffffffffffffffff8611176200083457908593929162000bbc8539845260406020850152805190816040860152865b8281106200081b57505090601f828760608795819801015201160103019082f080156200080e576001600160a01b03168082527f21811dc5bb11da2b2076245a2c14796806445512606a02297e6b92fb1172810860205260408220805460ff19166001179055916200063b6200061260843560c43562000acc565b7f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fe9549062000acc565b6040516323b872dd60e01b815233600482015230602482015260448101829052909190602081606481876001600160a01b0387165af180156200080357916020918593620007e1575b5060405163095ea7b360e01b8152600481018790526024810185905292839160449183916001600160a01b03165af180156200078357620007ab575b50823b15620002c2576040519063b6b55f2560e01b82526004820152818160248183875af18015620007a0576200078e575b5090803b15620002c25760405163f2fde38b60e01b8152336004820152828160248183865af1801562000783576200076b575b6020826200073262000b10565b60405190828252838201527f5d7193b85584b797ec2ad4b4652dbe3503bda615592828b3109879d19d9178d660403392a2604051908152f35b62000777839162000a7e565b620002c2578162000725565b6040513d85823e3d90fd5b620007999062000a7e565b38620006f2565b6040513d84823e3d90fd5b620007d19060203d602011620007d9575b620007c8818362000aa9565b81019062000af6565b5038620006c0565b503d620007bc565b620007fb90833d8511620007d957620007c8818362000aa9565b503862000684565b6040513d86823e3d90fd5b50604051903d90823e3d90fd5b6020828201810151606088840101528795500162000597565b634e487b7160e01b87526041600452602487fd5b9092509082356001600160a01b03811681036200087e576001600160a01b0316815284926020918201929101906001016200052b565b8680fd5b915082356001600160e01b0319811681036200087e576001600160e01b0319168152602083810135908201526040928301928592910190600101620004ec565b8380fd5b503462000156578060031936011262000156576020620008e562000b10565b604051908152f35b5034620001565780600319360112620001565760207f121cc1dc602a3fb184234459f7659f6eed686da5dd7f26f01d0c4c514c9c578254604051908152f35b503462000156578060031936011262000156576200094962000b80565b60008051602062000fd283398151915280546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5034620001565780600319360112620001565760207f121cc1dc602a3fb184234459f7659f6eed686da5dd7f26f01d0c4c514c9c578354604051908152f35b5034620001565780600319360112620001565760207f69fd5a837e660cfb338b8ff11344a85cd64fc4103e7bd3f69149a34c2eff5fe954604051908152f35b905034620002c2576020366003190112620002c2576004356001600160a01b0381169081900362000a7a5760408360ff92602095527f21811dc5bb11da2b2076245a2c14796806445512606a02297e6b92fb11728108855220541615158152f35b8280fd5b67ffffffffffffffff811162000a9357604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111762000a9357604052565b8181029291811591840414171562000ae057565b634e487b7160e01b600052601160045260246000fd5b908160209103126200015157518015158103620001515790565b7f121cc1dc602a3fb184234459f7659f6eed686da5dd7f26f01d0c4c514c9c578254420342811162000ae0577f121cc1dc602a3fb184234459f7659f6eed686da5dd7f26f01d0c4c514c9c57835490811562000b6a570490565b634e487b7160e01b600052601260045260246000fd5b60008051602062000fd2833981519152546001600160a01b0316330362000ba357565b60405163118cdaa760e01b8152336004820152602490fdfe604060808152610416908138038061001681610218565b93843982019181818403126102135780516001600160a01b038116808203610213576020838101516001600160401b0394919391858211610213570186601f820112156102135780519061007161006c83610253565b610218565b918083528583019886828401011161021357888661008f930161026e565b813b156101b9577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916841790556000927fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a28051158015906101b2575b61010b575b855160d190816103458239f35b855194606086019081118682101761019e578697849283926101889952602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b8a8901525190845af4913d15610194573d9061017a61006c83610253565b91825281943d92013e610291565b508038808080806100fe565b5060609250610291565b634e487b7160e01b84526041600452602484fd5b50826100f9565b855162461bcd60e51b815260048101859052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761023d57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161023d57601f01601f191660200190565b60005b8381106102815750506000910152565b8181015183820152602001610271565b919290156102f357508151156102a5575090565b3b156102ae5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156103065750805190602001fd5b6044604051809262461bcd60e51b825260206004830152610336815180928160248601526020868601910161026e565b601f01601f19168101030190fdfe608060405236156054577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e156050573d90f35b3d90fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e156050573d90f3fea2646970667358221220f14f2fc5440c57774c4daa556074f00589f7a223d4d05192e524eb3c310f142064736f6c63430008130033c43ef91433cf7d0ab2ca98c18785d28d6a5685461d30e867805d7a83cc8deb80a26469706673582212204c8ef23edf78cd18d544236212e1b7cb18b81dd6a0e3070e619c8e5333b0abd364736f6c63430008130033";

type DealFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DealFactory__factory extends ContractFactory {
  constructor(...args: DealFactoryConstructorParams) {
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
      DealFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DealFactory__factory {
    return super.connect(runner) as DealFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealFactoryInterface {
    return new Interface(_abi) as DealFactoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DealFactory {
    return new Contract(address, _abi, runner) as unknown as DealFactory;
  }
}
