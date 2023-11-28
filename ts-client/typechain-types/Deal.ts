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
} from "./common";

export type CIDV1Struct = { prefixes: BytesLike; hash: BytesLike };

export type CIDV1StructOutput = [prefixes: string, hash: string] & {
  prefixes: string;
  hash: string;
};

export declare namespace IWorkerManager {
  export type ComputeUnitStruct = {
    id: BytesLike;
    workerId: BytesLike;
    owner: AddressLike;
    joinedEpoch: BigNumberish;
  };

  export type ComputeUnitStructOutput = [
    id: string,
    workerId: string,
    owner: string,
    joinedEpoch: bigint
  ] & { id: string; workerId: string; owner: string; joinedEpoch: bigint };
}

export interface DealInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accessType"
      | "addComputeUnit"
      | "appCID"
      | "changeAccessType"
      | "creationBlock"
      | "deposit"
      | "effectors"
      | "getAccessList"
      | "getComputeUnit"
      | "getComputeUnitCount"
      | "getComputeUnits"
      | "getFreeBalance"
      | "getMaxPaidEpoch"
      | "getRewardAmount"
      | "getStatus"
      | "getWorkerCount"
      | "initialize"
      | "isInAccessList"
      | "maxWorkersPerProvider"
      | "minWorkers"
      | "owner"
      | "paymentToken"
      | "pricePerWorkerEpoch"
      | "proxiableUUID"
      | "removeComputeUnit"
      | "removeFromAccessList"
      | "renounceOwnership"
      | "setAppCID"
      | "setWorker"
      | "stop"
      | "targetWorkers"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "withdraw"
      | "withdrawRewards"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "AppCIDChanged"
      | "BeaconUpgraded"
      | "ComputeUnitExited"
      | "ComputeUnitJoined"
      | "DealEnded"
      | "Deposited"
      | "Initialized"
      | "MaxPaidEpochUpdated"
      | "OwnershipTransferred"
      | "RewardWithdrawn"
      | "Upgraded"
      | "Withdrawn"
      | "WorkerIdUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accessType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addComputeUnit",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "appCID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeAccessType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creationBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "effectors", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAccessList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getComputeUnit",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getComputeUnitCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getComputeUnits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFreeBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxPaidEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getWorkerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      CIDV1Struct,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      CIDV1Struct[],
      BigNumberish,
      AddressLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInAccessList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxWorkersPerProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minWorkers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerWorkerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeComputeUnit",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromAccessList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAppCID",
    values: [CIDV1Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "setWorker",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "targetWorkers",
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
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewards",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "accessType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addComputeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appCID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeAccessType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creationBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "effectors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccessList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComputeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComputeUnitCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComputeUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFreeBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxPaidEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWorkerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInAccessList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWorkersPerProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minWorkers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerWorkerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeComputeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromAccessList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAppCID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setWorker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetWorkers",
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
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewards",
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

export namespace AppCIDChangedEvent {
  export type InputTuple = [newAppCID: CIDV1Struct];
  export type OutputTuple = [newAppCID: CIDV1StructOutput];
  export interface OutputObject {
    newAppCID: CIDV1StructOutput;
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

export namespace ComputeUnitExitedEvent {
  export type InputTuple = [unitId: BytesLike];
  export type OutputTuple = [unitId: string];
  export interface OutputObject {
    unitId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ComputeUnitJoinedEvent {
  export type InputTuple = [unitId: BytesLike];
  export type OutputTuple = [unitId: string];
  export interface OutputObject {
    unitId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DealEndedEvent {
  export type InputTuple = [endedEpoch: BigNumberish];
  export type OutputTuple = [endedEpoch: bigint];
  export interface OutputObject {
    endedEpoch: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
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

export namespace MaxPaidEpochUpdatedEvent {
  export type InputTuple = [maxPaidEpoch: BigNumberish];
  export type OutputTuple = [maxPaidEpoch: bigint];
  export interface OutputObject {
    maxPaidEpoch: bigint;
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

export namespace RewardWithdrawnEvent {
  export type InputTuple = [computeUnitId: BytesLike, reward: BigNumberish];
  export type OutputTuple = [computeUnitId: string, reward: bigint];
  export interface OutputObject {
    computeUnitId: string;
    reward: bigint;
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

export namespace WithdrawnEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WorkerIdUpdatedEvent {
  export type InputTuple = [computeUnitId: BytesLike, workerId: BytesLike];
  export type OutputTuple = [computeUnitId: string, workerId: string];
  export interface OutputObject {
    computeUnitId: string;
    workerId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Deal extends BaseContract {
  connect(runner?: ContractRunner | null): Deal;
  waitForDeployment(): Promise<this>;

  interface: DealInterface;

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

  accessType: TypedContractMethod<[], [bigint], "view">;

  addComputeUnit: TypedContractMethod<
    [computeProvider: AddressLike, computeUnitId: BytesLike],
    [string],
    "nonpayable"
  >;

  appCID: TypedContractMethod<[], [CIDV1StructOutput], "view">;

  changeAccessType: TypedContractMethod<
    [accessType_: BigNumberish],
    [void],
    "nonpayable"
  >;

  creationBlock: TypedContractMethod<[], [bigint], "view">;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  effectors: TypedContractMethod<[], [CIDV1StructOutput[]], "view">;

  getAccessList: TypedContractMethod<[], [string[]], "view">;

  getComputeUnit: TypedContractMethod<
    [id: BytesLike],
    [IWorkerManager.ComputeUnitStructOutput],
    "view"
  >;

  getComputeUnitCount: TypedContractMethod<[], [bigint], "view">;

  getComputeUnits: TypedContractMethod<
    [],
    [IWorkerManager.ComputeUnitStructOutput[]],
    "view"
  >;

  getFreeBalance: TypedContractMethod<[], [bigint], "view">;

  getMaxPaidEpoch: TypedContractMethod<[], [bigint], "view">;

  getRewardAmount: TypedContractMethod<
    [computeUnitId: BytesLike],
    [bigint],
    "view"
  >;

  getStatus: TypedContractMethod<[], [bigint], "view">;

  getWorkerCount: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      globalCore_: AddressLike,
      appCID_: CIDV1Struct,
      paymentToken_: AddressLike,
      minWorkers_: BigNumberish,
      targetWorkers_: BigNumberish,
      maxWorkersPerProvider_: BigNumberish,
      pricePerWorkerEpoch_: BigNumberish,
      effectors_: CIDV1Struct[],
      accessType_: BigNumberish,
      accessList_: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  isInAccessList: TypedContractMethod<[addr: AddressLike], [boolean], "view">;

  maxWorkersPerProvider: TypedContractMethod<[], [bigint], "view">;

  minWorkers: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  paymentToken: TypedContractMethod<[], [string], "view">;

  pricePerWorkerEpoch: TypedContractMethod<[], [bigint], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  removeComputeUnit: TypedContractMethod<
    [computeUnitId: BytesLike],
    [void],
    "nonpayable"
  >;

  removeFromAccessList: TypedContractMethod<
    [addr: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAppCID: TypedContractMethod<[appCID_: CIDV1Struct], [void], "nonpayable">;

  setWorker: TypedContractMethod<
    [computeUnitId: BytesLike, workerId: BytesLike],
    [void],
    "nonpayable"
  >;

  stop: TypedContractMethod<[], [void], "nonpayable">;

  targetWorkers: TypedContractMethod<[], [bigint], "view">;

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

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  withdrawRewards: TypedContractMethod<
    [computeUnitId: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accessType"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addComputeUnit"
  ): TypedContractMethod<
    [computeProvider: AddressLike, computeUnitId: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "appCID"
  ): TypedContractMethod<[], [CIDV1StructOutput], "view">;
  getFunction(
    nameOrSignature: "changeAccessType"
  ): TypedContractMethod<[accessType_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "creationBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "effectors"
  ): TypedContractMethod<[], [CIDV1StructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getAccessList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getComputeUnit"
  ): TypedContractMethod<
    [id: BytesLike],
    [IWorkerManager.ComputeUnitStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getComputeUnitCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getComputeUnits"
  ): TypedContractMethod<
    [],
    [IWorkerManager.ComputeUnitStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFreeBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxPaidEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardAmount"
  ): TypedContractMethod<[computeUnitId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStatus"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWorkerCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      globalCore_: AddressLike,
      appCID_: CIDV1Struct,
      paymentToken_: AddressLike,
      minWorkers_: BigNumberish,
      targetWorkers_: BigNumberish,
      maxWorkersPerProvider_: BigNumberish,
      pricePerWorkerEpoch_: BigNumberish,
      effectors_: CIDV1Struct[],
      accessType_: BigNumberish,
      accessList_: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isInAccessList"
  ): TypedContractMethod<[addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "maxWorkersPerProvider"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minWorkers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paymentToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pricePerWorkerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeComputeUnit"
  ): TypedContractMethod<[computeUnitId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeFromAccessList"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAppCID"
  ): TypedContractMethod<[appCID_: CIDV1Struct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setWorker"
  ): TypedContractMethod<
    [computeUnitId: BytesLike, workerId: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stop"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "targetWorkers"
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
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawRewards"
  ): TypedContractMethod<[computeUnitId: BytesLike], [void], "nonpayable">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "AppCIDChanged"
  ): TypedContractEvent<
    AppCIDChangedEvent.InputTuple,
    AppCIDChangedEvent.OutputTuple,
    AppCIDChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "ComputeUnitExited"
  ): TypedContractEvent<
    ComputeUnitExitedEvent.InputTuple,
    ComputeUnitExitedEvent.OutputTuple,
    ComputeUnitExitedEvent.OutputObject
  >;
  getEvent(
    key: "ComputeUnitJoined"
  ): TypedContractEvent<
    ComputeUnitJoinedEvent.InputTuple,
    ComputeUnitJoinedEvent.OutputTuple,
    ComputeUnitJoinedEvent.OutputObject
  >;
  getEvent(
    key: "DealEnded"
  ): TypedContractEvent<
    DealEndedEvent.InputTuple,
    DealEndedEvent.OutputTuple,
    DealEndedEvent.OutputObject
  >;
  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MaxPaidEpochUpdated"
  ): TypedContractEvent<
    MaxPaidEpochUpdatedEvent.InputTuple,
    MaxPaidEpochUpdatedEvent.OutputTuple,
    MaxPaidEpochUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardWithdrawn"
  ): TypedContractEvent<
    RewardWithdrawnEvent.InputTuple,
    RewardWithdrawnEvent.OutputTuple,
    RewardWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "WorkerIdUpdated"
  ): TypedContractEvent<
    WorkerIdUpdatedEvent.InputTuple,
    WorkerIdUpdatedEvent.OutputTuple,
    WorkerIdUpdatedEvent.OutputObject
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

    "AppCIDChanged(tuple)": TypedContractEvent<
      AppCIDChangedEvent.InputTuple,
      AppCIDChangedEvent.OutputTuple,
      AppCIDChangedEvent.OutputObject
    >;
    AppCIDChanged: TypedContractEvent<
      AppCIDChangedEvent.InputTuple,
      AppCIDChangedEvent.OutputTuple,
      AppCIDChangedEvent.OutputObject
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

    "ComputeUnitExited(bytes32)": TypedContractEvent<
      ComputeUnitExitedEvent.InputTuple,
      ComputeUnitExitedEvent.OutputTuple,
      ComputeUnitExitedEvent.OutputObject
    >;
    ComputeUnitExited: TypedContractEvent<
      ComputeUnitExitedEvent.InputTuple,
      ComputeUnitExitedEvent.OutputTuple,
      ComputeUnitExitedEvent.OutputObject
    >;

    "ComputeUnitJoined(bytes32)": TypedContractEvent<
      ComputeUnitJoinedEvent.InputTuple,
      ComputeUnitJoinedEvent.OutputTuple,
      ComputeUnitJoinedEvent.OutputObject
    >;
    ComputeUnitJoined: TypedContractEvent<
      ComputeUnitJoinedEvent.InputTuple,
      ComputeUnitJoinedEvent.OutputTuple,
      ComputeUnitJoinedEvent.OutputObject
    >;

    "DealEnded(uint256)": TypedContractEvent<
      DealEndedEvent.InputTuple,
      DealEndedEvent.OutputTuple,
      DealEndedEvent.OutputObject
    >;
    DealEnded: TypedContractEvent<
      DealEndedEvent.InputTuple,
      DealEndedEvent.OutputTuple,
      DealEndedEvent.OutputObject
    >;

    "Deposited(uint256)": TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;
    Deposited: TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
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

    "MaxPaidEpochUpdated(uint256)": TypedContractEvent<
      MaxPaidEpochUpdatedEvent.InputTuple,
      MaxPaidEpochUpdatedEvent.OutputTuple,
      MaxPaidEpochUpdatedEvent.OutputObject
    >;
    MaxPaidEpochUpdated: TypedContractEvent<
      MaxPaidEpochUpdatedEvent.InputTuple,
      MaxPaidEpochUpdatedEvent.OutputTuple,
      MaxPaidEpochUpdatedEvent.OutputObject
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

    "RewardWithdrawn(bytes32,uint256)": TypedContractEvent<
      RewardWithdrawnEvent.InputTuple,
      RewardWithdrawnEvent.OutputTuple,
      RewardWithdrawnEvent.OutputObject
    >;
    RewardWithdrawn: TypedContractEvent<
      RewardWithdrawnEvent.InputTuple,
      RewardWithdrawnEvent.OutputTuple,
      RewardWithdrawnEvent.OutputObject
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

    "Withdrawn(uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;

    "WorkerIdUpdated(bytes32,bytes32)": TypedContractEvent<
      WorkerIdUpdatedEvent.InputTuple,
      WorkerIdUpdatedEvent.OutputTuple,
      WorkerIdUpdatedEvent.OutputObject
    >;
    WorkerIdUpdated: TypedContractEvent<
      WorkerIdUpdatedEvent.InputTuple,
      WorkerIdUpdatedEvent.OutputTuple,
      WorkerIdUpdatedEvent.OutputObject
    >;
  };
}
