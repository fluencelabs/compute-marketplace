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
  "0x6101006040523480156200001257600080fd5b5060405162001ece38038062001ece833981810160405281019062000038919062000249565b8373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050806002819055505050505050620002d1565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200014c826200011f565b9050919050565b600062000160826200013f565b9050919050565b620001728162000153565b81146200017e57600080fd5b50565b600081519050620001928162000167565b92915050565b620001a3816200013f565b8114620001af57600080fd5b50565b600081519050620001c38162000198565b92915050565b6000620001d6826200013f565b9050919050565b620001e881620001c9565b8114620001f457600080fd5b50565b6000815190506200020881620001dd565b92915050565b6000819050919050565b62000223816200020e565b81146200022f57600080fd5b50565b600081519050620002438162000218565b92915050565b600080600080600060a086880312156200026857620002676200011a565b5b6000620002788882890162000181565b95505060206200028b88828901620001b2565b94505060406200029e88828901620001f7565b9350506060620002b18882890162000181565b9250506080620002c48882890162000232565b9150509295509295909350565b60805160a05160c05160e051611b926200033c6000396000818161081e015281816108c30152610b8d0152600081816105a1015261069b0152600081816102fe0152610bca015260008181610322015281816103a801528181610449015261095e0152611b926000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806385079cd711610097578063cb1c2b5c11610066578063cb1c2b5c1461023f578063e4029e6f1461025d578063f890ab0414610279578063fa52c7d81461029757610100565b806385079cd7146101cb578063a694fc3a146101e9578063ac027f9714610205578063b6b55f251461022357610100565b806335769738116100d357806335769738146101695780633ccfd60b146101875780633f683b6a1461019157806376c1521e146101af57610100565b806306761d3e1461010557806311f25e89146101235780632131c68c1461012d5780633013ce291461014b575b600080fd5b61010d6102c8565b60405161011a9190610f70565b60405180910390f35b61012b6102cd565b005b6101356102fc565b6040516101429190610fcc565b60405180910390f35b610153610320565b6040516101609190611046565b60405180910390f35b610171610344565b60405161017e9190610f70565b60405180910390f35b61018f61034a565b005b610199610490565b6040516101a6919061107c565b60405180910390f35b6101c960048036038101906101c491906110f1565b6104a1565b005b6101d3610699565b6040516101e0919061116e565b60405180910390f35b61020360048036038101906101fe91906111b5565b6106bd565b005b61020d6108c1565b60405161021a9190611046565b60405180910390f35b61023d600480360381019061023891906111b5565b6108e5565b005b6102476109a6565b6040516102549190610f70565b60405180910390f35b610277600480360381019061027291906111e2565b6109b2565b005b6102816109b5565b60405161028e9190611244565b60405180910390f35b6102b160048036038101906102ac919061125f565b6109bb565b6040516102bf92919061128c565b60405180910390f35b603c81565b60016000806101000a81548160ff021916908315150217905550603c426102f491906112e4565b600181905550565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b60008054906101000a900460ff168015610365575060015442115b6103a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039b9061139b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103ff9190610fcc565b602060405180830381865afa15801561041c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044091906113d0565b905061048d33827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109ec9092919063ffffffff16565b50565b60008054906101000a900460ff1681565b6002548280600001906104b4919061140c565b6040516020016104c59291906114ae565b604051602081830303815290604052805190602001201461051b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051290611513565b60405180910390fd5b600082806000019061052d919061140c565b84806020019061053d919061140c565b86806040019061054d919061140c565b88806060019061055d919061140c565b604051602001610574989796959493929190611533565b60405160208183030381529060405280519060200120905060038081111561059f5761059e611579565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634344767e836040518263ffffffff1660e01b81526004016105f89190611244565b602060405180830381865afa158015610615573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063991906115cd565b600381111561064b5761064a611579565b5b1461068b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068290611646565b60405180910390fd5b61069482610a72565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b678ac7230489e80000811015610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff906116b2565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900460ff1615151515815250509050818160000181815161078d91906112e4565b9150818152505080602001516107af5760018160200190151590811515815250505b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610879939291906116d2565b6020604051808303816000875af1158015610898573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bc9190611735565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001544211610929576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610920906117ae565b60405180910390fd5b60008054906101000a900460ff166109565760016000806101000a81548160ff0219169083151502179055505b6109a33330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c51909392919063ffffffff16565b50565b678ac7230489e8000081565b50565b60025481565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b610a6d8363a9059cbb60e01b8484604051602401610a0b9291906117ce565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cda565b505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900460ff161515151581525050905060006064808360000151610af99190611826565b610b039190611857565b90508082600001818151610b179190611899565b9150818152505081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd307f0000000000000000000000000000000000000000000000000000000000000000846040518463ffffffff1660e01b8152600401610c08939291906116d2565b6020604051808303816000875af1158015610c27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4b9190611735565b50505050565b610cd4846323b872dd60e01b858585604051602401610c72939291906116d2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cda565b50505050565b6000610d3c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610da19092919063ffffffff16565b9050600081511115610d9c5780806020019051810190610d5c9190611735565b610d9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d929061193f565b60405180910390fd5b5b505050565b6060610db08484600085610db9565b90509392505050565b606082471015610dfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df5906119d1565b60405180910390fd5b610e0785610ecd565b610e46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3d90611a3d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e6f9190611ace565b60006040518083038185875af1925050503d8060008114610eac576040519150601f19603f3d011682016040523d82523d6000602084013e610eb1565b606091505b5091509150610ec1828286610ef0565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610f0057829050610f50565b600083511115610f135782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f479190611b3a565b60405180910390fd5b9392505050565b6000819050919050565b610f6a81610f57565b82525050565b6000602082019050610f856000830184610f61565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fb682610f8b565b9050919050565b610fc681610fab565b82525050565b6000602082019050610fe16000830184610fbd565b92915050565b6000819050919050565b600061100c61100761100284610f8b565b610fe7565b610f8b565b9050919050565b600061101e82610ff1565b9050919050565b600061103082611013565b9050919050565b61104081611025565b82525050565b600060208201905061105b6000830184611037565b92915050565b60008115159050919050565b61107681611061565b82525050565b6000602082019050611091600083018461106d565b92915050565b600080fd5b600080fd5b600080fd5b6000608082840312156110bc576110bb6110a1565b5b81905092915050565b6110ce81610fab565b81146110d957600080fd5b50565b6000813590506110eb816110c5565b92915050565b6000806040838503121561110857611107611097565b5b600083013567ffffffffffffffff8111156111265761112561109c565b5b611132858286016110a6565b9250506020611143858286016110dc565b9150509250929050565b600061115882611013565b9050919050565b6111688161114d565b82525050565b6000602082019050611183600083018461115f565b92915050565b61119281610f57565b811461119d57600080fd5b50565b6000813590506111af81611189565b92915050565b6000602082840312156111cb576111ca611097565b5b60006111d9848285016111a0565b91505092915050565b6000602082840312156111f8576111f7611097565b5b600082013567ffffffffffffffff8111156112165761121561109c565b5b611222848285016110a6565b91505092915050565b6000819050919050565b61123e8161122b565b82525050565b60006020820190506112596000830184611235565b92915050565b60006020828403121561127557611274611097565b5b6000611283848285016110dc565b91505092915050565b60006040820190506112a16000830185610f61565b6112ae602083018461106d565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112ef82610f57565b91506112fa83610f57565b9250828201905080821115611312576113116112b5565b5b92915050565b600082825260208201905092915050565b7f57697468647261772072657175657374206973206e6f7420637265617465642060008201527f6f72206e6f7420657870697265642064656c6179000000000000000000000000602082015250565b6000611385603483611318565b915061139082611329565b604082019050919050565b600060208201905081810360008301526113b481611378565b9050919050565b6000815190506113ca81611189565b92915050565b6000602082840312156113e6576113e5611097565b5b60006113f4848285016113bb565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611429576114286113fd565b5b80840192508235915067ffffffffffffffff82111561144b5761144a611402565b5b60208301925060018202360383131561146757611466611407565b5b509250929050565b600081905092915050565b82818337600083830152505050565b6000611495838561146f565b93506114a283858461147a565b82840190509392505050565b60006114bb828486611489565b91508190509392505050565b7f496e76616c69642073637269707420696e207061727469636c65000000000000600082015250565b60006114fd601a83611318565b9150611508826114c7565b602082019050919050565b6000602082019050818103600083015261152c816114f0565b9050919050565b6000611540828a8c611489565b915061154d82888a611489565b915061155a828688611489565b9150611567828486611489565b91508190509998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600481106115b557600080fd5b50565b6000815190506115c7816115a8565b92915050565b6000602082840312156115e3576115e2611097565b5b60006115f1848285016115b8565b91505092915050565b7f5061727469636c65206973206e6f74206661696c656400000000000000000000600082015250565b6000611630601683611318565b915061163b826115fa565b602082019050919050565b6000602082019050818103600083015261165f81611623565b9050919050565b7f416d6f756e7420697320746f6f20736d616c6c00000000000000000000000000600082015250565b600061169c601383611318565b91506116a782611666565b602082019050919050565b600060208201905081810360008301526116cb8161168f565b9050919050565b60006060820190506116e76000830186610fbd565b6116f46020830185610fbd565b6117016040830184610f61565b949350505050565b61171281611061565b811461171d57600080fd5b50565b60008151905061172f81611709565b92915050565b60006020828403121561174b5761174a611097565b5b600061175984828501611720565b91505092915050565b7f4465706f736974206973206c6f636b6564000000000000000000000000000000600082015250565b6000611798601183611318565b91506117a382611762565b602082019050919050565b600060208201905081810360008301526117c78161178b565b9050919050565b60006040820190506117e36000830185610fbd565b6117f06020830184610f61565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061183182610f57565b915061183c83610f57565b92508261184c5761184b6117f7565b5b828204905092915050565b600061186282610f57565b915061186d83610f57565b925082820261187b81610f57565b91508282048414831517611892576118916112b5565b5b5092915050565b60006118a482610f57565b91506118af83610f57565b92508282039050818111156118c7576118c66112b5565b5b92915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611929602a83611318565b9150611934826118cd565b604082019050919050565b600060208201905081810360008301526119588161191c565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006119bb602683611318565b91506119c68261195f565b604082019050919050565b600060208201905081810360008301526119ea816119ae565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611a27601d83611318565b9150611a32826119f1565b602082019050919050565b60006020820190508181036000830152611a5681611a1a565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611a91578082015181840152602081019050611a76565b60008484015250505050565b6000611aa882611a5d565b611ab28185611a68565b9350611ac2818560208601611a73565b80840191505092915050565b6000611ada8284611a9d565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000611b0c82611ae5565b611b168185611318565b9350611b26818560208601611a73565b611b2f81611af0565b840191505092915050565b60006020820190508181036000830152611b548184611b01565b90509291505056fea2646970667358221220e0c8aec6cdd46349c88d49f72637591df215ba93a9553efa68d23c3fed903d0d64736f6c63430008110033";

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
