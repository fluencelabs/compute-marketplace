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
import type { NonPayableOverrides } from "../../common.js";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../MockERC721.sol/MockERC721.js";

const _abi = [
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
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "initialize",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657611526908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610e845750816306fdde0314610dbe578163081812fc14610d63578163095ea7b314610c7557816323b872dd14610c5d57816342842e0e14610b5e5781634cd88b76146106e15781636352211e1461061b57816370a082311461055257816395d89b411461042f578163a22cb46514610360578163b88d4fde146101d357508063c87b56dd1461013a5763e985e9c5146100bf57600080fd5b3461013657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101365760ff816020936100fb611092565b6101036110ba565b73ffffffffffffffffffffffffffffffffffffffff91821683526005875283832091168252855220549151911615158152f35b5080fd5b5034610136576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cf57918151928391818352606051918281850152815b8381106101ba575050828201840152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168101030190f35b6080810151878201870152869450810161017f565b8280fd5b9050346101cf5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cf5761020c611092565b916102156110ba565b916044359260643567ffffffffffffffff811161035c573660238201121561035c5761024a903690602481860135910161113d565b90610256858288611225565b803b159487861561026e575b61026b8761148b565b80f35b602094965085976102dd96518097819682957f150b7a02000000000000000000000000000000000000000000000000000000009b8c8552339085015273ffffffffffffffffffffffffffffffffffffffff80951660248501526044840152608060648401526084830190611034565b0393165af1928315610353575061026b927fffffffff00000000000000000000000000000000000000000000000000000000918591610325575b501614388080808087610262565b610346915060203d811161034c575b61033e8183610fc4565b810190611453565b38610317565b503d610334565b513d85823e3d90fd5b8680fd5b50503461013657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013657610398611092565b906024359081151580920361042b57338452600560205273ffffffffffffffffffffffffffffffffffffffff8185209316928385526020528084207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b8380fd5b50503461013657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101365780519082600180549161047183610f71565b8086529282811690811561050c57506001146104b0575b50505061049a826104ac940383610fc4565b51918291602083526020830190611034565b0390f35b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8286106104f45750505061049a8260206104ac9582010194610488565b805460208787018101919091529095019481016104d7565b6104ac97508693506020925061049a9491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b82010194610488565b839150346101365760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101365773ffffffffffffffffffffffffffffffffffffffff6105a1611092565b169081156105be5760208480858581526003845220549051908152f35b60649060208551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600c60248201527f5a45524f5f4144445245535300000000000000000000000000000000000000006044820152fd5b905082346106de5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106de578273ffffffffffffffffffffffffffffffffffffffff91833581526002602052205416908115610681575060209151908152f35b60649060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600a60248201527f4e4f545f4d494e544544000000000000000000000000000000000000000000006044820152fd5b80fd5b8391503461013657827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101365767ffffffffffffffff813581811161042b5761073190369084016111a2565b91602435828111610b5a5761074990369083016111a2565b9460ff60065416610afd57508251828111610ad157806107698654610f71565b94601f95868111610a66575b506020908683116001146109ab5787926109a0575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161784555b845191821161097457506001916107d38354610f71565b818111610912575b50602090821160011461085b57839482939492610850575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82841b9260031b1c19161781555b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600654161760065580f35b0151905084806107f3565b8284527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08316855b8181106108fc57509583859697106108c5575b505050811b018155610824565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558480806108b8565b87830151845592850192602092830192016108a5565b8385527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68280850160051c8201926020861061096b575b0160051c019084905b8281106109605750506107db565b868155018490610952565b92508192610949565b8360416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b01519050878061078a565b8780527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016885b818110610a4e5750908460019594939210610a17575b505050811b0184556107bc565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055878080610a0a565b929360206001819287860151815501950193016109f4565b9091508680527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5638680850160051c82019260208610610ac8575b9085949392910160051c01905b818110610aba5750610775565b888155849350600101610aad565b92508192610aa0565b6024856041847f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b90602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601360248201527f414c52454144595f494e495449414c495a4544000000000000000000000000006044820152fd5b8480fd5b9050346101cf57610b6e366110dd565b929190610b7c848284611225565b803b15938415610b91575b8661026b8661148b565b60209293945060a49087875195869485937f150b7a0200000000000000000000000000000000000000000000000000000000998a8652339086015273ffffffffffffffffffffffffffffffffffffffff8093166024860152604485015260806064850152826084850152165af1928315610353575061026b927fffffffff00000000000000000000000000000000000000000000000000000000918591610c3f575b50161438808080610b87565b610c57915060203d811161034c5761033e8183610fc4565b38610c33565b83346106de5761026b610c6f366110dd565b91611225565b9050346101cf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cf57610cad611092565b9060243592838552600260205273ffffffffffffffffffffffffffffffffffffffff90818187205416928333148015610d44575b610cea906111c0565b8587526020528520921691827fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b508387526005602090815282882033895290528187205460ff16610ce1565b9050346101cf5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cf57816020938273ffffffffffffffffffffffffffffffffffffffff9335825285522054169051908152f35b50503461013657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013657805190828054610dfd81610f71565b8085529160019180831690811561050c5750600114610e285750505061049a826104ac940383610fc4565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610e6c5750505061049a8260206104ac9582010194610488565b80546020878701810191909152909501948101610e4f565b8491346101cf5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cf57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101cf57602092507f01ffc9a7000000000000000000000000000000000000000000000000000000008114908115610f47575b8115610f1d575b5015158152f35b7f5b5e139f0000000000000000000000000000000000000000000000000000000091501483610f16565b7f80ac58cd0000000000000000000000000000000000000000000000000000000081149150610f0f565b90600182811c92168015610fba575b6020831014610f8b57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610f80565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761100557604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b919082519283825260005b84811061107e5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b60208183018101518483018201520161103f565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036110b557565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036110b557565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60609101126110b55773ffffffffffffffffffffffffffffffffffffffff9060043582811681036110b5579160243590811681036110b5579060443590565b92919267ffffffffffffffff8211611005576040519161118560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610fc4565b8294818452818301116110b5578281602093846000960137010152565b9080601f830112156110b5578160206111bd9335910161113d565b90565b156111c757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a45440000000000000000000000000000000000006044820152fd5b600083815260206002815273ffffffffffffffffffffffffffffffffffffffff936040908580838620541695169485036113f65785169485156113995761127e9085331490811561137c575b8115611366575b506111c0565b838352600382528083208054908115611339577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8092019055858452600383528184209081549081146113395760010190558583526002825280832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116871790915560049092528220805490911690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9080a4565b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b9050878552600484528285205416331438611278565b8686526005855283862033875285528386205460ff169150611271565b6064838351907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601160248201527f494e56414c49445f524543495049454e540000000000000000000000000000006044820152fd5b6064838351907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152600a60248201527f57524f4e475f46524f4d000000000000000000000000000000000000000000006044820152fd5b908160209103126110b557517fffffffff00000000000000000000000000000000000000000000000000000000811681036110b55790565b1561149257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f554e534146455f524543495049454e54000000000000000000000000000000006044820152fdfea2646970667358221220dd6e12de4490bac09c5f18d026c0832d6194e1889834b224b2c7b4ad2aa39caf64736f6c63430008130033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockERC721";
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC721__factory {
    return super.connect(runner) as MockERC721__factory;
  }
  static readonly contractName: "MockERC721";

  public readonly contractName: "MockERC721";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new Interface(_abi) as MockERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockERC721 {
    return new Contract(address, _abi, runner) as unknown as MockERC721;
  }
}
