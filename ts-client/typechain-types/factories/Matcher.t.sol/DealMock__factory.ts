/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type {
  DealMock,
  DealMockInterface,
  CIDV1Struct,
} from "../../Matcher.t.sol/DealMock.js";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_pricePerWorkerEpoch",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_paymentToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "_targetWorkers",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "effectors_",
        type: "tuple[]",
        internalType: "struct CIDV1[]",
        components: [
          {
            name: "prefixes",
            type: "bytes4",
            internalType: "bytes4",
          },
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
      {
        name: "_appCID",
        type: "tuple",
        internalType: "struct CIDV1",
        components: [
          {
            name: "prefixes",
            type: "bytes4",
            internalType: "bytes4",
          },
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
      {
        name: "_creationBlock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "accessType",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IConfig.AccessType",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addComputeUnit",
    inputs: [
      {
        name: "computeProvider",
        type: "address",
        internalType: "address",
      },
      {
        name: "unitId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "appCID",
    inputs: [],
    outputs: [
      {
        name: "prefixes",
        type: "bytes4",
        internalType: "bytes4",
      },
      {
        name: "hash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "computeProviderByUnitId",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creationBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "effectors",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct CIDV1[]",
        components: [
          {
            name: "prefixes",
            type: "bytes4",
            internalType: "bytes4",
          },
          {
            name: "hash",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getComputeUnitCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isInAccessList",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "paymentToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pricePerWorkerEpoch",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetWorkers",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unitExists",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x6040608081523461020d57610a148038038061001a81610228565b928339810160e091828183031261020d57805192602092838301519060018060a01b03821680920361020d5783870151606085015190966001600160401b0392909183811161020d5786019080601f8301121561020d57815193841161021257610088888560051b01610228565b9188838681520189819660061b8301019183831161020d578a808e9201925b8484106101f55750505050506100c260c0916080890161024d565b9601516000928355600180546001600160a01b031916909517855560069890985551916801000000000000000083116101e15760075483600755808410610170575b50600782528682209087905b848410610144575050505050508151901c63ffffffff19600254161760025501516003556004555161077d90816102978239f35b818187936002935180518b1c63ffffffff19885416178755015184860155019201920191908790610110565b6001600160ff1b0381811682036101cd57841684036101b9576007835287832090851b81019084861b015b8181106101a85750610104565b80846002925584878201550161019b565b634e487b7160e01b83526011600452602483fd5b634e487b7160e01b84526011600452602484fd5b634e487b7160e01b82526041600452602482fd5b6101ff868561024d565b8152019101908a8d916100a7565b600080fd5b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b0381118382101761021257604052565b919082604091031261020d57604080519081016001600160401b03811182821017610212576040528092805163ffffffff60e01b8116810361020d57825260209081015191015256fe608060409080825260048036101561001657600080fd5b60009060e0928235841c908163055236f4146106de57508063108d2f52146106a157806317634514146106645780632943dcab146106275780633013ce29146105d45780636cd13448146105995780639807a6571461053c5780639bc66868146104d2578063b0db18ad14610482578063b55ec18a14610449578063f5971050146102c35763fc1e5e2a146100aa57600080fd5b346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf576007549167ffffffffffffffff91828411610293578551937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8260051b0116850185811085821117610267578752808552600783526020969587860195939485917fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68891885b8585106101d75750505050505050835194859481860192828752518093528086019493905b8382106101915786860387f35b845180517fffffffff0000000000000000000000000000000000000000000000000000000016875283015186840152879650948501949382019360019190910190610184565b8a9b9897999a518c81018181108482111761023b576001926002928f928d93527fffffffff000000000000000000000000000000000000000000000000000000008854881b16815284880154838201528152019401940193929a999896979a61015f565b60248a60418b7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b6024846041857f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b9060416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5080fd5b509083346102bf57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf576102fc61071f565b90602435808452600860205260ff82852054166103ec579073ffffffffffffffffffffffffffffffffffffffff918452600860205280842060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790556009602052832091167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103c05760010160055580f35b5060116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60648560208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601360248201527f556e697420616c726561647920657869737473000000000000000000000000006044820152fd5b8285346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf5751908152602090f35b508390346104ce5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104ce578160209360ff923581526008855220541690519015158152f35b8280fd5b50503461053957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105395750600254901b6003547fffffffff000000000000000000000000000000000000000000000000000000008351921682526020820152f35b80fd5b508390346104ce5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104ce578160209373ffffffffffffffffffffffffffffffffffffffff92358152600985522054169051908152f35b8285346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf57602091549051908152f35b8285346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf5760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b8285346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf576020906006549051908152f35b508390346104ce57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104ce5760209250549051908152f35b8285346102bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf576020906005549051908152f35b8390346102bf5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102bf5760209161071a61071f565b508152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361074257565b600080fdfea264697066735822122033f2d99d70f47d294eb77c08826ddb85bd49924db97e4ceb6cbc327689a3791d64736f6c63430008130033";

type DealMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DealMock__factory extends ContractFactory {
  constructor(...args: DealMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DealMock";
  }

  override getDeployTransaction(
    _pricePerWorkerEpoch: BigNumberish,
    _paymentToken: AddressLike,
    _targetWorkers: BigNumberish,
    effectors_: CIDV1Struct[],
    _appCID: CIDV1Struct,
    _creationBlock: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _pricePerWorkerEpoch,
      _paymentToken,
      _targetWorkers,
      effectors_,
      _appCID,
      _creationBlock,
      overrides || {}
    );
  }
  override deploy(
    _pricePerWorkerEpoch: BigNumberish,
    _paymentToken: AddressLike,
    _targetWorkers: BigNumberish,
    effectors_: CIDV1Struct[],
    _appCID: CIDV1Struct,
    _creationBlock: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _pricePerWorkerEpoch,
      _paymentToken,
      _targetWorkers,
      effectors_,
      _appCID,
      _creationBlock,
      overrides || {}
    ) as Promise<
      DealMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DealMock__factory {
    return super.connect(runner) as DealMock__factory;
  }
  static readonly contractName: "DealMock";

  public readonly contractName: "DealMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealMockInterface {
    return new Interface(_abi) as DealMockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DealMock {
    return new Contract(address, _abi, runner) as unknown as DealMock;
  }
}
