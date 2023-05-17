/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ModuleBase,
  ModuleBaseInterface,
} from "../../../../contracts/deal/base/ModuleBase";

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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161120861007a6000396000818160ab0152818161013901528181610233015281816102c1015261037101526112086000f3fe6080604052600436106100345760003560e01c80633659cfe6146100395780634f1ef2861461006257806352d1902d1461007e575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190610a0c565b6100a9565b005b61007c60048036038101906100779190610b7f565b610231565b005b34801561008a57600080fd5b5061009361036d565b6040516100a09190610bf4565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012e90610c92565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610176610426565b73ffffffffffffffffffffffffffffffffffffffff16146101cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c390610d24565b60405180910390fd5b6101d58161047d565b61022e81600067ffffffffffffffff8111156101f4576101f3610a54565b5b6040519080825280601f01601f1916602001820160405280156102265781602001600182028036833780820191505090505b5060006104f5565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16036102bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b690610c92565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166102fe610426565b73ffffffffffffffffffffffffffffffffffffffff1614610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b90610d24565b60405180910390fd5b61035d8261047d565b610369828260016104f5565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146103fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f490610db6565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b60006104547f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610663565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff1661049c61066d565b73ffffffffffffffffffffffffffffffffffffffff16146104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990610e22565b60405180910390fd5b50565b6105217f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6106c1565b60000160009054906101000a900460ff161561054557610540836106cb565b61065e565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156105ad57506040513d601f19601f820116820180604052508101906105aa9190610e6e565b60015b6105ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e390610f0d565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890610f9f565b60405180910390fd5b5061065d838383610784565b5b505050565b6000819050919050565b60006106987fe0c154d538f20c8d1aadcd299210daa7f0a434a5bf4a39795668b28b61ec6e96610663565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000819050919050565b6106d4816107b0565b610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a90611031565b60405180910390fd5b806107407f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610663565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61078d836107d3565b60008251118061079a5750805b156107ab576107a98383610822565b505b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6107dc816106cb565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061084783836040518060600160405280602781526020016111ac6027913961084f565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161087991906110c2565b600060405180830381855af49150503d80600081146108b4576040519150601f19603f3d011682016040523d82523d6000602084013e6108b9565b606091505b50915091506108ca868383876108d5565b925050509392505050565b6060831561093757600083510361092f576108ef856107b0565b61092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590611125565b60405180910390fd5b5b829050610942565b610941838361094a565b5b949350505050565b60008251111561095d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109919190611189565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109d9826109ae565b9050919050565b6109e9816109ce565b81146109f457600080fd5b50565b600081359050610a06816109e0565b92915050565b600060208284031215610a2257610a216109a4565b5b6000610a30848285016109f7565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a8c82610a43565b810181811067ffffffffffffffff82111715610aab57610aaa610a54565b5b80604052505050565b6000610abe61099a565b9050610aca8282610a83565b919050565b600067ffffffffffffffff821115610aea57610ae9610a54565b5b610af382610a43565b9050602081019050919050565b82818337600083830152505050565b6000610b22610b1d84610acf565b610ab4565b905082815260208101848484011115610b3e57610b3d610a3e565b5b610b49848285610b00565b509392505050565b600082601f830112610b6657610b65610a39565b5b8135610b76848260208601610b0f565b91505092915050565b60008060408385031215610b9657610b956109a4565b5b6000610ba4858286016109f7565b925050602083013567ffffffffffffffff811115610bc557610bc46109a9565b5b610bd185828601610b51565b9150509250929050565b6000819050919050565b610bee81610bdb565b82525050565b6000602082019050610c096000830184610be5565b92915050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000610c7c602c83610c0f565b9150610c8782610c20565b604082019050919050565b60006020820190508181036000830152610cab81610c6f565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000610d0e602c83610c0f565b9150610d1982610cb2565b604082019050919050565b60006020820190508181036000830152610d3d81610d01565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000610da0603883610c0f565b9150610dab82610d44565b604082019050919050565b60006020820190508181036000830152610dcf81610d93565b9050919050565b7f4d6f64756c65426173653a2063616c6c6572206973206e6f7420636f72650000600082015250565b6000610e0c601e83610c0f565b9150610e1782610dd6565b602082019050919050565b60006020820190508181036000830152610e3b81610dff565b9050919050565b610e4b81610bdb565b8114610e5657600080fd5b50565b600081519050610e6881610e42565b92915050565b600060208284031215610e8457610e836109a4565b5b6000610e9284828501610e59565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000610ef7602e83610c0f565b9150610f0282610e9b565b604082019050919050565b60006020820190508181036000830152610f2681610eea565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000610f89602983610c0f565b9150610f9482610f2d565b604082019050919050565b60006020820190508181036000830152610fb881610f7c565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600061101b602d83610c0f565b915061102682610fbf565b604082019050919050565b6000602082019050818103600083015261104a8161100e565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561108557808201518184015260208101905061106a565b60008484015250505050565b600061109c82611051565b6110a6818561105c565b93506110b6818560208601611067565b80840191505092915050565b60006110ce8284611091565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061110f601d83610c0f565b915061111a826110d9565b602082019050919050565b6000602082019050818103600083015261113e81611102565b9050919050565b600081519050919050565b600061115b82611145565b6111658185610c0f565b9350611175818560208601611067565b61117e81610a43565b840191505092915050565b600060208201905081810360008301526111a38184611150565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208a84734936504930df9dbbd7dd66fe000fd6ece6078e72af6ebb8fbc428b6d8864736f6c63430008110033";

type ModuleBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleBase__factory extends ContractFactory {
  constructor(...args: ModuleBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ModuleBase> {
    return super.deploy(overrides || {}) as Promise<ModuleBase>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ModuleBase {
    return super.attach(address) as ModuleBase;
  }
  override connect(signer: Signer): ModuleBase__factory {
    return super.connect(signer) as ModuleBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleBaseInterface {
    return new utils.Interface(_abi) as ModuleBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleBase {
    return new Contract(address, _abi, signerOrProvider) as ModuleBase;
  }
}
