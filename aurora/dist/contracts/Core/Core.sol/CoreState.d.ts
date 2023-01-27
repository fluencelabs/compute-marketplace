import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface CoreStateInterface extends utils.Interface {
    functions: {
        "aquaProxy()": FunctionFragment;
        "epochDelayForReward()": FunctionFragment;
        "epochManager()": FunctionFragment;
        "fluenceToken()": FunctionFragment;
        "minAmountOfEpochsForReward()": FunctionFragment;
        "slashFactor()": FunctionFragment;
        "updateSettingsTimeout()": FunctionFragment;
        "withdrawTimeout()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aquaProxy" | "epochDelayForReward" | "epochManager" | "fluenceToken" | "minAmountOfEpochsForReward" | "slashFactor" | "updateSettingsTimeout" | "withdrawTimeout"): FunctionFragment;
    encodeFunctionData(functionFragment: "aquaProxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochDelayForReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "fluenceToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "minAmountOfEpochsForReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "slashFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateSettingsTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTimeout", values?: undefined): string;
    decodeFunctionResult(functionFragment: "aquaProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochDelayForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fluenceToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAmountOfEpochsForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slashFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSettingsTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTimeout", data: BytesLike): Result;
    events: {};
}
export interface CoreState extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CoreStateInterface;
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
        aquaProxy(overrides?: CallOverrides): Promise<[string]>;
        epochDelayForReward(overrides?: CallOverrides): Promise<[BigNumber]>;
        epochManager(overrides?: CallOverrides): Promise<[string]>;
        fluenceToken(overrides?: CallOverrides): Promise<[string]>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<[BigNumber]>;
        slashFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    aquaProxy(overrides?: CallOverrides): Promise<string>;
    epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
    epochManager(overrides?: CallOverrides): Promise<string>;
    fluenceToken(overrides?: CallOverrides): Promise<string>;
    minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
    slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
    updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        aquaProxy(overrides?: CallOverrides): Promise<string>;
        epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
        epochManager(overrides?: CallOverrides): Promise<string>;
        fluenceToken(overrides?: CallOverrides): Promise<string>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
        slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        aquaProxy(overrides?: CallOverrides): Promise<BigNumber>;
        epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
        epochManager(overrides?: CallOverrides): Promise<BigNumber>;
        fluenceToken(overrides?: CallOverrides): Promise<BigNumber>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
        slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aquaProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochDelayForReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fluenceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slashFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
