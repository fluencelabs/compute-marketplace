import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { RoleManagerInternal, RoleManagerInternalInterface } from "../../../../contracts/Deal/internal/RoleManagerInternal";
type RoleManagerInternalConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoleManagerInternal__factory extends ContractFactory {
    constructor(...args: RoleManagerInternalConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RoleManagerInternal>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RoleManagerInternal;
    connect(signer: Signer): RoleManagerInternal__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6104938061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b61005861009e565b60405161006591906102d5565b60405180910390f35b61008860048036038101906100839190610321565b6100c7565b005b61009261014a565b61009c60006101c8565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100cf61014a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361013e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610135906103d1565b60405180910390fd5b610147816101c8565b50565b61015261028c565b73ffffffffffffffffffffffffffffffffffffffff1661017061009e565b73ffffffffffffffffffffffffffffffffffffffff16146101c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bd9061043d565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102bf82610294565b9050919050565b6102cf816102b4565b82525050565b60006020820190506102ea60008301846102c6565b92915050565b600080fd5b6102fe816102b4565b811461030957600080fd5b50565b60008135905061031b816102f5565b92915050565b600060208284031215610337576103366102f0565b5b60006103458482850161030c565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006103bb60268361034e565b91506103c68261035f565b604082019050919050565b600060208201905081810360008301526103ea816103ae565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061042760208361034e565b9150610432826103f1565b602082019050919050565b600060208201905081810360008301526104568161041a565b905091905056fea264697066735822122007bac01cffee34e57a00b2fc82801820607910b423ebe4ee778c42ee67606c1464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RoleManagerInternalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoleManagerInternal;
}
export {};
