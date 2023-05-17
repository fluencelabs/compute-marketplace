/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Matcher,
  MatcherInterface,
} from "../../../../contracts/global/Matcher.sol/Matcher";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGlobalConfig",
        name: "globalConfig_",
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "globalConfig",
    outputs: [
      {
        internalType: "contract IGlobalConfig",
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
        internalType: "contract ICore",
        name: "deal",
        type: "address",
      },
    ],
    name: "matchWithDeal",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "minPriceByEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "workersCount",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "effectors",
        type: "string[]",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resourceConfigIds",
    outputs: [
      {
        internalType: "bytes32",
        name: "_first",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_last",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "resourceConfigs",
    outputs: [
      {
        internalType: "uint256",
        name: "minPriceByEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "workersCount",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "hasAccess",
        type: "bool",
      },
    ],
    name: "setWhiteList",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
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
] as const;

const _bytecode =
  "0x60c06040523073ffffffffffffffffffffffffffffffffffffffff1660a09073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b5060405162003abd38038062003abd83398181016040528101906200006a919062000125565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505062000157565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000d982620000ac565b9050919050565b6000620000ed82620000cc565b9050919050565b620000ff81620000e0565b81146200010b57600080fd5b50565b6000815190506200011f81620000f4565b92915050565b6000602082840312156200013e576200013d620000a7565b5b60006200014e848285016200010e565b91505092915050565b60805160a0516138f3620001ca6000396000818161027801528181610306015281816104000152818161048e015261053e01526000818161061f01528181610796015281816108e101528181610a050152818161130c0152818161147c01528181611a550152611c1001526138f36000f3fe60806040526004361061009c5760003560e01c80639b19251a116100645780639b19251a14610179578063a7c1abe0146101b6578063a7f43779146101e1578063b5ebe33d146101f8578063c6c44ed114610224578063e61327ca1461024d5761009c565b80633659cfe6146100a15780634f1ef286146100ca57806352d1902d146100e65780638ae86750146101115780638d14e12714610150575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c39190612208565b610276565b005b6100e460048036038101906100df919061237b565b6103fe565b005b3480156100f257600080fd5b506100fb61053a565b60405161010891906123f0565b60405180910390f35b34801561011d57600080fd5b5061013860048036038101906101339190612208565b6105f3565b60405161014793929190612424565b60405180910390f35b34801561015c57600080fd5b5061017760048036038101906101729190612493565b61061d565b005b34801561018557600080fd5b506101a0600480360381019061019b9190612208565b610774565b6040516101ad91906124e2565b60405180910390f35b3480156101c257600080fd5b506101cb610794565b6040516101d8919061255c565b60405180910390f35b3480156101ed57600080fd5b506101f66107b8565b005b34801561020457600080fd5b5061020d6109f1565b60405161021b929190612577565b60405180910390f35b34801561023057600080fd5b5061024b600480360381019061024691906125de565b610a03565b005b34801561025957600080fd5b50610274600480360381019061026f9190612697565b610ffa565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fb906127a2565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610343611423565b73ffffffffffffffffffffffffffffffffffffffff1614610399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039090612834565b60405180910390fd5b6103a28161147a565b6103fb81600067ffffffffffffffff8111156103c1576103c0612250565b5b6040519080825280601f01601f1916602001820160405280156103f35781602001600182028036833780820191505090505b506000611579565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361048c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610483906127a2565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104cb611423565b73ffffffffffffffffffffffffffffffffffffffff1614610521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051890612834565b60405180910390fd5b61052a8261147a565b61053682826001611579565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146105ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c1906128c6565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b60036020528060005260406000206000915090508060000154908060010154908060020154905083565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ac91906128fb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610719576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107109061299a565b60405180910390fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60046020528060005260406000206000915054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60003390506000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816002015403610847576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083e90612a06565b60405180910390fd5b60008160020154826001015461085d9190612a55565b9050600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160009055600282016000905550506108df8360601b6bffffffffffffffffffffffff191660006116e790919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa15801561094a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096e9190612ad5565b73ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016109a8929190612b11565b6020604051808303816000875af11580156109c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109eb9190612b4f565b50505050565b60008060000154908060010154905082565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a929190612bba565b73ffffffffffffffffffffffffffffffffffffffff16634db44e64826040518263ffffffff1660e01b8152600401610aca9190612be7565b602060405180830381865afa158015610ae7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0b9190612b4f565b610b4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4190612c4e565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff16633018205f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb9190612cac565b905060008273ffffffffffffffffffffffffffffffffffffffff1663c3f909d46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2e9190612d17565b905060008173ffffffffffffffffffffffffffffffffffffffff166319cb355d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca19190612d59565b905060008273ffffffffffffffffffffffffffffffffffffffff16635fc8f59c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d149190612d59565b905060008373ffffffffffffffffffffffffffffffffffffffff16638a0c725b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d879190612d59565b905060008673ffffffffffffffffffffffffffffffffffffffff1663c1499f716040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfa9190612dc4565b905060008173ffffffffffffffffffffffffffffffffffffffff1663be18cf7f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6d9190612d59565b8673ffffffffffffffffffffffffffffffffffffffff16632943dcab6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610eb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edc9190612d59565b610ee69190612df1565b90506000610ef46000611824565b90505b60008019168114158015610f0b5750600082115b15610fef5760008160601c90506000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816001015490508782600001541180610f7557508881105b80610f875750610f858a84611832565b155b15610faa57610fa084600061196c90919063ffffffff16565b9350505050610ef7565b6000610fc08c88868587600201548f8e8d61198f565b90508086610fce9190612df1565b9550610fe485600061196c90919063ffffffff16565b945050505050610ef7565b505050505050505050565b6000339050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661108b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108290612e97565b60405180910390fd5b600084116110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c590612f29565b60405180910390fd5b60008511611111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110890612fbb565b60405180910390fd5b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414611196576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118d90613027565b60405180910390fd5b600084866111a49190612a55565b90506000604051806060016040528089815260200188815260200187815250905060005b85859050811015611282576001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000187878481811061122a57611229613047565b5b905060200281019061123c9190613085565b60405161124a929190613118565b908152602001604051809103902060006101000a81548160ff021916908315150217905550808061127a90613131565b9150506111c8565b506112a98360601b6bffffffffffffffffffffffff19166000611d3990919063ffffffff16565b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010155604082015181600201559050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015611375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113999190612ad5565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b81526004016113d593929190613179565b6020604051808303816000875af11580156113f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114189190612b4f565b505050505050505050565b60006114517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e35565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150991906128fb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156d9061299a565b60405180910390fd5b50565b6115a57f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611e3f565b60000160009054906101000a900460ff16156115c9576115c483611e49565b6116e2565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561163157506040513d601f19601f8201168201806040525081019061162e91906131dc565b60015b611670576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116679061327b565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b81146116d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116cc9061330d565b60405180910390fd5b506116e1838383611f02565b5b505050565b600082600201600083815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050905061172a838284611f2e565b611769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176090613379565b60405180910390fd5b8260020160008381526020019081526020016000206000808201600090556001820160009055505060008019168160000151146117ca57806020015183600201600083600001518152602001908152602001600020600101819055506117d8565b806020015183600001819055505b6000801916816020015114611811578060000151836002016000836020015181526020019081526020016000206000018190555061181f565b806000015183600101819055505b505050565b600081600001549050919050565b6000808373ffffffffffffffffffffffffffffffffffffffff1663fc1e5e2a6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611880573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906118a99190613545565b905060005b815181101561195f57600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182828151811061190c5761190b613047565b5b602002602001015160405161192191906135ca565b908152602001604051809103902060009054906101000a900460ff1661194c57600092505050611966565b808061195790613131565b9150506118ae565b5060019150505b92915050565b600082600201600083815260200190815260200160002060010154905092915050565b600080858411156119a2578590506119a6565b8390505b828111156119b2578290505b600081876119c09190612df1565b905060008103611a4f57600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160009055600182016000905560028201600090555050611a4a8960601b6bffffffffffffffffffffffff191660006116e790919063ffffffff16565b611a53565b8096505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae29190612ad5565b73ffffffffffffffffffffffffffffffffffffffff1663095ea7b38b8489611b0a9190612a55565b6040518363ffffffff1660e01b8152600401611b27929190612b11565b6020604051808303816000875af1158015611b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6a9190612b4f565b5060005b82811015611bf4578b73ffffffffffffffffffffffffffffffffffffffff1663e5e63b318b6040518263ffffffff1660e01b8152600401611baf9190612be7565b600060405180830381600087803b158015611bc957600080fd5b505af1158015611bdd573d6000803e3d6000fd5b505050508080611bec90613131565b915050611b6e565b5060008689611c039190612df1565b90506000811115611d27577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9d9190612ad5565b73ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8b8584611cc59190612a55565b6040518363ffffffff1660e01b8152600401611ce2929190612b11565b6020604051808303816000875af1158015611d01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d259190612b4f565b505b82935050505098975050505050505050565b60008260010154905060008019168203611d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7f9061362d565b60405180910390fd5b611d928383611f70565b15611dd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc990613699565b60405180910390fd5b6000801b8103611dec57611de68383611fb8565b50611e31565b81836001018190555080836002016000848152602001908152602001600020600001819055508183600201600083815260200190815260200160002060010181905550505b5050565b6000819050919050565b6000819050919050565b611e5281611fce565b611e91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e889061372b565b60405180910390fd5b80611ebe7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e35565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611f0b83611ff1565b600082511180611f185750805b15611f2957611f278383612040565b505b505050565b6000808360000151141580611f4b57506000801916836020015114155b80611f595750836000015482145b80611f675750836001015482145b90509392505050565b6000611fb0838460020160008581526020019081526020016000206040518060400160405290816000820154815260200160018201548152505084611f2e565b905092915050565b8082600001819055508082600101819055505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b611ffa81611e49565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061204b83611fce565b61208a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612081906137bd565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff16846040516120b29190613824565b600060405180830381855af49150503d80600081146120ed576040519150601f19603f3d011682016040523d82523d6000602084013e6120f2565b606091505b509150915061211a828260405180606001604052806027815260200161389760279139612124565b9250505092915050565b606083156121345782905061213f565b61213e8383612146565b5b9392505050565b6000825111156121595781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161218d9190613874565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006121d5826121aa565b9050919050565b6121e5816121ca565b81146121f057600080fd5b50565b600081359050612202816121dc565b92915050565b60006020828403121561221e5761221d6121a0565b5b600061222c848285016121f3565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122888261223f565b810181811067ffffffffffffffff821117156122a7576122a6612250565b5b80604052505050565b60006122ba612196565b90506122c6828261227f565b919050565b600067ffffffffffffffff8211156122e6576122e5612250565b5b6122ef8261223f565b9050602081019050919050565b82818337600083830152505050565b600061231e612319846122cb565b6122b0565b90508281526020810184848401111561233a5761233961223a565b5b6123458482856122fc565b509392505050565b600082601f83011261236257612361612235565b5b813561237284826020860161230b565b91505092915050565b60008060408385031215612392576123916121a0565b5b60006123a0858286016121f3565b925050602083013567ffffffffffffffff8111156123c1576123c06121a5565b5b6123cd8582860161234d565b9150509250929050565b6000819050919050565b6123ea816123d7565b82525050565b600060208201905061240560008301846123e1565b92915050565b6000819050919050565b61241e8161240b565b82525050565b60006060820190506124396000830186612415565b6124466020830185612415565b6124536040830184612415565b949350505050565b60008115159050919050565b6124708161245b565b811461247b57600080fd5b50565b60008135905061248d81612467565b92915050565b600080604083850312156124aa576124a96121a0565b5b60006124b8858286016121f3565b92505060206124c98582860161247e565b9150509250929050565b6124dc8161245b565b82525050565b60006020820190506124f760008301846124d3565b92915050565b6000819050919050565b600061252261251d612518846121aa565b6124fd565b6121aa565b9050919050565b600061253482612507565b9050919050565b600061254682612529565b9050919050565b6125568161253b565b82525050565b6000602082019050612571600083018461254d565b92915050565b600060408201905061258c60008301856123e1565b61259960208301846123e1565b9392505050565b60006125ab826121ca565b9050919050565b6125bb816125a0565b81146125c657600080fd5b50565b6000813590506125d8816125b2565b92915050565b6000602082840312156125f4576125f36121a0565b5b6000612602848285016125c9565b91505092915050565b6126148161240b565b811461261f57600080fd5b50565b6000813590506126318161260b565b92915050565b600080fd5b600080fd5b60008083601f84011261265757612656612235565b5b8235905067ffffffffffffffff81111561267457612673612637565b5b6020830191508360208202830111156126905761268f61263c565b5b9250929050565b6000806000806000608086880312156126b3576126b26121a0565b5b60006126c188828901612622565b95505060206126d288828901612622565b94505060406126e388828901612622565b935050606086013567ffffffffffffffff811115612704576127036121a5565b5b61271088828901612641565b92509250509295509295909350565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b600061278c602c8361271f565b915061279782612730565b604082019050919050565b600060208201905081810360008301526127bb8161277f565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b600061281e602c8361271f565b9150612829826127c2565b604082019050919050565b6000602082019050818103600083015261284d81612811565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006128b060388361271f565b91506128bb82612854565b604082019050919050565b600060208201905081810360008301526128df816128a3565b9050919050565b6000815190506128f5816121dc565b92915050565b600060208284031215612911576129106121a0565b5b600061291f848285016128e6565b91505092915050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061298460218361271f565b915061298f82612928565b604082019050919050565b600060208201905081810360008301526129b381612977565b9050919050565b7f436f6e66696720646f65736e2774206578697374000000000000000000000000600082015250565b60006129f060148361271f565b91506129fb826129ba565b602082019050919050565b60006020820190508181036000830152612a1f816129e3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a608261240b565b9150612a6b8361240b565b9250828202612a798161240b565b91508282048414831517612a9057612a8f612a26565b5b5092915050565b6000612aa2826121ca565b9050919050565b612ab281612a97565b8114612abd57600080fd5b50565b600081519050612acf81612aa9565b92915050565b600060208284031215612aeb57612aea6121a0565b5b6000612af984828501612ac0565b91505092915050565b612b0b816121ca565b82525050565b6000604082019050612b266000830185612b02565b612b336020830184612415565b9392505050565b600081519050612b4981612467565b92915050565b600060208284031215612b6557612b646121a0565b5b6000612b7384828501612b3a565b91505092915050565b6000612b87826121ca565b9050919050565b612b9781612b7c565b8114612ba257600080fd5b50565b600081519050612bb481612b8e565b92915050565b600060208284031215612bd057612bcf6121a0565b5b6000612bde84828501612ba5565b91505092915050565b6000602082019050612bfc6000830184612b02565b92915050565b7f4465616c206973206e6f742066726f6d20666163746f72790000000000000000600082015250565b6000612c3860188361271f565b9150612c4382612c02565b602082019050919050565b60006020820190508181036000830152612c6781612c2b565b9050919050565b6000612c79826121ca565b9050919050565b612c8981612c6e565b8114612c9457600080fd5b50565b600081519050612ca681612c80565b92915050565b600060208284031215612cc257612cc16121a0565b5b6000612cd084828501612c97565b91505092915050565b6000612ce4826121ca565b9050919050565b612cf481612cd9565b8114612cff57600080fd5b50565b600081519050612d1181612ceb565b92915050565b600060208284031215612d2d57612d2c6121a0565b5b6000612d3b84828501612d02565b91505092915050565b600081519050612d538161260b565b92915050565b600060208284031215612d6f57612d6e6121a0565b5b6000612d7d84828501612d44565b91505092915050565b6000612d91826121ca565b9050919050565b612da181612d86565b8114612dac57600080fd5b50565b600081519050612dbe81612d98565b92915050565b600060208284031215612dda57612dd96121a0565b5b6000612de884828501612daf565b91505092915050565b6000612dfc8261240b565b9150612e078361240b565b9250828203905081811115612e1f57612e1e612a26565b5b92915050565b7f4f6e6c792077686974656c69737465642063616e2063616c6c2074686973206660008201527f756e6374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000612e8160278361271f565b9150612e8c82612e25565b604082019050919050565b60006020820190508181036000830152612eb081612e74565b9050919050565b7f576f726b65727320636f756e742073686f756c6420626520677265617465722060008201527f7468616e20300000000000000000000000000000000000000000000000000000602082015250565b6000612f1360268361271f565b9150612f1e82612eb7565b604082019050919050565b60006020820190508181036000830152612f4281612f06565b9050919050565b7f4d617820636f6c6c61746572616c2073686f756c64206265206772656174657260008201527f207468616e203000000000000000000000000000000000000000000000000000602082015250565b6000612fa560278361271f565b9150612fb082612f49565b604082019050919050565b60006020820190508181036000830152612fd481612f98565b9050919050565b7f436f6e66696720616c7265616479206578697374730000000000000000000000600082015250565b600061301160158361271f565b915061301c82612fdb565b602082019050919050565b6000602082019050818103600083015261304081613004565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126130a2576130a1613076565b5b80840192508235915067ffffffffffffffff8211156130c4576130c361307b565b5b6020830192506001820236038313156130e0576130df613080565b5b509250929050565b600081905092915050565b60006130ff83856130e8565b935061310c8385846122fc565b82840190509392505050565b60006131258284866130f3565b91508190509392505050565b600061313c8261240b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361316e5761316d612a26565b5b600182019050919050565b600060608201905061318e6000830186612b02565b61319b6020830185612b02565b6131a86040830184612415565b949350505050565b6131b9816123d7565b81146131c457600080fd5b50565b6000815190506131d6816131b0565b92915050565b6000602082840312156131f2576131f16121a0565b5b6000613200848285016131c7565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000613265602e8361271f565b915061327082613209565b604082019050919050565b6000602082019050818103600083015261329481613258565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b60006132f760298361271f565b91506133028261329b565b604082019050919050565b60006020820190508181036000830152613326816132ea565b9050919050565b7f4b657920646f6573206e6f742065786973740000000000000000000000000000600082015250565b600061336360128361271f565b915061336e8261332d565b602082019050919050565b6000602082019050818103600083015261339281613356565b9050919050565b600067ffffffffffffffff8211156133b4576133b3612250565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156133e0576133df612250565b5b6133e98261223f565b9050602081019050919050565b60005b838110156134145780820151818401526020810190506133f9565b60008484015250505050565b600061343361342e846133c5565b6122b0565b90508281526020810184848401111561344f5761344e61223a565b5b61345a8482856133f6565b509392505050565b600082601f83011261347757613476612235565b5b8151613487848260208601613420565b91505092915050565b60006134a361349e84613399565b6122b0565b905080838252602082019050602084028301858111156134c6576134c561263c565b5b835b8181101561350d57805167ffffffffffffffff8111156134eb576134ea612235565b5b8086016134f88982613462565b855260208501945050506020810190506134c8565b5050509392505050565b600082601f83011261352c5761352b612235565b5b815161353c848260208601613490565b91505092915050565b60006020828403121561355b5761355a6121a0565b5b600082015167ffffffffffffffff811115613579576135786121a5565b5b61358584828501613517565b91505092915050565b600081519050919050565b60006135a48261358e565b6135ae81856130e8565b93506135be8185602086016133f6565b80840191505092915050565b60006135d68284613599565b915081905092915050565b7f4b65792063616e6e6f74206265205a45524f0000000000000000000000000000600082015250565b600061361760128361271f565b9150613622826135e1565b602082019050919050565b600060208201905081810360008301526136468161360a565b9050919050565b7f4b657920616c7265616479206578697374730000000000000000000000000000600082015250565b600061368360128361271f565b915061368e8261364d565b602082019050919050565b600060208201905081810360008301526136b281613676565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000613715602d8361271f565b9150613720826136b9565b604082019050919050565b6000602082019050818103600083015261374481613708565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b60006137a760268361271f565b91506137b28261374b565b604082019050919050565b600060208201905081810360008301526137d68161379a565b9050919050565b600081519050919050565b600081905092915050565b60006137fe826137dd565b61380881856137e8565b93506138188185602086016133f6565b80840191505092915050565b600061383082846137f3565b915081905092915050565b60006138468261358e565b613850818561271f565b93506138608185602086016133f6565b6138698161223f565b840191505092915050565b6000602082019050818103600083015261388e818461383b565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ef316afe96abf3ebed8ef47a0b620cf69be355d22c4997062b104694baf2a2e964736f6c63430008110033";

type MatcherConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MatcherConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Matcher__factory extends ContractFactory {
  constructor(...args: MatcherConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    globalConfig_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Matcher> {
    return super.deploy(globalConfig_, overrides || {}) as Promise<Matcher>;
  }
  override getDeployTransaction(
    globalConfig_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(globalConfig_, overrides || {});
  }
  override attach(address: string): Matcher {
    return super.attach(address) as Matcher;
  }
  override connect(signer: Signer): Matcher__factory {
    return super.connect(signer) as Matcher__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MatcherInterface {
    return new utils.Interface(_abi) as MatcherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Matcher {
    return new Contract(address, _abi, signerOrProvider) as Matcher;
  }
}
