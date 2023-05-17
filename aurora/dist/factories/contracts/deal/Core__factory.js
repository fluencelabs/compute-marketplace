"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
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
        name: "getConfig",
        outputs: [
            {
                internalType: "contract IConfig",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getController",
        outputs: [
            {
                internalType: "contract IController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPayment",
        outputs: [
            {
                internalType: "contract IPayment",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getStatusController",
        outputs: [
            {
                internalType: "contract IStatusController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getWorkers",
        outputs: [
            {
                internalType: "contract IWorkers",
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
                internalType: "contract IConfig",
                name: "config_",
                type: "address",
            },
            {
                internalType: "contract IController",
                name: "controller_",
                type: "address",
            },
            {
                internalType: "contract IPayment",
                name: "payment_",
                type: "address",
            },
            {
                internalType: "contract IStatusController",
                name: "statusController_",
                type: "address",
            },
            {
                internalType: "contract IWorkers",
                name: "workers_",
                type: "address",
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
        ],
        name: "moduleByAddress",
        outputs: [
            {
                internalType: "enum Module",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum Module",
                name: "",
                type: "uint8",
            },
        ],
        name: "modules",
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
];
const _bytecode = "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b50620000556200005b60201b60201c565b62000206565b600060019054906101000a900460ff1615620000ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a590620001a9565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff161015620001205760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff604051620001179190620001e9565b60405180910390a15b565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60006200019160278362000122565b91506200019e8262000133565b604082019050919050565b60006020820190508181036000830152620001c48162000182565b9050919050565b600060ff82169050919050565b620001e381620001cb565b82525050565b6000602082019050620002006000830184620001d8565b92915050565b6080516121506200023e600039600081816108810152818161090f01528181610a0901528181610a970152610b4701526121506000f3fe60806040526004361061009c5760003560e01c80636ae76a42116100645780636ae76a4214610165578063bb328a7d146101a2578063c1499f71146101cd578063c2aeb7bd146101f8578063c3f909d414610235578063ee6faa2e146102605761009c565b80631459457a146100a15780633018205f146100ca5780633659cfe6146100f55780634f1ef2861461011e57806352d1902d1461013a575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c391906114d8565b61028b565b005b3480156100d657600080fd5b506100df61081f565b6040516100ec91906115b2565b60405180910390f35b34801561010157600080fd5b5061011c600480360381019061011791906115f9565b61087f565b005b6101386004803603810190610133919061176c565b610a07565b005b34801561014657600080fd5b5061014f610b43565b60405161015c91906117e1565b60405180910390f35b34801561017157600080fd5b5061018c600480360381019061018791906115f9565b610bfc565b6040516101999190611873565b60405180910390f35b3480156101ae57600080fd5b506101b7610c1c565b6040516101c491906118af565b60405180910390f35b3480156101d957600080fd5b506101e2610c7c565b6040516101ef91906118eb565b60405180910390f35b34801561020457600080fd5b5061021f600480360381019061021a919061192b565b610cdb565b60405161022c9190611967565b60405180910390f35b34801561024157600080fd5b5061024a610d0e565b60405161025791906119a3565b60405180910390f35b34801561026c57600080fd5b50610275610d6e565b60405161028291906119df565b60405180910390f35b60008060019054906101000a900460ff161590508080156102bc5750600160008054906101000a900460ff1660ff16105b806102e957506102cb30610dce565b1580156102e85750600160008054906101000a900460ff1660ff16145b5b610328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031f90611a7d565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610365576001600060016101000a81548160ff0219169083151502179055505b85600160006001600581111561037e5761037d6117fc565b5b60058111156103905761038f6117fc565b5b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460016000600260058111156103f5576103f46117fc565b5b6005811115610407576104066117fc565b5b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006003600581111561046c5761046b6117fc565b5b600581111561047e5761047d6117fc565b5b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260016000600460058111156104e3576104e26117fc565b5b60058111156104f5576104f46117fc565b5b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160016000600580811115610559576105586117fc565b5b600581111561056b5761056a6117fc565b5b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600581111561061a576106196117fc565b5b021790555060028060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836005811115610681576106806117fc565b5b02179055506003600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360058111156106e9576106e86117fc565b5b02179055506004600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836005811115610751576107506117fc565b5b02179055506005600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360058111156107b9576107b86117fc565b5b021790555080156108175760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161080e9190611ae5565b60405180910390a15b505050505050565b60006001600060026005811115610839576108386117fc565b5b600581111561084b5761084a6117fc565b5b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361090d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090490611b72565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661094c610df1565b73ffffffffffffffffffffffffffffffffffffffff16146109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099990611c04565b60405180910390fd5b6109ab81610e48565b610a0481600067ffffffffffffffff8111156109ca576109c9611641565b5b6040519080825280601f01601f1916602001820160405280156109fc5781602001600182028036833780820191505090505b506000610f2e565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610a95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8c90611b72565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610ad4610df1565b73ffffffffffffffffffffffffffffffffffffffff1614610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2190611c04565b60405180910390fd5b610b3382610e48565b610b3f82826001610f2e565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610bd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bca90611c96565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b60026020528060005260406000206000915054906101000a900460ff1681565b60006001600060036005811115610c3657610c356117fc565b5b6005811115610c4857610c476117fc565b5b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060016000600580811115610c9557610c946117fc565b5b6005811115610ca757610ca66117fc565b5b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600060016005811115610d2857610d276117fc565b5b6005811115610d3a57610d396117fc565b5b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001600060046005811115610d8857610d876117fc565b5b6005811115610d9a57610d996117fc565b5b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000610e1f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61109c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e5061081f565b73ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebe9190611ccb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2290611d6a565b60405180910390fd5b50565b610f5a7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6110a6565b60000160009054906101000a900460ff1615610f7e57610f79836110b0565b611097565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610fe657506040513d601f19601f82011682018060405250810190610fe39190611db6565b60015b611025576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101c90611e55565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108190611ee7565b60405180910390fd5b50611096838383611169565b5b505050565b6000819050919050565b6000819050919050565b6110b981610dce565b6110f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ef90611f79565b60405180910390fd5b806111257f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61109c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61117283611195565b60008251118061117f5750805b156111905761118e83836111e4565b505b505050565b61119e816110b0565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061120983836040518060600160405280602781526020016120f460279139611211565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161123b919061200a565b600060405180830381855af49150503d8060008114611276576040519150601f19603f3d011682016040523d82523d6000602084013e61127b565b606091505b509150915061128c86838387611297565b925050509392505050565b606083156112f95760008351036112f1576112b185610dce565b6112f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e79061206d565b60405180910390fd5b5b829050611304565b611303838361130c565b5b949350505050565b60008251111561131f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135391906120d1565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061139b82611370565b9050919050565b60006113ad82611390565b9050919050565b6113bd816113a2565b81146113c857600080fd5b50565b6000813590506113da816113b4565b92915050565b60006113eb82611390565b9050919050565b6113fb816113e0565b811461140657600080fd5b50565b600081359050611418816113f2565b92915050565b600061142982611390565b9050919050565b6114398161141e565b811461144457600080fd5b50565b60008135905061145681611430565b92915050565b600061146782611390565b9050919050565b6114778161145c565b811461148257600080fd5b50565b6000813590506114948161146e565b92915050565b60006114a582611390565b9050919050565b6114b58161149a565b81146114c057600080fd5b50565b6000813590506114d2816114ac565b92915050565b600080600080600060a086880312156114f4576114f3611366565b5b6000611502888289016113cb565b955050602061151388828901611409565b945050604061152488828901611447565b935050606061153588828901611485565b9250506080611546888289016114c3565b9150509295509295909350565b6000819050919050565b600061157861157361156e84611370565b611553565b611370565b9050919050565b600061158a8261155d565b9050919050565b600061159c8261157f565b9050919050565b6115ac81611591565b82525050565b60006020820190506115c760008301846115a3565b92915050565b6115d681611390565b81146115e157600080fd5b50565b6000813590506115f3816115cd565b92915050565b60006020828403121561160f5761160e611366565b5b600061161d848285016115e4565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61167982611630565b810181811067ffffffffffffffff8211171561169857611697611641565b5b80604052505050565b60006116ab61135c565b90506116b78282611670565b919050565b600067ffffffffffffffff8211156116d7576116d6611641565b5b6116e082611630565b9050602081019050919050565b82818337600083830152505050565b600061170f61170a846116bc565b6116a1565b90508281526020810184848401111561172b5761172a61162b565b5b6117368482856116ed565b509392505050565b600082601f83011261175357611752611626565b5b81356117638482602086016116fc565b91505092915050565b6000806040838503121561178357611782611366565b5b6000611791858286016115e4565b925050602083013567ffffffffffffffff8111156117b2576117b161136b565b5b6117be8582860161173e565b9150509250929050565b6000819050919050565b6117db816117c8565b82525050565b60006020820190506117f660008301846117d2565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6006811061183c5761183b6117fc565b5b50565b600081905061184d8261182b565b919050565b600061185d8261183f565b9050919050565b61186d81611852565b82525050565b60006020820190506118886000830184611864565b92915050565b60006118998261157f565b9050919050565b6118a98161188e565b82525050565b60006020820190506118c460008301846118a0565b92915050565b60006118d58261157f565b9050919050565b6118e5816118ca565b82525050565b600060208201905061190060008301846118dc565b92915050565b6006811061191357600080fd5b50565b60008135905061192581611906565b92915050565b60006020828403121561194157611940611366565b5b600061194f84828501611916565b91505092915050565b61196181611390565b82525050565b600060208201905061197c6000830184611958565b92915050565b600061198d8261157f565b9050919050565b61199d81611982565b82525050565b60006020820190506119b86000830184611994565b92915050565b60006119c98261157f565b9050919050565b6119d9816119be565b82525050565b60006020820190506119f460008301846119d0565b92915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611a67602e836119fa565b9150611a7282611a0b565b604082019050919050565b60006020820190508181036000830152611a9681611a5a565b9050919050565b6000819050919050565b600060ff82169050919050565b6000611acf611aca611ac584611a9d565b611553565b611aa7565b9050919050565b611adf81611ab4565b82525050565b6000602082019050611afa6000830184611ad6565b92915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000611b5c602c836119fa565b9150611b6782611b00565b604082019050919050565b60006020820190508181036000830152611b8b81611b4f565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000611bee602c836119fa565b9150611bf982611b92565b604082019050919050565b60006020820190508181036000830152611c1d81611be1565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000611c806038836119fa565b9150611c8b82611c24565b604082019050919050565b60006020820190508181036000830152611caf81611c73565b9050919050565b600081519050611cc5816115cd565b92915050565b600060208284031215611ce157611ce0611366565b5b6000611cef84828501611cb6565b91505092915050565b7f436f72653a204f6e6c7920636f6e74726f6c6c6572206f776e65722063616e2060008201527f63616c6c20746869732066756e6374696f6e0000000000000000000000000000602082015250565b6000611d546032836119fa565b9150611d5f82611cf8565b604082019050919050565b60006020820190508181036000830152611d8381611d47565b9050919050565b611d93816117c8565b8114611d9e57600080fd5b50565b600081519050611db081611d8a565b92915050565b600060208284031215611dcc57611dcb611366565b5b6000611dda84828501611da1565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000611e3f602e836119fa565b9150611e4a82611de3565b604082019050919050565b60006020820190508181036000830152611e6e81611e32565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000611ed16029836119fa565b9150611edc82611e75565b604082019050919050565b60006020820190508181036000830152611f0081611ec4565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000611f63602d836119fa565b9150611f6e82611f07565b604082019050919050565b60006020820190508181036000830152611f9281611f56565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611fcd578082015181840152602081019050611fb2565b60008484015250505050565b6000611fe482611f99565b611fee8185611fa4565b9350611ffe818560208601611faf565b80840191505092915050565b60006120168284611fd9565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612057601d836119fa565b915061206282612021565b602082019050919050565b600060208201905081810360008301526120868161204a565b9050919050565b600081519050919050565b60006120a38261208d565b6120ad81856119fa565b93506120bd818560208601611faf565b6120c681611630565b840191505092915050565b600060208201905081810360008301526120eb8184612098565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202e83fc53cccbd2915c590bfdfec0ec2126260d0d457cee7f0e7197053a6b8bf464736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class Core__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Core__factory = Core__factory;
Core__factory.bytecode = _bytecode;
Core__factory.abi = _abi;
