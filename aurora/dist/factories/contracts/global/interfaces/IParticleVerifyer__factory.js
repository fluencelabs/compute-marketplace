"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IParticleVerifyer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
                internalType: "struct Particle",
                name: "particle",
                type: "tuple",
            },
        ],
        name: "verifyParticle",
        outputs: [
            {
                internalType: "PATId[]",
                name: "",
                type: "bytes32[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IParticleVerifyer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IParticleVerifyer__factory = IParticleVerifyer__factory;
IParticleVerifyer__factory.abi = _abi;
