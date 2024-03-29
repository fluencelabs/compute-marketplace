/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface CoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeUnitCount"
      | "calculateRewardPool"
      | "capacity"
      | "currentEpoch"
      | "dealFactory"
      | "dealImpl"
      | "difficulty"
      | "epochDuration"
      | "fltCollateralPerUnit"
      | "fltPrice"
      | "getRewardPool"
      | "grantAccess"
      | "initTimestamp"
      | "initialize"
      | "initializeModules"
      | "isApproved"
      | "market"
      | "maxFailedRatio"
      | "maxProofsPerEpoch"
      | "maxProtocolVersion"
      | "maxRewardPerEpoch"
      | "minDealDepositedEpochs"
      | "minDealRematchingEpochs"
      | "minDuration"
      | "minProofsPerEpoch"
      | "minProtocolVersion"
      | "minRewardPerEpoch"
      | "owner"
      | "precision"
      | "proxiableUUID"
      | "randomXProxy"
      | "renounceOwnership"
      | "revokeAccess"
      | "setActiveUnitCount"
      | "setCapacityConstant"
      | "setConstant"
      | "setDealImpl"
      | "setDifficulty"
      | "setFLTPrice"
      | "slashingRate"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "usdCollateralPerUnit"
      | "usdTargetRevenuePerEpoch"
      | "vestingPeriodCount"
      | "vestingPeriodDuration"
      | "withdrawEpochsAfterFailed"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "CapacityConstantUpdated"
      | "ConstantUpdated"
      | "DealImplSet"
      | "DifficultyUpdated"
      | "FLTPriceUpdated"
      | "Initialized"
      | "OwnershipTransferred"
      | "Upgraded"
      | "WhitelistAccessGranted"
      | "WhitelistAccessRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activeUnitCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardPool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "capacity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dealFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dealImpl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "difficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fltCollateralPerUnit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fltPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "grantAccess",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeModules",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxFailedRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxProofsPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxProtocolVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxRewardPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minDealDepositedEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minDealRematchingEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minProofsPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minProtocolVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minRewardPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "precision", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomXProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAccess",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setActiveUnitCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCapacityConstant",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConstant",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDealImpl",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDifficulty",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFLTPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slashingRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usdCollateralPerUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdTargetRevenuePerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingPeriodCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingPeriodDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEpochsAfterFailed",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "activeUnitCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "capacity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dealFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dealImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "difficulty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fltCollateralPerUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fltPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeModules",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxFailedRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxProofsPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxProtocolVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxRewardPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minDealDepositedEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minDealRematchingEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minProofsPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minProtocolVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minRewardPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "precision", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "randomXProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setActiveUnitCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCapacityConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDealImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFLTPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slashingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdCollateralPerUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdTargetRevenuePerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingPeriodCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingPeriodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEpochsAfterFailed",
    data: BytesLike
  ): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CapacityConstantUpdatedEvent {
  export type InputTuple = [constantType: BigNumberish, newValue: BigNumberish];
  export type OutputTuple = [constantType: bigint, newValue: bigint];
  export interface OutputObject {
    constantType: bigint;
    newValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ConstantUpdatedEvent {
  export type InputTuple = [constantType: BigNumberish, newValue: BigNumberish];
  export type OutputTuple = [constantType: bigint, newValue: bigint];
  export interface OutputObject {
    constantType: bigint;
    newValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DealImplSetEvent {
  export type InputTuple = [dealImpl: AddressLike];
  export type OutputTuple = [dealImpl: string];
  export interface OutputObject {
    dealImpl: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DifficultyUpdatedEvent {
  export type InputTuple = [difficulty: BytesLike];
  export type OutputTuple = [difficulty: string];
  export interface OutputObject {
    difficulty: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FLTPriceUpdatedEvent {
  export type InputTuple = [newValue: BigNumberish];
  export type OutputTuple = [newValue: bigint];
  export interface OutputObject {
    newValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistAccessGrantedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistAccessRevokedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Core extends BaseContract {
  connect(runner?: ContractRunner | null): Core;
  waitForDeployment(): Promise<this>;

  interface: CoreInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  activeUnitCount: TypedContractMethod<[], [bigint], "view">;

  calculateRewardPool: TypedContractMethod<[], [void], "nonpayable">;

  capacity: TypedContractMethod<[], [string], "view">;

  currentEpoch: TypedContractMethod<[], [bigint], "view">;

  dealFactory: TypedContractMethod<[], [string], "view">;

  dealImpl: TypedContractMethod<[], [string], "view">;

  difficulty: TypedContractMethod<[], [string], "view">;

  epochDuration: TypedContractMethod<[], [bigint], "view">;

  fltCollateralPerUnit: TypedContractMethod<[], [bigint], "view">;

  fltPrice: TypedContractMethod<[], [bigint], "view">;

  getRewardPool: TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;

  grantAccess: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  initTimestamp: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      epochDuration_: BigNumberish,
      minDepositedEpochs_: BigNumberish,
      minRematchingEpochs_: BigNumberish,
      minProtocolVersion_: BigNumberish,
      maxProtocolVersion_: BigNumberish,
      dealImpl_: AddressLike,
      isWhitelistEnabled_: boolean,
      fltPrice_: BigNumberish,
      usdCollateralPerUnit_: BigNumberish,
      usdTargetRevenuePerEpoch_: BigNumberish,
      minDuration_: BigNumberish,
      minRewardPerEpoch_: BigNumberish,
      maxRewardPerEpoch_: BigNumberish,
      vestingPeriodDuration_: BigNumberish,
      vestingPeriodCount_: BigNumberish,
      slashingRate_: BigNumberish,
      minProofsPerEpoch_: BigNumberish,
      maxProofsPerEpoch_: BigNumberish,
      withdrawEpochsAfterFailed_: BigNumberish,
      maxFailedRatio_: BigNumberish,
      difficulty_: BytesLike,
      initRewardPool_: BigNumberish,
      randomXProxy_: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  initializeModules: TypedContractMethod<
    [capacity_: AddressLike, market_: AddressLike, dealFactory_: AddressLike],
    [void],
    "nonpayable"
  >;

  isApproved: TypedContractMethod<[account: AddressLike], [boolean], "view">;

  market: TypedContractMethod<[], [string], "view">;

  maxFailedRatio: TypedContractMethod<[], [bigint], "view">;

  maxProofsPerEpoch: TypedContractMethod<[], [bigint], "view">;

  maxProtocolVersion: TypedContractMethod<[], [bigint], "view">;

  maxRewardPerEpoch: TypedContractMethod<[], [bigint], "view">;

  minDealDepositedEpochs: TypedContractMethod<[], [bigint], "view">;

  minDealRematchingEpochs: TypedContractMethod<[], [bigint], "view">;

  minDuration: TypedContractMethod<[], [bigint], "view">;

  minProofsPerEpoch: TypedContractMethod<[], [bigint], "view">;

  minProtocolVersion: TypedContractMethod<[], [bigint], "view">;

  minRewardPerEpoch: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  precision: TypedContractMethod<[], [bigint], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  randomXProxy: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  revokeAccess: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  setActiveUnitCount: TypedContractMethod<
    [activeUnitCount_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCapacityConstant: TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;

  setConstant: TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;

  setDealImpl: TypedContractMethod<
    [dealImpl_: AddressLike],
    [void],
    "nonpayable"
  >;

  setDifficulty: TypedContractMethod<
    [difficulty_: BytesLike],
    [void],
    "nonpayable"
  >;

  setFLTPrice: TypedContractMethod<
    [fltPrice_: BigNumberish],
    [void],
    "nonpayable"
  >;

  slashingRate: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  usdCollateralPerUnit: TypedContractMethod<[], [bigint], "view">;

  usdTargetRevenuePerEpoch: TypedContractMethod<[], [bigint], "view">;

  vestingPeriodCount: TypedContractMethod<[], [bigint], "view">;

  vestingPeriodDuration: TypedContractMethod<[], [bigint], "view">;

  withdrawEpochsAfterFailed: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activeUnitCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculateRewardPool"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "capacity"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "currentEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dealFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dealImpl"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "difficulty"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "epochDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fltCollateralPerUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fltPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardPool"
  ): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantAccess"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      epochDuration_: BigNumberish,
      minDepositedEpochs_: BigNumberish,
      minRematchingEpochs_: BigNumberish,
      minProtocolVersion_: BigNumberish,
      maxProtocolVersion_: BigNumberish,
      dealImpl_: AddressLike,
      isWhitelistEnabled_: boolean,
      fltPrice_: BigNumberish,
      usdCollateralPerUnit_: BigNumberish,
      usdTargetRevenuePerEpoch_: BigNumberish,
      minDuration_: BigNumberish,
      minRewardPerEpoch_: BigNumberish,
      maxRewardPerEpoch_: BigNumberish,
      vestingPeriodDuration_: BigNumberish,
      vestingPeriodCount_: BigNumberish,
      slashingRate_: BigNumberish,
      minProofsPerEpoch_: BigNumberish,
      maxProofsPerEpoch_: BigNumberish,
      withdrawEpochsAfterFailed_: BigNumberish,
      maxFailedRatio_: BigNumberish,
      difficulty_: BytesLike,
      initRewardPool_: BigNumberish,
      randomXProxy_: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializeModules"
  ): TypedContractMethod<
    [capacity_: AddressLike, market_: AddressLike, dealFactory_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isApproved"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "market"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maxFailedRatio"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxProofsPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxProtocolVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxRewardPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minDealDepositedEpochs"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minDealRematchingEpochs"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minProofsPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minProtocolVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minRewardPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "precision"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "randomXProxy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeAccess"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setActiveUnitCount"
  ): TypedContractMethod<
    [activeUnitCount_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCapacityConstant"
  ): TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConstant"
  ): TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDealImpl"
  ): TypedContractMethod<[dealImpl_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDifficulty"
  ): TypedContractMethod<[difficulty_: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFLTPrice"
  ): TypedContractMethod<[fltPrice_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "slashingRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "usdCollateralPerUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "usdTargetRevenuePerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestingPeriodCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestingPeriodDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawEpochsAfterFailed"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "CapacityConstantUpdated"
  ): TypedContractEvent<
    CapacityConstantUpdatedEvent.InputTuple,
    CapacityConstantUpdatedEvent.OutputTuple,
    CapacityConstantUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ConstantUpdated"
  ): TypedContractEvent<
    ConstantUpdatedEvent.InputTuple,
    ConstantUpdatedEvent.OutputTuple,
    ConstantUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "DealImplSet"
  ): TypedContractEvent<
    DealImplSetEvent.InputTuple,
    DealImplSetEvent.OutputTuple,
    DealImplSetEvent.OutputObject
  >;
  getEvent(
    key: "DifficultyUpdated"
  ): TypedContractEvent<
    DifficultyUpdatedEvent.InputTuple,
    DifficultyUpdatedEvent.OutputTuple,
    DifficultyUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "FLTPriceUpdated"
  ): TypedContractEvent<
    FLTPriceUpdatedEvent.InputTuple,
    FLTPriceUpdatedEvent.OutputTuple,
    FLTPriceUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistAccessGranted"
  ): TypedContractEvent<
    WhitelistAccessGrantedEvent.InputTuple,
    WhitelistAccessGrantedEvent.OutputTuple,
    WhitelistAccessGrantedEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistAccessRevoked"
  ): TypedContractEvent<
    WhitelistAccessRevokedEvent.InputTuple,
    WhitelistAccessRevokedEvent.OutputTuple,
    WhitelistAccessRevokedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "CapacityConstantUpdated(uint8,uint256)": TypedContractEvent<
      CapacityConstantUpdatedEvent.InputTuple,
      CapacityConstantUpdatedEvent.OutputTuple,
      CapacityConstantUpdatedEvent.OutputObject
    >;
    CapacityConstantUpdated: TypedContractEvent<
      CapacityConstantUpdatedEvent.InputTuple,
      CapacityConstantUpdatedEvent.OutputTuple,
      CapacityConstantUpdatedEvent.OutputObject
    >;

    "ConstantUpdated(uint8,uint256)": TypedContractEvent<
      ConstantUpdatedEvent.InputTuple,
      ConstantUpdatedEvent.OutputTuple,
      ConstantUpdatedEvent.OutputObject
    >;
    ConstantUpdated: TypedContractEvent<
      ConstantUpdatedEvent.InputTuple,
      ConstantUpdatedEvent.OutputTuple,
      ConstantUpdatedEvent.OutputObject
    >;

    "DealImplSet(address)": TypedContractEvent<
      DealImplSetEvent.InputTuple,
      DealImplSetEvent.OutputTuple,
      DealImplSetEvent.OutputObject
    >;
    DealImplSet: TypedContractEvent<
      DealImplSetEvent.InputTuple,
      DealImplSetEvent.OutputTuple,
      DealImplSetEvent.OutputObject
    >;

    "DifficultyUpdated(bytes32)": TypedContractEvent<
      DifficultyUpdatedEvent.InputTuple,
      DifficultyUpdatedEvent.OutputTuple,
      DifficultyUpdatedEvent.OutputObject
    >;
    DifficultyUpdated: TypedContractEvent<
      DifficultyUpdatedEvent.InputTuple,
      DifficultyUpdatedEvent.OutputTuple,
      DifficultyUpdatedEvent.OutputObject
    >;

    "FLTPriceUpdated(uint256)": TypedContractEvent<
      FLTPriceUpdatedEvent.InputTuple,
      FLTPriceUpdatedEvent.OutputTuple,
      FLTPriceUpdatedEvent.OutputObject
    >;
    FLTPriceUpdated: TypedContractEvent<
      FLTPriceUpdatedEvent.InputTuple,
      FLTPriceUpdatedEvent.OutputTuple,
      FLTPriceUpdatedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;

    "WhitelistAccessGranted(address)": TypedContractEvent<
      WhitelistAccessGrantedEvent.InputTuple,
      WhitelistAccessGrantedEvent.OutputTuple,
      WhitelistAccessGrantedEvent.OutputObject
    >;
    WhitelistAccessGranted: TypedContractEvent<
      WhitelistAccessGrantedEvent.InputTuple,
      WhitelistAccessGrantedEvent.OutputTuple,
      WhitelistAccessGrantedEvent.OutputObject
    >;

    "WhitelistAccessRevoked(address)": TypedContractEvent<
      WhitelistAccessRevokedEvent.InputTuple,
      WhitelistAccessRevokedEvent.OutputTuple,
      WhitelistAccessRevokedEvent.OutputObject
    >;
    WhitelistAccessRevoked: TypedContractEvent<
      WhitelistAccessRevokedEvent.InputTuple,
      WhitelistAccessRevokedEvent.OutputTuple,
      WhitelistAccessRevokedEvent.OutputObject
    >;
  };
}
