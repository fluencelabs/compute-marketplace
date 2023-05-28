import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MatcherInterface extends utils.Interface {
    functions: {
        "globalConfig()": FunctionFragment;
        "matchWithDeal(address)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "register(uint256,uint256,uint256,string[])": FunctionFragment;
        "remove()": FunctionFragment;
        "resourceConfigIds()": FunctionFragment;
        "resourceConfigs(address)": FunctionFragment;
        "setWhiteList(address,bool)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "globalConfig" | "matchWithDeal" | "proxiableUUID" | "register" | "remove" | "resourceConfigIds" | "resourceConfigs" | "setWhiteList" | "upgradeTo" | "upgradeToAndCall" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "globalConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "matchWithDeal", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "register", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "remove", values?: undefined): string;
    encodeFunctionData(functionFragment: "resourceConfigIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "resourceConfigs", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setWhiteList", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "globalConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "matchWithDeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resourceConfigIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resourceConfigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhiteList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Matcher extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MatcherInterface;
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
        matchWithDeal(deal: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        register(minPriceByEpoch: PromiseOrValue<BigNumberish>, maxCollateral: PromiseOrValue<BigNumberish>, workersCount: PromiseOrValue<BigNumberish>, effectors: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        setWhiteList(owner: PromiseOrValue<string>, hasAccess: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    globalConfig(overrides?: CallOverrides): Promise<string>;
    matchWithDeal(deal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    register(minPriceByEpoch: PromiseOrValue<BigNumberish>, maxCollateral: PromiseOrValue<BigNumberish>, workersCount: PromiseOrValue<BigNumberish>, effectors: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    setWhiteList(owner: PromiseOrValue<string>, hasAccess: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        globalConfig(overrides?: CallOverrides): Promise<string>;
        matchWithDeal(deal: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        register(minPriceByEpoch: PromiseOrValue<BigNumberish>, maxCollateral: PromiseOrValue<BigNumberish>, workersCount: PromiseOrValue<BigNumberish>, effectors: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        remove(overrides?: CallOverrides): Promise<void>;
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
        setWhiteList(owner: PromiseOrValue<string>, hasAccess: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        globalConfig(overrides?: CallOverrides): Promise<BigNumber>;
        matchWithDeal(deal: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        register(minPriceByEpoch: PromiseOrValue<BigNumberish>, maxCollateral: PromiseOrValue<BigNumberish>, workersCount: PromiseOrValue<BigNumberish>, effectors: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resourceConfigIds(overrides?: CallOverrides): Promise<BigNumber>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setWhiteList(owner: PromiseOrValue<string>, hasAccess: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        globalConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        matchWithDeal(deal: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        register(minPriceByEpoch: PromiseOrValue<BigNumberish>, maxCollateral: PromiseOrValue<BigNumberish>, workersCount: PromiseOrValue<BigNumberish>, effectors: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resourceConfigIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resourceConfigs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setWhiteList(owner: PromiseOrValue<string>, hasAccess: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
