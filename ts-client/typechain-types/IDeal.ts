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

export interface IDealInterface extends Interface {
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
      | "paymentToken"
      | "pricePerWorkerEpoch"
      | "removeComputeUnit"
      | "removeFromAccessList"
      | "setAppCID"
      | "setWorker"
      | "targetWorkers"
      | "withdraw"
      | "withdrawRewards"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AppCIDChanged"
      | "ComputeUnitExited"
      | "ComputeUnitJoined"
      | "DealEnded"
      | "Deposited"
      | "MaxPaidEpochUpdated"
      | "RewardWithdrawn"
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
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerWorkerEpoch",
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
    functionFragment: "setAppCID",
    values: [CIDV1Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "setWorker",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "targetWorkers",
    values?: undefined
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
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerWorkerEpoch",
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
  decodeFunctionResult(functionFragment: "setAppCID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setWorker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewards",
    data: BytesLike
  ): Result;
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

export interface IDeal extends BaseContract {
  connect(runner?: ContractRunner | null): IDeal;
  waitForDeployment(): Promise<this>;

  interface: IDealInterface;

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
    [computeProvider: AddressLike, unitId: BytesLike],
    [void],
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

  paymentToken: TypedContractMethod<[], [string], "view">;

  pricePerWorkerEpoch: TypedContractMethod<[], [bigint], "view">;

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

  setAppCID: TypedContractMethod<[appCID_: CIDV1Struct], [void], "nonpayable">;

  setWorker: TypedContractMethod<
    [computeUnitId: BytesLike, workerId: BytesLike],
    [void],
    "nonpayable"
  >;

  targetWorkers: TypedContractMethod<[], [bigint], "view">;

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
    [computeProvider: AddressLike, unitId: BytesLike],
    [void],
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
    nameOrSignature: "paymentToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pricePerWorkerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeComputeUnit"
  ): TypedContractMethod<[computeUnitId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeFromAccessList"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
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
    nameOrSignature: "targetWorkers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawRewards"
  ): TypedContractMethod<[computeUnitId: BytesLike], [void], "nonpayable">;

  getEvent(
    key: "AppCIDChanged"
  ): TypedContractEvent<
    AppCIDChangedEvent.InputTuple,
    AppCIDChangedEvent.OutputTuple,
    AppCIDChangedEvent.OutputObject
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
    key: "MaxPaidEpochUpdated"
  ): TypedContractEvent<
    MaxPaidEpochUpdatedEvent.InputTuple,
    MaxPaidEpochUpdatedEvent.OutputTuple,
    MaxPaidEpochUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardWithdrawn"
  ): TypedContractEvent<
    RewardWithdrawnEvent.InputTuple,
    RewardWithdrawnEvent.OutputTuple,
    RewardWithdrawnEvent.OutputObject
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
