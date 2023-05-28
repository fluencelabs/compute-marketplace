import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MatcherStateInterface extends utils.Interface {
    functions: {
        "globalConfig()": FunctionFragment;
        "resourceConfigIds()": FunctionFragment;
        "resourceConfigs(address)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "globalConfig" | "resourceConfigIds" | "resourceConfigs" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "globalConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "resourceConfigIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "resourceConfigs", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "globalConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resourceConfigIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resourceConfigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {};
}
export interface MatcherState extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MatcherStateInterface;
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
        globalConfig(overrides?: CallOverrides): Promise<[string]>;
        resourceConfigIds(overrides?: CallOverrides): Promise<[string, string] & {
            _first: string;
            _last: string;
        }>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            minPriceByEpoch: BigNumber;
            maxCollateral: BigNumber;
            workersCount: BigNumber;
        }>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    globalConfig(overrides?: CallOverrides): Promise<string>;
    resourceConfigIds(overrides?: CallOverrides): Promise<[string, string] & {
        _first: string;
        _last: string;
    }>;
    resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minPriceByEpoch: BigNumber;
        maxCollateral: BigNumber;
        workersCount: BigNumber;
    }>;
    whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        globalConfig(overrides?: CallOverrides): Promise<string>;
        resourceConfigIds(overrides?: CallOverrides): Promise<[string, string] & {
            _first: string;
            _last: string;
        }>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            minPriceByEpoch: BigNumber;
            maxCollateral: BigNumber;
            workersCount: BigNumber;
        }>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        globalConfig(overrides?: CallOverrides): Promise<BigNumber>;
        resourceConfigIds(overrides?: CallOverrides): Promise<BigNumber>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        globalConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resourceConfigIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
