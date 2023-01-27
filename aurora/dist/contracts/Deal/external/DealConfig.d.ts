import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface DealConfigInterface extends utils.Interface {
    functions: {
        "requiredStake()": FunctionFragment;
        "subnetId()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "requiredStake" | "subnetId"): FunctionFragment;
    encodeFunctionData(functionFragment: "requiredStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "subnetId", values?: undefined): string;
    decodeFunctionResult(functionFragment: "requiredStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subnetId", data: BytesLike): Result;
    events: {};
}
export interface DealConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DealConfigInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        requiredStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        subnetId(overrides?: CallOverrides): Promise<[string]>;
    };
    requiredStake(overrides?: CallOverrides): Promise<BigNumber>;
    subnetId(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        requiredStake(overrides?: CallOverrides): Promise<BigNumber>;
        subnetId(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        requiredStake(overrides?: CallOverrides): Promise<BigNumber>;
        subnetId(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        requiredStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        subnetId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
