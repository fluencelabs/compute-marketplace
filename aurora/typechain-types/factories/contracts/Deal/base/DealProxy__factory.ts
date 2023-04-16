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
import type { PromiseOrValue } from "../../../../common";
import type {
  DealProxy,
  DealProxyInterface,
} from "../../../../contracts/deal/base/DealProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
      {
        internalType: "contract Core",
        name: "core_",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200100c3803806200100c833981810160405281019062000037919062000650565b82826200004d82826000620000d060201b60201c565b505080620000867f2e7444c0f208f54cfd611b6902fdd4f416945cdf2a40957c817a7d7446cd44696200011360201b620001511760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620008bc565b620000e1836200011d60201b60201c565b600082511180620000ef5750805b156200010e576200010c83836200017460201b6200015b1760201c565b505b505050565b6000819050919050565b6200012e81620001aa60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060620001a2838360405180606001604052806027815260200162000fe5602791396200028060201b60201c565b905092915050565b620001c0816200031260201b620001881760201c565b62000202576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f99062000752565b60405180910390fd5b806200023c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200011360201b620001511760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051620002ac9190620007c1565b600060405180830381855af49150503d8060008114620002e9576040519150601f19603f3d011682016040523d82523d6000602084013e620002ee565b606091505b509150915062000307868383876200033560201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315620003a55760008351036200039c5762000359856200031260201b60201c565b6200039b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000392906200082a565b60405180910390fd5b5b829050620003b8565b620003b78383620003c060201b60201c565b5b949350505050565b600082511115620003d45781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200040a919062000898565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004548262000427565b9050919050565b620004668162000447565b81146200047257600080fd5b50565b60008151905062000486816200045b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004e18262000496565b810181811067ffffffffffffffff82111715620005035762000502620004a7565b5b80604052505050565b60006200051862000413565b9050620005268282620004d6565b919050565b600067ffffffffffffffff821115620005495762000548620004a7565b5b620005548262000496565b9050602081019050919050565b60005b838110156200058157808201518184015260208101905062000564565b60008484015250505050565b6000620005a46200059e846200052b565b6200050c565b905082815260208101848484011115620005c357620005c262000491565b5b620005d084828562000561565b509392505050565b600082601f830112620005f057620005ef6200048c565b5b8151620006028482602086016200058d565b91505092915050565b6000620006188262000447565b9050919050565b6200062a816200060b565b81146200063657600080fd5b50565b6000815190506200064a816200061f565b92915050565b6000806000606084860312156200066c576200066b6200041d565b5b60006200067c8682870162000475565b935050602084015167ffffffffffffffff811115620006a0576200069f62000422565b5b620006ae86828701620005d8565b9250506040620006c18682870162000639565b9150509250925092565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006200073a602d83620006cb565b91506200074782620006dc565b604082019050919050565b600060208201905081810360008301526200076d816200072b565b9050919050565b600081519050919050565b600081905092915050565b6000620007978262000774565b620007a381856200077f565b9350620007b581856020860162000561565b80840191505092915050565b6000620007cf82846200078a565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600062000812601d83620006cb565b91506200081f82620007da565b602082019050919050565b60006020820190508181036000830152620008458162000803565b9050919050565b600081519050919050565b600062000864826200084c565b620008708185620006cb565b93506200088281856020860162000561565b6200088d8162000496565b840191505092915050565b60006020820190508181036000830152620008b4818462000857565b905092915050565b61071980620008cc6000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b60006100276101ab565b90506100316101ab565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610107575060006005811115610079576100786103f2565b5b8173ffffffffffffffffffffffffffffffffffffffff16636ae76a42336040518263ffffffff1660e01b81526004016100b29190610462565b602060405180830381865afa1580156100cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f391906104a7565b6005811115610105576101046103f2565b5b145b610146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013d90610531565b60405180910390fd5b61014e6101ff565b50565b6000819050919050565b606061018083836040518060600160405280602781526020016106bd60279139610219565b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006101d67f2e7444c0f208f54cfd611b6902fdd4f416945cdf2a40957c817a7d7446cd4469610151565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61020761029f565b6102176102126102a1565b6102b0565b565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161024391906105c2565b600060405180830381855af49150503d806000811461027e576040519150601f19603f3d011682016040523d82523d6000602084013e610283565b606091505b5091509150610294868383876102d6565b925050509392505050565b565b60006102ab61034b565b905090565b3660008037600080366000845af43d6000803e80600081146102d1573d6000f35b3d6000fd5b60608315610338576000835103610330576102f085610188565b61032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032690610625565b60405180910390fd5b5b829050610343565b61034283836103a2565b5b949350505050565b60006103797f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610151565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000825111156103b55781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e9919061069a565b60405180910390fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061044c82610421565b9050919050565b61045c81610441565b82525050565b60006020820190506104776000830184610453565b92915050565b600080fd5b6006811061048f57600080fd5b50565b6000815190506104a181610482565b92915050565b6000602082840312156104bd576104bc61047d565b5b60006104cb84828501610492565b91505092915050565b600082825260208201905092915050565b7f4f6e6c7920636f7265206f72206d6f64756c65732063616e2063616c6c000000600082015250565b600061051b601d836104d4565b9150610526826104e5565b602082019050919050565b6000602082019050818103600083015261054a8161050e565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561058557808201518184015260208101905061056a565b60008484015250505050565b600061059c82610551565b6105a6818561055c565b93506105b6818560208601610567565b80840191505092915050565b60006105ce8284610591565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061060f601d836104d4565b915061061a826105d9565b602082019050919050565b6000602082019050818103600083015261063e81610602565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b600061066c82610645565b61067681856104d4565b9350610686818560208601610567565b61068f81610650565b840191505092915050565b600060208201905081810360008301526106b48184610661565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e621dcaa0cbba4f24b3973ae0e14858439a910f5555ae7384cda36b9d6e2007f64736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type DealProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DealProxy__factory extends ContractFactory {
  constructor(...args: DealProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementation_: PromiseOrValue<string>,
    data_: PromiseOrValue<BytesLike>,
    core_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DealProxy> {
    return super.deploy(
      implementation_,
      data_,
      core_,
      overrides || {}
    ) as Promise<DealProxy>;
  }
  override getDeployTransaction(
    implementation_: PromiseOrValue<string>,
    data_: PromiseOrValue<BytesLike>,
    core_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      implementation_,
      data_,
      core_,
      overrides || {}
    );
  }
  override attach(address: string): DealProxy {
    return super.attach(address) as DealProxy;
  }
  override connect(signer: Signer): DealProxy__factory {
    return super.connect(signer) as DealProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealProxyInterface {
    return new utils.Interface(_abi) as DealProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DealProxy {
    return new Contract(address, _abi, signerOrProvider) as DealProxy;
  }
}
