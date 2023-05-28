"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMatcher__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
];
class IMatcher__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMatcher__factory = IMatcher__factory;
IMatcher__factory.abi = _abi;
