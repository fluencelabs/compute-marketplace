"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleProxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_logic",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_core",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162000d0538038062000d0583398181016040528101906200003791906200061f565b82826200004d828260006200006960201b60201c565b50506200006081620000ac60201b60201c565b5050506200088b565b6200007a836200012760201b60201c565b600082511180620000885750805b15620000a757620000a583836200017e60201b620000371760201c565b505b505050565b80620000e37fe0c154d538f20c8d1aadcd299210daa7f0a434a5bf4a39795668b28b61ec6e96620001b460201b620000641760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6200013881620001be60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060620001ac838360405180606001604052806027815260200162000cde602791396200029460201b60201c565b905092915050565b6000819050919050565b620001d4816200032660201b6200006e1760201c565b62000216576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020d9062000721565b60405180910390fd5b80620002507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620001b460201b620000641760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051620002c0919062000790565b600060405180830381855af49150503d8060008114620002fd576040519150601f19603f3d011682016040523d82523d6000602084013e62000302565b606091505b50915091506200031b868383876200034960201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315620003b9576000835103620003b0576200036d856200032660201b60201c565b620003af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003a690620007f9565b60405180910390fd5b5b829050620003cc565b620003cb8383620003d460201b60201c565b5b949350505050565b600082511115620003e85781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200041e919062000867565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000468826200043b565b9050919050565b6200047a816200045b565b81146200048657600080fd5b50565b6000815190506200049a816200046f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004f582620004aa565b810181811067ffffffffffffffff82111715620005175762000516620004bb565b5b80604052505050565b60006200052c62000427565b90506200053a8282620004ea565b919050565b600067ffffffffffffffff8211156200055d576200055c620004bb565b5b6200056882620004aa565b9050602081019050919050565b60005b838110156200059557808201518184015260208101905062000578565b60008484015250505050565b6000620005b8620005b2846200053f565b62000520565b905082815260208101848484011115620005d757620005d6620004a5565b5b620005e484828562000575565b509392505050565b600082601f830112620006045762000603620004a0565b5b815162000616848260208601620005a1565b91505092915050565b6000806000606084860312156200063b576200063a62000431565b5b60006200064b8682870162000489565b935050602084015167ffffffffffffffff8111156200066f576200066e62000436565b5b6200067d86828701620005ec565b9250506040620006908682870162000489565b9150509250925092565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600062000709602d836200069a565b91506200071682620006ab565b604082019050919050565b600060208201905081810360008301526200073c81620006fa565b9050919050565b600081519050919050565b600081905092915050565b6000620007668262000743565b6200077281856200074e565b93506200078481856020860162000575565b80840191505092915050565b60006200079e828462000759565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000620007e1601d836200069a565b9150620007ee82620007a9565b602082019050919050565b600060208201905081810360008301526200081481620007d2565b9050919050565b600081519050919050565b600062000833826200081b565b6200083f81856200069a565b93506200085181856020860162000575565b6200085c81620004aa565b840191505092915050565b6000602082019050818103600083015262000883818462000826565b905092915050565b610443806200089b6000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b610025610091565b610035610030610093565b6100a2565b565b606061005c83836040518060600160405280602781526020016103e7602791396100c8565b905092915050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b565b600061009d61014e565b905090565b3660008037600080366000845af43d6000803e80600081146100c3573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516100f291906102db565b600060405180830381855af49150503d806000811461012d576040519150601f19603f3d011682016040523d82523d6000602084013e610132565b606091505b5091509150610143868383876101a5565b925050509392505050565b600061017c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610064565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606083156102075760008351036101ff576101bf8561006e565b6101fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f59061034f565b60405180910390fd5b5b829050610212565b610211838361021a565b5b949350505050565b60008251111561022d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026191906103c4565b60405180910390fd5b600081519050919050565b600081905092915050565b60005b8381101561029e578082015181840152602081019050610283565b60008484015250505050565b60006102b58261026a565b6102bf8185610275565b93506102cf818560208601610280565b80840191505092915050565b60006102e782846102aa565b915081905092915050565b600082825260208201905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610339601d836102f2565b915061034482610303565b602082019050919050565b600060208201905081810360008301526103688161032c565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006103968261036f565b6103a081856102f2565b93506103b0818560208601610280565b6103b98161037a565b840191505092915050565b600060208201905081810360008301526103de818461038b565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ffa0ea4a40ceedfeb61fcad6678c192c4271dc317272d039e22f3f241f2449eb64736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
const isSuperArgs = (xs) => xs.length > 1;
class ModuleProxy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_logic, _data, _core, overrides) {
        return super.deploy(_logic, _data, _core, overrides || {});
    }
    getDeployTransaction(_logic, _data, _core, overrides) {
        return super.getDeployTransaction(_logic, _data, _core, overrides || {});
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
exports.ModuleProxy__factory = ModuleProxy__factory;
ModuleProxy__factory.bytecode = _bytecode;
ModuleProxy__factory.abi = _abi;
