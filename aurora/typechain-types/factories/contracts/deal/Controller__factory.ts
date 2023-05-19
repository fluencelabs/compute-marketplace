/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Controller,
  ControllerInterface,
} from "../../../contracts/deal/Controller";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resourceOwner",
        type: "address",
      },
    ],
    name: "joinViaMatcher",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "proxiableUUID",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "setAppCID",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051611f0f61007b600039600081816101f3015281816102810152818161037b0152818161040901526104b90152611f0f6000f3fe6080604052600436106100915760003560e01c80638da5cb5b116100595780638da5cb5b14610134578063b688a3631461015f578063cae52eaa14610176578063e5e63b311461019f578063f2fde38b146101c857610091565b80633659cfe6146100965780634f1ef286146100bf57806352d1902d146100db578063715018a6146101065780638129fc1c1461011d575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b8919061125d565b6101f1565b005b6100d960048036038101906100d491906113d0565b610379565b005b3480156100e757600080fd5b506100f06104b5565b6040516100fd9190611445565b60405180910390f35b34801561011257600080fd5b5061011b61056e565b005b34801561012957600080fd5b50610132610582565b005b34801561014057600080fd5b506101496106c7565b604051610156919061146f565b60405180910390f35b34801561016b57600080fd5b506101746106d6565b005b34801561018257600080fd5b5061019d600480360381019061019891906114ea565b6107ba565b005b3480156101ab57600080fd5b506101c660048036038101906101c1919061125d565b6108a8565b005b3480156101d457600080fd5b506101ef60048036038101906101ea919061125d565b61098d565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361027f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610276906115ba565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166102be6109a1565b73ffffffffffffffffffffffffffffffffffffffff1614610314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030b9061164c565b60405180910390fd5b61031d816109f8565b61037681600067ffffffffffffffff81111561033c5761033b6112a5565b5b6040519080825280601f01601f19166020018201604052801561036e5781602001600182028036833780820191505090505b506000610a70565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610407576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fe906115ba565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104466109a1565b73ffffffffffffffffffffffffffffffffffffffff161461049c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104939061164c565b60405180910390fd5b6104a5826109f8565b6104b182826001610a70565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c906116de565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b610576610bde565b6105806000610c5c565b565b6000603260019054906101000a900460ff161590508080156105b657506001603260009054906101000a900460ff1660ff16105b806105e557506105c530610d22565b1580156105e457506001603260009054906101000a900460ff1660ff16145b5b610624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061b90611770565b60405180910390fd5b6001603260006101000a81548160ff021916908360ff1602179055508015610662576001603260016101000a81548160ff0219169083151502179055505b61066a610d45565b80156106c4576000603260016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516106bb91906117e2565b60405180910390a15b50565b60006106d1610d9e565b905090565b6106de610dc8565b73ffffffffffffffffffffffffffffffffffffffff1663c1499f716040518163ffffffff1660e01b8152600401602060405180830381865afa158015610728573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074c919061183b565b73ffffffffffffffffffffffffffffffffffffffff166372aebe3633336040518363ffffffff1660e01b8152600401610786929190611868565b600060405180830381600087803b1580156107a057600080fd5b505af11580156107b4573d6000803e3d6000fd5b50505050565b6107c2610bde565b6107ca610dc8565b73ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610814573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083891906118cf565b73ffffffffffffffffffffffffffffffffffffffff1663cae52eaa83836040518363ffffffff1660e01b8152600401610872929190611929565b600060405180830381600087803b15801561088c57600080fd5b505af11580156108a0573d6000803e3d6000fd5b505050505050565b6108b0610dc8565b73ffffffffffffffffffffffffffffffffffffffff1663c1499f716040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e919061183b565b73ffffffffffffffffffffffffffffffffffffffff166372aebe3682336040518363ffffffff1660e01b8152600401610958929190611868565b600060405180830381600087803b15801561097257600080fd5b505af1158015610986573d6000803e3d6000fd5b5050505050565b610995610bde565b61099e81610e1c565b50565b60006109cf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610e9f565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff16610a17610dc8565b73ffffffffffffffffffffffffffffffffffffffff1614610a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6490611999565b60405180910390fd5b50565b610a9c7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b610ea9565b60000160009054906101000a900460ff1615610ac057610abb83610eb3565b610bd9565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610b2857506040513d601f19601f82011682018060405250810190610b2591906119e5565b60015b610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e90611a84565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610bcc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc390611b16565b60405180910390fd5b50610bd8838383610f6c565b5b505050565b610be6610f98565b73ffffffffffffffffffffffffffffffffffffffff16610c046106c7565b73ffffffffffffffffffffffffffffffffffffffff1614610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190611b82565b60405180910390fd5b565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b603260019054906101000a900460ff16610d94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8b90611c14565b60405180910390fd5b610d9c610fa0565b565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610df37fe0c154d538f20c8d1aadcd299210daa7f0a434a5bf4a39795668b28b61ec6e96610e9f565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e24610bde565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8a90611ca6565b60405180910390fd5b610e9c81610c5c565b50565b6000819050919050565b6000819050919050565b610ebc81611001565b610efb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef290611d38565b60405180910390fd5b80610f287f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610e9f565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610f7583611024565b600082511180610f825750805b15610f9357610f918383611073565b505b505050565b600033905090565b603260019054906101000a900460ff16610fef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe690611c14565b60405180910390fd5b610fff610ffa610f98565b610c5c565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b61102d81610eb3565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606110988383604051806060016040528060278152602001611eb3602791396110a0565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516110ca9190611dc9565b600060405180830381855af49150503d8060008114611105576040519150601f19603f3d011682016040523d82523d6000602084013e61110a565b606091505b509150915061111b86838387611126565b925050509392505050565b606083156111885760008351036111805761114085611001565b61117f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117690611e2c565b60405180910390fd5b5b829050611193565b611192838361119b565b5b949350505050565b6000825111156111ae5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e29190611e90565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061122a826111ff565b9050919050565b61123a8161121f565b811461124557600080fd5b50565b60008135905061125781611231565b92915050565b600060208284031215611273576112726111f5565b5b600061128184828501611248565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112dd82611294565b810181811067ffffffffffffffff821117156112fc576112fb6112a5565b5b80604052505050565b600061130f6111eb565b905061131b82826112d4565b919050565b600067ffffffffffffffff82111561133b5761133a6112a5565b5b61134482611294565b9050602081019050919050565b82818337600083830152505050565b600061137361136e84611320565b611305565b90508281526020810184848401111561138f5761138e61128f565b5b61139a848285611351565b509392505050565b600082601f8301126113b7576113b661128a565b5b81356113c7848260208601611360565b91505092915050565b600080604083850312156113e7576113e66111f5565b5b60006113f585828601611248565b925050602083013567ffffffffffffffff811115611416576114156111fa565b5b611422858286016113a2565b9150509250929050565b6000819050919050565b61143f8161142c565b82525050565b600060208201905061145a6000830184611436565b92915050565b6114698161121f565b82525050565b60006020820190506114846000830184611460565b92915050565b600080fd5b600080fd5b60008083601f8401126114aa576114a961128a565b5b8235905067ffffffffffffffff8111156114c7576114c661148a565b5b6020830191508360018202830111156114e3576114e261148f565b5b9250929050565b60008060208385031215611501576115006111f5565b5b600083013567ffffffffffffffff81111561151f5761151e6111fa565b5b61152b85828601611494565b92509250509250929050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b60006115a4602c83611537565b91506115af82611548565b604082019050919050565b600060208201905081810360008301526115d381611597565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000611636602c83611537565b9150611641826115da565b604082019050919050565b6000602082019050818103600083015261166581611629565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006116c8603883611537565b91506116d38261166c565b604082019050919050565b600060208201905081810360008301526116f7816116bb565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061175a602e83611537565b9150611765826116fe565b604082019050919050565b600060208201905081810360008301526117898161174d565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006117cc6117c76117c284611790565b6117a7565b61179a565b9050919050565b6117dc816117b1565b82525050565b60006020820190506117f760008301846117d3565b92915050565b60006118088261121f565b9050919050565b611818816117fd565b811461182357600080fd5b50565b6000815190506118358161180f565b92915050565b600060208284031215611851576118506111f5565b5b600061185f84828501611826565b91505092915050565b600060408201905061187d6000830185611460565b61188a6020830184611460565b9392505050565b600061189c8261121f565b9050919050565b6118ac81611891565b81146118b757600080fd5b50565b6000815190506118c9816118a3565b92915050565b6000602082840312156118e5576118e46111f5565b5b60006118f3848285016118ba565b91505092915050565b60006119088385611537565b9350611915838584611351565b61191e83611294565b840190509392505050565b600060208201905081810360008301526119448184866118fc565b90509392505050565b7f4d6f64756c65426173653a2063616c6c6572206973206e6f7420636f72650000600082015250565b6000611983601e83611537565b915061198e8261194d565b602082019050919050565b600060208201905081810360008301526119b281611976565b9050919050565b6119c28161142c565b81146119cd57600080fd5b50565b6000815190506119df816119b9565b92915050565b6000602082840312156119fb576119fa6111f5565b5b6000611a09848285016119d0565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000611a6e602e83611537565b9150611a7982611a12565b604082019050919050565b60006020820190508181036000830152611a9d81611a61565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000611b00602983611537565b9150611b0b82611aa4565b604082019050919050565b60006020820190508181036000830152611b2f81611af3565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b6c602083611537565b9150611b7782611b36565b602082019050919050565b60006020820190508181036000830152611b9b81611b5f565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000611bfe602b83611537565b9150611c0982611ba2565b604082019050919050565b60006020820190508181036000830152611c2d81611bf1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611c90602683611537565b9150611c9b82611c34565b604082019050919050565b60006020820190508181036000830152611cbf81611c83565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000611d22602d83611537565b9150611d2d82611cc6565b604082019050919050565b60006020820190508181036000830152611d5181611d15565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611d8c578082015181840152602081019050611d71565b60008484015250505050565b6000611da382611d58565b611dad8185611d63565b9350611dbd818560208601611d6e565b80840191505092915050565b6000611dd58284611d98565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611e16601d83611537565b9150611e2182611de0565b602082019050919050565b60006020820190508181036000830152611e4581611e09565b9050919050565b600081519050919050565b6000611e6282611e4c565b611e6c8185611537565b9350611e7c818560208601611d6e565b611e8581611294565b840191505092915050565b60006020820190508181036000830152611eaa8184611e57565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b73efedc48907fe7d5b12ac8398a44390a45c8e282ba1691b035e14e6562213564736f6c63430008110033";

type ControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Controller__factory extends ContractFactory {
  constructor(...args: ControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Controller> {
    return super.deploy(overrides || {}) as Promise<Controller>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Controller {
    return super.attach(address) as Controller;
  }
  override connect(signer: Signer): Controller__factory {
    return super.connect(signer) as Controller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ControllerInterface {
    return new utils.Interface(_abi) as ControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controller {
    return new Contract(address, _abi, signerOrProvider) as Controller;
  }
}
