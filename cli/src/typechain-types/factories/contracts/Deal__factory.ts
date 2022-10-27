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
import type { PromiseOrValue } from "../../common";
import type { Deal, DealInterface } from "../../contracts/Deal";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "paymentToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "daoAddress_",
        type: "address",
      },
      {
        internalType: "contract AquaProxy",
        name: "aquaProxy_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "fluenceToken_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "airScriptHash_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MIN_STAKE",
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
    name: "WITHDRAW_TIMEOUT",
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
    inputs: [],
    name: "createWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "daoAddress",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
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
    name: "isStopped",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
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
    ],
    name: "submitGoldenParticle",
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
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawUnlockTime",
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
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200201038038062002010833981810160405281019062000038919062000249565b8373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050806002819055505050505050620002d1565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200014c826200011f565b9050919050565b600062000160826200013f565b9050919050565b620001728162000153565b81146200017e57600080fd5b50565b600081519050620001928162000167565b92915050565b620001a3816200013f565b8114620001af57600080fd5b50565b600081519050620001c38162000198565b92915050565b6000620001d6826200013f565b9050919050565b620001e881620001c9565b8114620001f457600080fd5b50565b6000815190506200020881620001dd565b92915050565b6000819050919050565b62000223816200020e565b81146200022f57600080fd5b50565b600081519050620002438162000218565b92915050565b600080600080600060a086880312156200026857620002676200011a565b5b6000620002788882890162000181565b95505060206200028b88828901620001b2565b94505060406200029e88828901620001f7565b9350506060620002b18882890162000181565b9250506080620002c48882890162000232565b9150509295509295909350565b60805160a05160c05160e051611cc66200034a6000396000818161075f0152818161080401528181610aa30152610c8201526000818161052101526105e201526000818161030001528181610ae00152610cbf015260008181610324015281816103aa0152818161044b015261089f0152611cc66000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806385079cd711610097578063cb1c2b5c11610066578063cb1c2b5c1461023f578063e4029e6f1461025d578063f890ab0414610279578063fa52c7d81461029757610100565b806385079cd7146101cb578063a694fc3a146101e9578063ac027f9714610205578063b6b55f251461022357610100565b806335769738116100d357806335769738146101695780633ccfd60b146101875780633f683b6a1461019157806384773201146101af57610100565b806306761d3e1461010557806311f25e89146101235780632131c68c1461012d5780633013ce291461014b575b600080fd5b61010d6102c8565b60405161011a9190611065565b60405180910390f35b61012b6102ce565b005b6101356102fe565b60405161014291906110c1565b60405180910390f35b610153610322565b604051610160919061113b565b60405180910390f35b610171610346565b60405161017e9190611065565b60405180910390f35b61018f61034c565b005b610199610492565b6040516101a69190611171565b60405180910390f35b6101c960048036038101906101c491906111e6565b6104a3565b005b6101d36105e0565b6040516101e09190611263565b60405180910390f35b61020360048036038101906101fe91906112aa565b610604565b005b61020d610802565b60405161021a919061113b565b60405180910390f35b61023d600480360381019061023891906112aa565b610826565b005b6102476108e7565b6040516102549190611065565b60405180910390f35b610277600480360381019061027291906112d7565b6108ed565b005b6102816108f0565b60405161028e9190611339565b60405180910390f35b6102b160048036038101906102ac9190611354565b6108f6565b6040516102bf929190611381565b60405180910390f35b610e1081565b60016000806101000a81548160ff021916908315150217905550610e10426102f691906113d9565b600181905550565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b60008054906101000a900460ff168015610367575060015442115b6103a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039d90611490565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161040191906110c1565b602060405180830381865afa15801561041e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044291906114c5565b905061048f33827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109279092919063ffffffff16565b50565b60008054906101000a900460ff1681565b6002548280600001906104b69190611501565b6040516020016104c79291906115a3565b604051602081830303815290604052805190602001201461051d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051490611608565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d5897b7a846040518263ffffffff1660e01b81526004016105789190611789565b6020604051808303816000875af1158015610597573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bb91906117d7565b905080156105d1576105cc826109ad565b6105db565b6105da82610b67565b5b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103e8811015610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064090611850565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900460ff161515151581525050905081816000018181516106ce91906113d9565b9150818152505080602001516106f05760018160200190151590811515815250505b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016107ba93929190611870565b6020604051808303816000875af11580156107d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fd91906117d7565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600154421161086a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610861906118f3565b60405180910390fd5b60008054906101000a900460ff166108975760016000806101000a81548160ff0219169083151502179055505b6108e43330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610d46909392919063ffffffff16565b50565b6103e881565b50565b60025481565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b6109a88363a9059cbb60e01b8484604051602401610946929190611913565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610dcf565b505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900460ff1615151515815250509050600081600001519050600082600001818152505081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd307f0000000000000000000000000000000000000000000000000000000000000000846040518463ffffffff1660e01b8152600401610b1e93929190611870565b6020604051808303816000875af1158015610b3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6191906117d7565b50505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900460ff161515151581525050905060006064808360000151610bee919061196b565b610bf8919061199c565b90508082600001818151610c0c91906119de565b9150818152505081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd307f0000000000000000000000000000000000000000000000000000000000000000846040518463ffffffff1660e01b8152600401610cfd93929190611870565b6020604051808303816000875af1158015610d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4091906117d7565b50505050565b610dc9846323b872dd60e01b858585604051602401610d6793929190611870565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610dcf565b50505050565b6000610e31826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e969092919063ffffffff16565b9050600081511115610e915780806020019051810190610e5191906117d7565b610e90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8790611a84565b60405180910390fd5b5b505050565b6060610ea58484600085610eae565b90509392505050565b606082471015610ef3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eea90611b16565b60405180910390fd5b610efc85610fc2565b610f3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3290611b82565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f649190611c13565b60006040518083038185875af1925050503d8060008114610fa1576040519150601f19603f3d011682016040523d82523d6000602084013e610fa6565b606091505b5091509150610fb6828286610fe5565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610ff557829050611045565b6000835111156110085782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103c9190611c6e565b60405180910390fd5b9392505050565b6000819050919050565b61105f8161104c565b82525050565b600060208201905061107a6000830184611056565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110ab82611080565b9050919050565b6110bb816110a0565b82525050565b60006020820190506110d660008301846110b2565b92915050565b6000819050919050565b60006111016110fc6110f784611080565b6110dc565b611080565b9050919050565b6000611113826110e6565b9050919050565b600061112582611108565b9050919050565b6111358161111a565b82525050565b6000602082019050611150600083018461112c565b92915050565b60008115159050919050565b61116b81611156565b82525050565b60006020820190506111866000830184611162565b92915050565b600080fd5b600080fd5b600080fd5b6000608082840312156111b1576111b0611196565b5b81905092915050565b6111c3816110a0565b81146111ce57600080fd5b50565b6000813590506111e0816111ba565b92915050565b600080604083850312156111fd576111fc61118c565b5b600083013567ffffffffffffffff81111561121b5761121a611191565b5b6112278582860161119b565b9250506020611238858286016111d1565b9150509250929050565b600061124d82611108565b9050919050565b61125d81611242565b82525050565b60006020820190506112786000830184611254565b92915050565b6112878161104c565b811461129257600080fd5b50565b6000813590506112a48161127e565b92915050565b6000602082840312156112c0576112bf61118c565b5b60006112ce84828501611295565b91505092915050565b6000602082840312156112ed576112ec61118c565b5b600082013567ffffffffffffffff81111561130b5761130a611191565b5b6113178482850161119b565b91505092915050565b6000819050919050565b61133381611320565b82525050565b600060208201905061134e600083018461132a565b92915050565b60006020828403121561136a5761136961118c565b5b6000611378848285016111d1565b91505092915050565b60006040820190506113966000830185611056565b6113a36020830184611162565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113e48261104c565b91506113ef8361104c565b9250828201905080821115611407576114066113aa565b5b92915050565b600082825260208201905092915050565b7f57697468647261772072657175657374206973206e6f7420637265617465642060008201527f6f72206e6f7420657870697265642064656c6179000000000000000000000000602082015250565b600061147a60348361140d565b91506114858261141e565b604082019050919050565b600060208201905081810360008301526114a98161146d565b9050919050565b6000815190506114bf8161127e565b92915050565b6000602082840312156114db576114da61118c565b5b60006114e9848285016114b0565b91505092915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261151e5761151d6114f2565b5b80840192508235915067ffffffffffffffff8211156115405761153f6114f7565b5b60208301925060018202360383131561155c5761155b6114fc565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061158a8385611564565b935061159783858461156f565b82840190509392505050565b60006115b082848661157e565b91508190509392505050565b7f496e76616c69642073637269707420696e207061727469636c65000000000000600082015250565b60006115f2601a8361140d565b91506115fd826115bc565b602082019050919050565b60006020820190508181036000830152611621816115e5565b9050919050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261165457611653611632565b5b83810192508235915060208301925067ffffffffffffffff82111561167c5761167b611628565b5b6001820236038313156116925761169161162d565b5b509250929050565b600082825260208201905092915050565b6000601f19601f8301169050919050565b60006116c8838561169a565b93506116d583858461156f565b6116de836116ab565b840190509392505050565b6000608083016116fc6000840184611637565b858303600087015261170f8382846116bc565b925050506117206020840184611637565b85830360208701526117338382846116bc565b925050506117446040840184611637565b85830360408701526117578382846116bc565b925050506117686060840184611637565b858303606087015261177b8382846116bc565b925050508091505092915050565b600060208201905081810360008301526117a381846116e9565b905092915050565b6117b481611156565b81146117bf57600080fd5b50565b6000815190506117d1816117ab565b92915050565b6000602082840312156117ed576117ec61118c565b5b60006117fb848285016117c2565b91505092915050565b7f416d6f756e7420697320746f6f20736d616c6c00000000000000000000000000600082015250565b600061183a60138361140d565b915061184582611804565b602082019050919050565b600060208201905081810360008301526118698161182d565b9050919050565b600060608201905061188560008301866110b2565b61189260208301856110b2565b61189f6040830184611056565b949350505050565b7f4465706f736974206973206c6f636b6564000000000000000000000000000000600082015250565b60006118dd60118361140d565b91506118e8826118a7565b602082019050919050565b6000602082019050818103600083015261190c816118d0565b9050919050565b600060408201905061192860008301856110b2565b6119356020830184611056565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006119768261104c565b91506119818361104c565b9250826119915761199061193c565b5b828204905092915050565b60006119a78261104c565b91506119b28361104c565b92508282026119c08161104c565b915082820484148315176119d7576119d66113aa565b5b5092915050565b60006119e98261104c565b91506119f48361104c565b9250828203905081811115611a0c57611a0b6113aa565b5b92915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611a6e602a8361140d565b9150611a7982611a12565b604082019050919050565b60006020820190508181036000830152611a9d81611a61565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611b0060268361140d565b9150611b0b82611aa4565b604082019050919050565b60006020820190508181036000830152611b2f81611af3565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611b6c601d8361140d565b9150611b7782611b36565b602082019050919050565b60006020820190508181036000830152611b9b81611b5f565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611bd6578082015181840152602081019050611bbb565b60008484015250505050565b6000611bed82611ba2565b611bf78185611bad565b9350611c07818560208601611bb8565b80840191505092915050565b6000611c1f8284611be2565b915081905092915050565b600081519050919050565b6000611c4082611c2a565b611c4a818561140d565b9350611c5a818560208601611bb8565b611c63816116ab565b840191505092915050565b60006020820190508181036000830152611c888184611c35565b90509291505056fea2646970667358221220aa12fd7716a5b5c3b9d6ecc2862411d9813d94d23dc8081614e51c63e80952d564736f6c63430008110033";

type DealConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Deal__factory extends ContractFactory {
  constructor(...args: DealConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    paymentToken_: PromiseOrValue<string>,
    daoAddress_: PromiseOrValue<string>,
    aquaProxy_: PromiseOrValue<string>,
    fluenceToken_: PromiseOrValue<string>,
    airScriptHash_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Deal> {
    return super.deploy(
      paymentToken_,
      daoAddress_,
      aquaProxy_,
      fluenceToken_,
      airScriptHash_,
      overrides || {}
    ) as Promise<Deal>;
  }
  override getDeployTransaction(
    paymentToken_: PromiseOrValue<string>,
    daoAddress_: PromiseOrValue<string>,
    aquaProxy_: PromiseOrValue<string>,
    fluenceToken_: PromiseOrValue<string>,
    airScriptHash_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      paymentToken_,
      daoAddress_,
      aquaProxy_,
      fluenceToken_,
      airScriptHash_,
      overrides || {}
    );
  }
  override attach(address: string): Deal {
    return super.attach(address) as Deal;
  }
  override connect(signer: Signer): Deal__factory {
    return super.connect(signer) as Deal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealInterface {
    return new utils.Interface(_abi) as DealInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Deal {
    return new Contract(address, _abi, signerOrProvider) as Deal;
  }
}
