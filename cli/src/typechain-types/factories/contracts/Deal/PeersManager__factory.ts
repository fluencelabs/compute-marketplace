/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PeersManager,
  PeersManagerInterface,
} from "../../../contracts/Deal/PeersManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "paymentToken_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "airScriptHash_",
        type: "bytes32",
      },
      {
        internalType: "contract Core",
        name: "core_",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "EXIT_TIMEOUT",
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
    name: "STAKE_AMOUNT",
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
    name: "airScriptHash",
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
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract Core",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createExitRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
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
    name: "paymentToken",
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
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
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
        name: "",
        type: "address",
      },
    ],
    name: "validators",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "enum IPeerManager.Status",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "lastExitRqTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200201e3803806200201e833981810160405281019062000037919062000441565b838383836200005b6200004f620000f660201b60201c565b620000fe60201b60201c565b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000e881620001c260201b60201c565b5050505050505050620005ce565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001d26200025860201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000244576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023b906200053a565b60405180910390fd5b6200025581620000fe60201b60201c565b50565b62000268620000f660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166200028e620002e960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002de90620005ac565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003448262000317565b9050919050565b6000620003588262000337565b9050919050565b6200036a816200034b565b81146200037657600080fd5b50565b6000815190506200038a816200035f565b92915050565b6000819050919050565b620003a58162000390565b8114620003b157600080fd5b50565b600081519050620003c5816200039a565b92915050565b6000620003d88262000337565b9050919050565b620003ea81620003cb565b8114620003f657600080fd5b50565b6000815190506200040a81620003df565b92915050565b6200041b8162000337565b81146200042757600080fd5b50565b6000815190506200043b8162000410565b92915050565b600080600080608085870312156200045e576200045d62000312565b5b60006200046e8782880162000379565b94505060206200048187828801620003b4565b93505060406200049487828801620003f9565b9250506060620004a7878288016200042a565b91505092959194509250565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000522602683620004b3565b91506200052f82620004c4565b604082019050919050565b60006020820190508181036000830152620005558162000513565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000594602083620004b3565b9150620005a1826200055c565b602082019050919050565b60006020820190508181036000830152620005c78162000585565b9050919050565b608051611a34620005ea60003960006102a50152611a346000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063ac027f9711610097578063f2fde38b11610066578063f2fde38b14610219578063f890ab0414610235578063fa52c7d814610253578063faf5625f1461028557610100565b8063ac027f97146101c9578063e1d3af05146101e7578063e9fad8ee146101f1578063f2f4eb26146101fb57610100565b806385079cd7116100d357806385079cd714610153578063871d6a3d146101715780638cd9236e1461018d5780638da5cb5b146101ab57610100565b80633013ce29146101055780633a4b66f114610123578063715018a61461012d57806376c1521e14610137575b600080fd5b61010d6102a3565b60405161011a9190610f49565b60405180910390f35b61012b6102c7565b005b610135610470565b005b610151600480360381019061014c9190610fd0565b610484565b005b61015b610848565b604051610168919061104d565b60405180910390f35b61018b60048036038101906101869190611068565b6108e0565b005b6101956108e3565b6040516101a291906110ca565b60405180910390f35b6101b36108e8565b6040516101c091906110f4565b60405180910390f35b6101d1610911565b6040516101de9190610f49565b60405180910390f35b6101ef6109a9565b005b6101f9610aa9565b005b610203610c8e565b6040516102109190611130565b60405180910390f35b610233600480360381019061022e919061114b565b610cb4565b005b61023d610d37565b60405161024a9190611191565b60405180910390f35b61026d6004803603810190610268919061114b565b610d3d565b60405161027c93929190611223565b60405180910390f35b61028d610d74565b60405161029a91906110ca565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015414801561035357506000600281111561032d5761032c6111ac565b5b8160010160009054906101000a900460ff166002811115610351576103506111ac565b5b145b610392576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610389906112b7565b60405180910390fd5b678ac7230489e800008160000181905550600160028111156103b7576103b66111ac565b5b8160010160009054906101000a900460ff1660028111156103db576103da6111ac565b5b50506103e5610911565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd3330678ac7230489e800006040518463ffffffff1660e01b8152600401610429939291906112d7565b6020604051808303816000875af1158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190611346565b5050565b610478610d80565b6104826000610dfe565b565b6002548280600001906104979190611382565b6040516020016104a8929190611424565b60405160208183030381529060405280519060200120146104fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f590611489565b60405180910390fd5b60008280600001906105109190611382565b8480602001906105209190611382565b8680604001906105309190611382565b8880606001906105409190611382565b6040516020016105579897969594939291906114a9565b604051602081830303815290604052805190602001209050600380811115610582576105816111ac565b5b61058a610848565b73ffffffffffffffffffffffffffffffffffffffff16634344767e836040518263ffffffff1660e01b81526004016105c29190611191565b602060405180830381865afa1580156105df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106039190611514565b6003811115610615576106146111ac565b5b14610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c9061158d565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a900460ff1660028111156106d0576106cf6111ac565b5b60028111156106e2576106e16111ac565b5b8152602001600282015481525050905060006064808360000151610706919061160b565b610710919061163c565b90508082600001818151610724919061167e565b9150818152505081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff021916908360028111156107a05761079f6111ac565b5b0217905550604082015181600201559050506107ba610911565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd306107de6108e8565b846040518463ffffffff1660e01b81526004016107fd939291906112d7565b6020604051808303816000875af115801561081c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190611346565b505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385079cd76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108db91906116f0565b905090565b50565b603c81565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015610980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a4919061175b565b905090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060016002811115610a00576109ff6111ac565b5b8160010160009054906101000a900460ff166002811115610a2457610a236111ac565b5b14610a64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5b906117d4565b60405180910390fd5b600280811115610a7757610a766111ac565b5b8160010160009054906101000a900460ff166002811115610a9b57610a9a6111ac565b5b505042816002018190555050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600280811115610aff57610afe6111ac565b5b8160010160009054906101000a900460ff166002811115610b2357610b226111ac565b5b14610b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5a90611840565b60405180910390fd5b42603c8260020154610b759190611860565b11610bb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bac906118e0565b60405180910390fd5b60008160000154905060006002811115610bd257610bd16111ac565b5b8260010160009054906101000a900460ff166002811115610bf657610bf56111ac565b5b505060008260000181905550610c0a610911565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b8152600401610c46939291906112d7565b6020604051808303816000875af1158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c899190611346565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610cbc610d80565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2290611972565b60405180910390fd5b610d3481610dfe565b50565b60025481565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154905083565b678ac7230489e8000081565b610d88610ec2565b73ffffffffffffffffffffffffffffffffffffffff16610da66108e8565b73ffffffffffffffffffffffffffffffffffffffff1614610dfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df3906119de565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f0f610f0a610f0584610eca565b610eea565b610eca565b9050919050565b6000610f2182610ef4565b9050919050565b6000610f3382610f16565b9050919050565b610f4381610f28565b82525050565b6000602082019050610f5e6000830184610f3a565b92915050565b600080fd5b600080fd5b600080fd5b600060808284031215610f8957610f88610f6e565b5b81905092915050565b6000610f9d82610eca565b9050919050565b610fad81610f92565b8114610fb857600080fd5b50565b600081359050610fca81610fa4565b92915050565b60008060408385031215610fe757610fe6610f64565b5b600083013567ffffffffffffffff81111561100557611004610f69565b5b61101185828601610f73565b925050602061102285828601610fbb565b9150509250929050565b600061103782610f16565b9050919050565b6110478161102c565b82525050565b6000602082019050611062600083018461103e565b92915050565b60006020828403121561107e5761107d610f64565b5b600082013567ffffffffffffffff81111561109c5761109b610f69565b5b6110a884828501610f73565b91505092915050565b6000819050919050565b6110c4816110b1565b82525050565b60006020820190506110df60008301846110bb565b92915050565b6110ee81610f92565b82525050565b600060208201905061110960008301846110e5565b92915050565b600061111a82610f16565b9050919050565b61112a8161110f565b82525050565b60006020820190506111456000830184611121565b92915050565b60006020828403121561116157611160610f64565b5b600061116f84828501610fbb565b91505092915050565b6000819050919050565b61118b81611178565b82525050565b60006020820190506111a66000830184611182565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600381106111ec576111eb6111ac565b5b50565b60008190506111fd826111db565b919050565b600061120d826111ef565b9050919050565b61121d81611202565b82525050565b600060608201905061123860008301866110bb565b6112456020830185611214565b61125260408301846110bb565b949350505050565b600082825260208201905092915050565b7f416c7265616479207374616b6564000000000000000000000000000000000000600082015250565b60006112a1600e8361125a565b91506112ac8261126b565b602082019050919050565b600060208201905081810360008301526112d081611294565b9050919050565b60006060820190506112ec60008301866110e5565b6112f960208301856110e5565b61130660408301846110bb565b949350505050565b60008115159050919050565b6113238161130e565b811461132e57600080fd5b50565b6000815190506113408161131a565b92915050565b60006020828403121561135c5761135b610f64565b5b600061136a84828501611331565b91505092915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261139f5761139e611373565b5b80840192508235915067ffffffffffffffff8211156113c1576113c0611378565b5b6020830192506001820236038313156113dd576113dc61137d565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061140b83856113e5565b93506114188385846113f0565b82840190509392505050565b60006114318284866113ff565b91508190509392505050565b7f496e76616c69642073637269707420696e207061727469636c65000000000000600082015250565b6000611473601a8361125a565b915061147e8261143d565b602082019050919050565b600060208201905081810360008301526114a281611466565b9050919050565b60006114b6828a8c6113ff565b91506114c382888a6113ff565b91506114d08286886113ff565b91506114dd8284866113ff565b91508190509998505050505050505050565b600481106114fc57600080fd5b50565b60008151905061150e816114ef565b92915050565b60006020828403121561152a57611529610f64565b5b6000611538848285016114ff565b91505092915050565b7f5061727469636c65206973206e6f74206661696c656400000000000000000000600082015250565b600061157760168361125a565b915061158282611541565b602082019050919050565b600060208201905081810360008301526115a68161156a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611616826110b1565b9150611621836110b1565b925082611631576116306115ad565b5b828204905092915050565b6000611647826110b1565b9150611652836110b1565b9250828202611660816110b1565b91508282048414831517611677576116766115dc565b5b5092915050565b6000611689826110b1565b9150611694836110b1565b92508282039050818111156116ac576116ab6115dc565b5b92915050565b60006116bd82610f92565b9050919050565b6116cd816116b2565b81146116d857600080fd5b50565b6000815190506116ea816116c4565b92915050565b60006020828403121561170657611705610f64565b5b6000611714848285016116db565b91505092915050565b600061172882610f92565b9050919050565b6117388161171d565b811461174357600080fd5b50565b6000815190506117558161172f565b92915050565b60006020828403121561177157611770610f64565b5b600061177f84828501611746565b91505092915050565b7f4e6f742061637469766500000000000000000000000000000000000000000000600082015250565b60006117be600a8361125a565b91506117c982611788565b602082019050919050565b600060208201905081810360008301526117ed816117b1565b9050919050565b7f4e6f7420696e2065786974206d6f646500000000000000000000000000000000600082015250565b600061182a60108361125a565b9150611835826117f4565b602082019050919050565b600060208201905081810360008301526118598161181d565b9050919050565b600061186b826110b1565b9150611876836110b1565b925082820190508082111561188e5761188d6115dc565b5b92915050565b7f5761697420657869742074696d656f7574000000000000000000000000000000600082015250565b60006118ca60118361125a565b91506118d582611894565b602082019050919050565b600060208201905081810360008301526118f9816118bd565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061195c60268361125a565b915061196782611900565b604082019050919050565b6000602082019050818103600083015261198b8161194f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119c860208361125a565b91506119d382611992565b602082019050919050565b600060208201905081810360008301526119f7816119bb565b905091905056fea26469706673582212207fd66e41ee1ac9ff25ab69384752c18436991dcaa29b6fabe222b728104dbd1b64736f6c63430008110033";

type PeersManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PeersManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PeersManager__factory extends ContractFactory {
  constructor(...args: PeersManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    paymentToken_: PromiseOrValue<string>,
    airScriptHash_: PromiseOrValue<BytesLike>,
    core_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PeersManager> {
    return super.deploy(
      paymentToken_,
      airScriptHash_,
      core_,
      owner_,
      overrides || {}
    ) as Promise<PeersManager>;
  }
  override getDeployTransaction(
    paymentToken_: PromiseOrValue<string>,
    airScriptHash_: PromiseOrValue<BytesLike>,
    core_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      paymentToken_,
      airScriptHash_,
      core_,
      owner_,
      overrides || {}
    );
  }
  override attach(address: string): PeersManager {
    return super.attach(address) as PeersManager;
  }
  override connect(signer: Signer): PeersManager__factory {
    return super.connect(signer) as PeersManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PeersManagerInterface {
    return new utils.Interface(_abi) as PeersManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeersManager {
    return new Contract(address, _abi, signerOrProvider) as PeersManager;
  }
}
