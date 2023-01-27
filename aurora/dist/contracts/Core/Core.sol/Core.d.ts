import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface CoreInterface extends utils.Interface {
    functions: {
        "aquaProxy()": FunctionFragment;
        "epochDelayForReward()": FunctionFragment;
        "epochManager()": FunctionFragment;
        "fluenceToken()": FunctionFragment;
        "initialize(address,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "minAmountOfEpochsForReward()": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAquaProxy(address)": FunctionFragment;
        "setEpochDelayForReward(uint256)": FunctionFragment;
        "setEpochManager(address)": FunctionFragment;
        "setFluenceToken(address)": FunctionFragment;
        "setMinAmountOfEpochsForReward(uint256)": FunctionFragment;
        "setSlashFactor(uint256)": FunctionFragment;
        "setUpdateSettingsTimeout(uint256)": FunctionFragment;
        "setWithdrawTimeout(uint256)": FunctionFragment;
        "slashFactor()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateSettingsTimeout()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdrawTimeout()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aquaProxy" | "epochDelayForReward" | "epochManager" | "fluenceToken" | "initialize" | "minAmountOfEpochsForReward" | "owner" | "proxiableUUID" | "renounceOwnership" | "setAquaProxy" | "setEpochDelayForReward" | "setEpochManager" | "setFluenceToken" | "setMinAmountOfEpochsForReward" | "setSlashFactor" | "setUpdateSettingsTimeout" | "setWithdrawTimeout" | "slashFactor" | "transferOwnership" | "updateSettingsTimeout" | "upgradeTo" | "upgradeToAndCall" | "withdrawTimeout"): FunctionFragment;
    encodeFunctionData(functionFragment: "aquaProxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochDelayForReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "fluenceToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "minAmountOfEpochsForReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAquaProxy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setEpochDelayForReward", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEpochManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFluenceToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMinAmountOfEpochsForReward", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSlashFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUpdateSettingsTimeout", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWithdrawTimeout", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "slashFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateSettingsTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdrawTimeout", values?: undefined): string;
    decodeFunctionResult(functionFragment: "aquaProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochDelayForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fluenceToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAmountOfEpochsForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAquaProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEpochDelayForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEpochManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFluenceToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinAmountOfEpochsForReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSlashFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUpdateSettingsTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slashFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSettingsTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTimeout", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Core extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CoreInterface;
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
        initialize(fluenceToken_: PromiseOrValue<string>, aquaProxy_: PromiseOrValue<string>, withdrawTimeout_: PromiseOrValue<BigNumberish>, epochDelayForReward_: PromiseOrValue<BigNumberish>, slashFactor_: PromiseOrValue<BigNumberish>, updateSettingsTimeout_: PromiseOrValue<BigNumberish>, epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAquaProxy(aquaProxy_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEpochDelayForReward(epochDelayForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEpochManager(epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFluenceToken(fluenceToken_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinAmountOfEpochsForReward(minAmountOfEpochsForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSlashFactor(slashFactor_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUpdateSettingsTimeout(updateSettingsTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawTimeout(withdrawTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slashFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    aquaProxy(overrides?: CallOverrides): Promise<string>;
    epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
    epochManager(overrides?: CallOverrides): Promise<string>;
    fluenceToken(overrides?: CallOverrides): Promise<string>;
    initialize(fluenceToken_: PromiseOrValue<string>, aquaProxy_: PromiseOrValue<string>, withdrawTimeout_: PromiseOrValue<BigNumberish>, epochDelayForReward_: PromiseOrValue<BigNumberish>, slashFactor_: PromiseOrValue<BigNumberish>, updateSettingsTimeout_: PromiseOrValue<BigNumberish>, epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAquaProxy(aquaProxy_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEpochDelayForReward(epochDelayForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEpochManager(epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFluenceToken(fluenceToken_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinAmountOfEpochsForReward(minAmountOfEpochsForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSlashFactor(slashFactor_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUpdateSettingsTimeout(updateSettingsTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawTimeout(withdrawTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        aquaProxy(overrides?: CallOverrides): Promise<string>;
        epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
        epochManager(overrides?: CallOverrides): Promise<string>;
        fluenceToken(overrides?: CallOverrides): Promise<string>;
        initialize(fluenceToken_: PromiseOrValue<string>, aquaProxy_: PromiseOrValue<string>, withdrawTimeout_: PromiseOrValue<BigNumberish>, epochDelayForReward_: PromiseOrValue<BigNumberish>, slashFactor_: PromiseOrValue<BigNumberish>, updateSettingsTimeout_: PromiseOrValue<BigNumberish>, epochManager_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAquaProxy(aquaProxy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEpochDelayForReward(epochDelayForReward_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEpochManager(epochManager_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFluenceToken(fluenceToken_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMinAmountOfEpochsForReward(minAmountOfEpochsForReward_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSlashFactor(slashFactor_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUpdateSettingsTimeout(updateSettingsTimeout_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWithdrawTimeout(withdrawTimeout_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        aquaProxy(overrides?: CallOverrides): Promise<BigNumber>;
        epochDelayForReward(overrides?: CallOverrides): Promise<BigNumber>;
        epochManager(overrides?: CallOverrides): Promise<BigNumber>;
        fluenceToken(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(fluenceToken_: PromiseOrValue<string>, aquaProxy_: PromiseOrValue<string>, withdrawTimeout_: PromiseOrValue<BigNumberish>, epochDelayForReward_: PromiseOrValue<BigNumberish>, slashFactor_: PromiseOrValue<BigNumberish>, updateSettingsTimeout_: PromiseOrValue<BigNumberish>, epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAquaProxy(aquaProxy_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEpochDelayForReward(epochDelayForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEpochManager(epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFluenceToken(fluenceToken_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinAmountOfEpochsForReward(minAmountOfEpochsForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSlashFactor(slashFactor_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUpdateSettingsTimeout(updateSettingsTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawTimeout(withdrawTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slashFactor(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aquaProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochDelayForReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fluenceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(fluenceToken_: PromiseOrValue<string>, aquaProxy_: PromiseOrValue<string>, withdrawTimeout_: PromiseOrValue<BigNumberish>, epochDelayForReward_: PromiseOrValue<BigNumberish>, slashFactor_: PromiseOrValue<BigNumberish>, updateSettingsTimeout_: PromiseOrValue<BigNumberish>, epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minAmountOfEpochsForReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAquaProxy(aquaProxy_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEpochDelayForReward(epochDelayForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEpochManager(epochManager_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFluenceToken(fluenceToken_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinAmountOfEpochsForReward(minAmountOfEpochsForReward_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSlashFactor(slashFactor_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUpdateSettingsTimeout(updateSettingsTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawTimeout(withdrawTimeout_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slashFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSettingsTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
