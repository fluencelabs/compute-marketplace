/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Workers,
  WorkersInterface,
} from "../../../contracts/deal/Workers";

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
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "PATCreated",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "createPAT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextWorkerIndex",
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
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getPATIndex",
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
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getPATOwner",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getUnlockedAmountBy",
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
    inputs: [
      {
        internalType: "PATId",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "removePAT",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051613b1b61007b60003960008181610b1d01528181610bab01528181610ca501528181610d3301526110370152613b1b6000f3fe6080604052600436106100915760003560e01c806375ddd19a1161005957806375ddd19a14610158578063aa5a0bcd14610183578063c79d469d146101c0578063c8cd58c0146101fd578063cb35a1951461022657610091565b80631216c2f3146100965780633659cfe6146100bf5780634f1ef286146100e857806351cff8d91461010457806352d1902d1461012d575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b891906126d3565b610263565b005b3480156100cb57600080fd5b506100e660048036038101906100e191906126d3565b610b1b565b005b61010260048036038101906100fd9190612846565b610ca3565b005b34801561011057600080fd5b5061012b600480360381019061012691906126d3565b610ddf565b005b34801561013957600080fd5b50610142611033565b60405161014f91906128bb565b60405180910390f35b34801561016457600080fd5b5061016d6110ec565b60405161017a91906128ef565b60405180910390f35b34801561018f57600080fd5b506101aa60048036038101906101a59190612936565b6110f6565b6040516101b791906128ef565b60405180910390f35b3480156101cc57600080fd5b506101e760048036038101906101e29190612936565b61110c565b6040516101f49190612972565b60405180910390f35b34801561020957600080fd5b50610224600480360381019061021f9190612936565b611142565b005b34801561023257600080fd5b5061024d600480360381019061024891906129b9565b611539565b60405161025a91906128ef565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154905060008054905060006102ba6116f5565b905060008173ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d9190612a37565b90508073ffffffffffffffffffffffffffffffffffffffff16632943dcab6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561037a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039e9190612a79565b83106103df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d690612b03565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16638a0c725b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044e9190612a79565b841061048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048690612b6f565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166319cb355d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105009190612a79565b905061059d3330838573ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015610553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105779190612bcd565b73ffffffffffffffffffffffffffffffffffffffff166116fd909392919063ffffffff16565b83806105a890612c29565b94505060008373ffffffffffffffffffffffffffffffffffffffff1663ee6faa2e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061c9190612caf565b905060008173ffffffffffffffffffffffffffffffffffffffff1663200d2ed26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f9190612d01565b9050600060018111156106a5576106a4612d2e565b5b8160018111156106b8576106b7612d2e565b5b14801561073357508373ffffffffffffffffffffffffffffffffffffffff16632db311936040518163ffffffff1660e01b8152600401602060405180830381865afa15801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190612a79565b8610155b156107a857600190508173ffffffffffffffffffffffffffffffffffffffff166395bc9538826040518263ffffffff1660e01b81526004016107759190612da5565b600060405180830381600087803b15801561078f57600080fd5b505af11580156107a3573d6000803e3d6000fd5b505050505b600080600480549050905060008111156108165760046001826107cb9190612dc0565b815481106107dc576107db612df4565b5b9060005260206000200154915060048054806107fb576107fa612e23565b5b6001900381819060005260206000200160009055905561081c565b60035491505b60007fc8aaee8b33ec932cbcaafea157708df26b70956d01af32ed14988794c643e4e38b8460405160200161085393929190612edc565b604051602081830303815290604052805190602001209050600061087682611786565b9050600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290612f65565b60405180910390fd5b610a62818d868a8c73ffffffffffffffffffffffffffffffffffffffff1663a7c1abe06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561095d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109819190612fc3565b73ffffffffffffffffffffffffffffffffffffffff1663e2d2bfe36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ef919061302e565b73ffffffffffffffffffffffffffffffffffffffff1663766718086040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5d9190612a79565b6117f5565b81600560008681526020019081526020016000208190555060018b610a87919061305b565b600160008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550896000819055507ff9afe7870c7ad4010cedbe87273d2282bcedb40f6734c102d53059c8da187bdf828d604051610b059291906130b0565b60405180910390a1505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610ba9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba09061314b565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610be861185a565b73ffffffffffffffffffffffffffffffffffffffff1614610c3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c35906131dd565b60405180910390fd5b610c47816118b1565b610ca081600067ffffffffffffffff811115610c6657610c6561271b565b5b6040519080825280601f01601f191660200182016040528015610c985781602001600182028036833780820191505090505b5060006118b4565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610d31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d289061314b565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610d7061185a565b73ffffffffffffffffffffffffffffffffffffffff1614610dc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbd906131dd565b60405180910390fd5b610dcf826118b1565b610ddb828260016118b4565b5050565b6000610de96116f5565b73ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e579190612a37565b73ffffffffffffffffffffffffffffffffffffffff1663a7c1abe06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ea1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec59190612fc3565b90506000610f938273ffffffffffffffffffffffffffffffffffffffff16639c15d1a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3b9190612a79565b42610f469190612dc0565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a2290919063ffffffff16565b905061102e83828473ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fe5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110099190612bcd565b73ffffffffffffffffffffffffffffffffffffffff16611a559092919063ffffffff16565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146110c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ba9061326f565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6000600354905090565b600061110182611786565b600001549050919050565b600061111782611786565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061114d82611786565b905060008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111de906132db565b60405180910390fd5b60006111f16116f5565b905060008173ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611240573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112649190612a37565b905060008273ffffffffffffffffffffffffffffffffffffffff1663ee6faa2e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d79190612caf565b90506112e7848660020154611adb565b600060016000546112f89190612dc0565b905060018081111561130d5761130c612d2e565b5b8273ffffffffffffffffffffffffffffffffffffffff1663200d2ed26040518163ffffffff1660e01b8152600401602060405180830381865afa158015611358573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137c9190612d01565b600181111561138e5761138d612d2e565b5b14801561140857508273ffffffffffffffffffffffffffffffffffffffff16632db311936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114059190612a79565b81105b1561147a578173ffffffffffffffffffffffffffffffffffffffff166395bc953860006040518263ffffffff1660e01b81526004016114479190612da5565b600060405180830381600087803b15801561146157600080fd5b505af1158015611475573d6000803e3d6000fd5b505050505b6000866000015490506004819080600181540180825580915050600190039060005260206000200160009091909190915055600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008154809291906114ff906132fb565b9190505550816000819055506000801b600560008381526020019081526020016000208190555061152f87611b30565b5050505050505050565b6000806115446116f5565b73ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561158e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b29190612a37565b73ffffffffffffffffffffffffffffffffffffffff1663a7c1abe06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116209190612fc3565b90506116ec8173ffffffffffffffffffffffffffffffffffffffff16639c15d1a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015611670573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116949190612a79565b8461169f9190612dc0565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b7290919063ffffffff16565b91505092915050565b600033905090565b611780846323b872dd60e01b85858560405160240161171e93929190613324565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611b8c565b50505050565b600080829050600060017f4ec9908308216b4c7f2662384140ebfbfcc0766c9877c0140af195bd95ed0c81836040516020016117c392919061335b565b6040516020818303038152906040528051906020012060001c6117e69190612dc0565b60001b90508092505050919050565b838560010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508285600001819055508185600201819055508085600301819055505050505050565b60006118887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611c53565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b6118e07f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611c5d565b60000160009054906101000a900460ff1615611904576118ff83611c67565b611a1d565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561196c57506040513d601f19601f8201168201806040525081019061196991906133b3565b60015b6119ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a290613452565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a07906134e4565b60405180910390fd5b50611a1c838383611d20565b5b505050565b6000806000611a318585611d4c565b91509150600182611a42919061305b565b8560010181905550809250505092915050565b611ad68363a9059cbb60e01b8484604051602401611a74929190613504565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611b8c565b505050565b611b2c81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ec490919063ffffffff16565b5050565b8060010160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600201600090558060030160009055806000016000905550565b600080611b7f8484611d4c565b9150508091505092915050565b6000611bee826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661228f9092919063ffffffff16565b9050600081511115611c4e5780806020019051810190611c0e9190613565565b611c4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4490613604565b60405180910390fd5b5b505050565b6000819050919050565b6000819050919050565b611c70816122a7565b611caf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca690613696565b60405180910390fd5b80611cdc7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611c53565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611d29836122ca565b600082511180611d365750805b15611d4757611d458383612319565b505b505050565b60008060008460000180549050905060008560010154905060008183611d729190612dc0565b905060008103611db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dae90613702565b60405180910390fd5b600080611dd28985600188611dcc9190612dc0565b8b612346565b9150915060008160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905060008514611eb15789600001600186611e3e9190612dc0565b81548110611e4f57611e4e612df4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681611eae9190612dc0565b90505b8281975097505050505050509250929050565b600042905060008211611f0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f039061376e565b60405180910390fd5b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115611f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f64906137da565b60405180910390fd5b60008290506000846000018054905090506000856001015482611f909190612dc0565b9050600081146121a357600086600001600184611fad9190612dc0565b81548110611fbe57611fbd612df4565b5b9060005260206000200190508463ffffffff168160000160009054906101000a900463ffffffff1663ffffffff160361208457838160000160048282829054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661202c9190613822565b92506101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550505050505061228b565b8660000160405180604001604052808763ffffffff168152602001868460000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166120d79190613822565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550505050612286565b8560000160405180604001604052808663ffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b505050505b5050565b606061229e8484600085612449565b90509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6122d381611c67565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061233e8383604051806060016040528060278152602001613abf60279139612516565b905092915050565b60008060008590506000859050600060028284612363919061305b565b61236d91906138a1565b905088600001818154811061238557612384612df4565b5b9060005260206000200193505b8183146124395760008460000160009054906101000a900463ffffffff1663ffffffff1690508681036123cb5781955050505050612440565b868110156123e7576001826123e0919061305b565b93506123f7565b6001826123f49190612dc0565b92505b60028385612405919061305b565b61240f91906138a1565b915089600001828154811061242757612426612df4565b5b90600052602060002001945050612392565b8094505050505b94509492505050565b60608247101561248e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161248590613944565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516124b791906139d5565b60006040518083038185875af1925050503d80600081146124f4576040519150601f19603f3d011682016040523d82523d6000602084013e6124f9565b606091505b509150915061250a8783838761259c565b92505050949350505050565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161254091906139d5565b600060405180830381855af49150503d806000811461257b576040519150601f19603f3d011682016040523d82523d6000602084013e612580565b606091505b50915091506125918683838761259c565b925050509392505050565b606083156125fe5760008351036125f6576125b6856122a7565b6125f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ec90613a38565b60405180910390fd5b5b829050612609565b6126088383612611565b5b949350505050565b6000825111156126245781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126589190613a9c565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126a082612675565b9050919050565b6126b081612695565b81146126bb57600080fd5b50565b6000813590506126cd816126a7565b92915050565b6000602082840312156126e9576126e861266b565b5b60006126f7848285016126be565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6127538261270a565b810181811067ffffffffffffffff821117156127725761277161271b565b5b80604052505050565b6000612785612661565b9050612791828261274a565b919050565b600067ffffffffffffffff8211156127b1576127b061271b565b5b6127ba8261270a565b9050602081019050919050565b82818337600083830152505050565b60006127e96127e484612796565b61277b565b90508281526020810184848401111561280557612804612705565b5b6128108482856127c7565b509392505050565b600082601f83011261282d5761282c612700565b5b813561283d8482602086016127d6565b91505092915050565b6000806040838503121561285d5761285c61266b565b5b600061286b858286016126be565b925050602083013567ffffffffffffffff81111561288c5761288b612670565b5b61289885828601612818565b9150509250929050565b6000819050919050565b6128b5816128a2565b82525050565b60006020820190506128d060008301846128ac565b92915050565b6000819050919050565b6128e9816128d6565b82525050565b600060208201905061290460008301846128e0565b92915050565b612913816128a2565b811461291e57600080fd5b50565b6000813590506129308161290a565b92915050565b60006020828403121561294c5761294b61266b565b5b600061295a84828501612921565b91505092915050565b61296c81612695565b82525050565b60006020820190506129876000830184612963565b92915050565b612996816128d6565b81146129a157600080fd5b50565b6000813590506129b38161298d565b92915050565b600080604083850312156129d0576129cf61266b565b5b60006129de858286016126be565b92505060206129ef858286016129a4565b9150509250929050565b6000612a0482612695565b9050919050565b612a14816129f9565b8114612a1f57600080fd5b50565b600081519050612a3181612a0b565b92915050565b600060208284031215612a4d57612a4c61266b565b5b6000612a5b84828501612a22565b91505092915050565b600081519050612a738161298d565b92915050565b600060208284031215612a8f57612a8e61266b565b5b6000612a9d84828501612a64565b91505092915050565b600082825260208201905092915050565b7f54617267657420776f726b657273207265616368656400000000000000000000600082015250565b6000612aed601683612aa6565b9150612af882612ab7565b602082019050919050565b60006020820190508181036000830152612b1c81612ae0565b9050919050565b7f4d617820776f726b657273207065722070726f76696465722072656163686564600082015250565b6000612b59602083612aa6565b9150612b6482612b23565b602082019050919050565b60006020820190508181036000830152612b8881612b4c565b9050919050565b6000612b9a82612695565b9050919050565b612baa81612b8f565b8114612bb557600080fd5b50565b600081519050612bc781612ba1565b92915050565b600060208284031215612be357612be261266b565b5b6000612bf184828501612bb8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c34826128d6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c6657612c65612bfa565b5b600182019050919050565b6000612c7c82612695565b9050919050565b612c8c81612c71565b8114612c9757600080fd5b50565b600081519050612ca981612c83565b92915050565b600060208284031215612cc557612cc461266b565b5b6000612cd384828501612c9a565b91505092915050565b60028110612ce957600080fd5b50565b600081519050612cfb81612cdc565b92915050565b600060208284031215612d1757612d1661266b565b5b6000612d2584828501612cec565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110612d6e57612d6d612d2e565b5b50565b6000819050612d7f82612d5d565b919050565b6000612d8f82612d71565b9050919050565b612d9f81612d84565b82525050565b6000602082019050612dba6000830184612d96565b92915050565b6000612dcb826128d6565b9150612dd6836128d6565b9250828203905081811115612dee57612ded612bfa565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000819050919050565b612e6d612e68826128a2565b612e52565b82525050565b60008160601b9050919050565b6000612e8b82612e73565b9050919050565b6000612e9d82612e80565b9050919050565b612eb5612eb082612695565b612e92565b82525050565b6000819050919050565b612ed6612ed1826128d6565b612ebb565b82525050565b6000612ee88286612e5c565b602082019150612ef88285612ea4565b601482019150612f088284612ec5565b602082019150819050949350505050565b7f496420616c726561647920757365640000000000000000000000000000000000600082015250565b6000612f4f600f83612aa6565b9150612f5a82612f19565b602082019050919050565b60006020820190508181036000830152612f7e81612f42565b9050919050565b6000612f9082612695565b9050919050565b612fa081612f85565b8114612fab57600080fd5b50565b600081519050612fbd81612f97565b92915050565b600060208284031215612fd957612fd861266b565b5b6000612fe784828501612fae565b91505092915050565b6000612ffb82612695565b9050919050565b61300b81612ff0565b811461301657600080fd5b50565b60008151905061302881613002565b92915050565b6000602082840312156130445761304361266b565b5b600061305284828501613019565b91505092915050565b6000613066826128d6565b9150613071836128d6565b925082820190508082111561308957613088612bfa565b5b92915050565b600061309a826128a2565b9050919050565b6130aa8161308f565b82525050565b60006040820190506130c560008301856130a1565b6130d26020830184612963565b9392505050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000613135602c83612aa6565b9150613140826130d9565b604082019050919050565b6000602082019050818103600083015261316481613128565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b60006131c7602c83612aa6565b91506131d28261316b565b604082019050919050565b600060208201905081810360008301526131f6816131ba565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000613259603883612aa6565b9150613264826131fd565b604082019050919050565b600060208201905081810360008301526132888161324c565b9050919050565b7f50415420646f65736e2774206578697374000000000000000000000000000000600082015250565b60006132c5601183612aa6565b91506132d08261328f565b602082019050919050565b600060208201905081810360008301526132f4816132b8565b9050919050565b6000613306826128d6565b91506000820361331957613318612bfa565b5b600182039050919050565b60006060820190506133396000830186612963565b6133466020830185612963565b61335360408301846128e0565b949350505050565b60006133678285612e5c565b6020820191506133778284612e5c565b6020820191508190509392505050565b613390816128a2565b811461339b57600080fd5b50565b6000815190506133ad81613387565b92915050565b6000602082840312156133c9576133c861266b565b5b60006133d78482850161339e565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b600061343c602e83612aa6565b9150613447826133e0565b604082019050919050565b6000602082019050818103600083015261346b8161342f565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b60006134ce602983612aa6565b91506134d982613472565b604082019050919050565b600060208201905081810360008301526134fd816134c1565b9050919050565b60006040820190506135196000830185612963565b61352660208301846128e0565b9392505050565b60008115159050919050565b6135428161352d565b811461354d57600080fd5b50565b60008151905061355f81613539565b92915050565b60006020828403121561357b5761357a61266b565b5b600061358984828501613550565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006135ee602a83612aa6565b91506135f982613592565b604082019050919050565b6000602082019050818103600083015261361d816135e1565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000613680602d83612aa6565b915061368b82613624565b604082019050919050565b600060208201905081810360008301526136af81613673565b9050919050565b7f526571756573747320697320656d707479000000000000000000000000000000600082015250565b60006136ec601183612aa6565b91506136f7826136b6565b602082019050919050565b6000602082019050818103600083015261371b816136df565b9050919050565b7f416d6f756e742063616e2774206265207a65726f000000000000000000000000600082015250565b6000613758601483612aa6565b915061376382613722565b602082019050919050565b600060208201905081810360008301526137878161374b565b9050919050565b7f416d6f756e7420697320746f6f20626967000000000000000000000000000000600082015250565b60006137c4601183612aa6565b91506137cf8261378e565b602082019050919050565b600060208201905081810360008301526137f3816137b7565b9050919050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600061382d826137fa565b9150613838836137fa565b925082820190507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81111561386c5761386b612bfa565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006138ac826128d6565b91506138b7836128d6565b9250826138c7576138c6613872565b5b828204905092915050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061392e602683612aa6565b9150613939826138d2565b604082019050919050565b6000602082019050818103600083015261395d81613921565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561399857808201518184015260208101905061397d565b60008484015250505050565b60006139af82613964565b6139b9818561396f565b93506139c981856020860161397a565b80840191505092915050565b60006139e182846139a4565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613a22601d83612aa6565b9150613a2d826139ec565b602082019050919050565b60006020820190508181036000830152613a5181613a15565b9050919050565b600081519050919050565b6000613a6e82613a58565b613a788185612aa6565b9350613a8881856020860161397a565b613a918161270a565b840191505092915050565b60006020820190508181036000830152613ab68184613a63565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204454b95783b447346ab9adbd4ae8dc27e47f3c88c47da6b82a4042ff523f183164736f6c63430008110033";

type WorkersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WorkersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Workers__factory extends ContractFactory {
  constructor(...args: WorkersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Workers> {
    return super.deploy(overrides || {}) as Promise<Workers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Workers {
    return super.attach(address) as Workers;
  }
  override connect(signer: Signer): Workers__factory {
    return super.connect(signer) as Workers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WorkersInterface {
    return new utils.Interface(_abi) as WorkersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Workers {
    return new Contract(address, _abi, signerOrProvider) as Workers;
  }
}
