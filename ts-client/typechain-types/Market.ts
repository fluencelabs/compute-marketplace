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
} from "./common.js";

export type CIDV1Struct = { prefixes: BytesLike; hash: BytesLike };

export type CIDV1StructOutput = [prefixes: string, hash: string] & {
  prefixes: string;
  hash: string;
};

export declare namespace IMarket {
  export type RegisterComputePeerStruct = {
    peerId: BytesLike;
    unitCount: BigNumberish;
    owner: AddressLike;
  };

  export type RegisterComputePeerStructOutput = [
    peerId: string,
    unitCount: bigint,
    owner: string
  ] & { peerId: string; unitCount: bigint; owner: string };

  export type ComputePeerStruct = {
    offerId: BytesLike;
    commitmentId: BytesLike;
    unitCount: BigNumberish;
    owner: AddressLike;
  };

  export type ComputePeerStructOutput = [
    offerId: string,
    commitmentId: string,
    unitCount: bigint,
    owner: string
  ] & {
    offerId: string;
    commitmentId: string;
    unitCount: bigint;
    owner: string;
  };

  export type ComputeUnitStruct = {
    index: BigNumberish;
    deal: AddressLike;
    peerId: BytesLike;
  };

  export type ComputeUnitStructOutput = [
    index: bigint,
    deal: string,
    peerId: string
  ] & { index: bigint; deal: string; peerId: string };

  export type OfferStruct = {
    provider: AddressLike;
    minPricePerWorkerEpoch: BigNumberish;
    paymentToken: AddressLike;
  };

  export type OfferStructOutput = [
    provider: string,
    minPricePerWorkerEpoch: bigint,
    paymentToken: string
  ] & {
    provider: string;
    minPricePerWorkerEpoch: bigint;
    paymentToken: string;
  };
}

export interface MarketInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "PRECISION"
      | "addComputePeers"
      | "addComputeUnits"
      | "addEffector"
      | "ccActiveUnitCount"
      | "ccMaxFailedRatio"
      | "ccSlashingRate"
      | "ccVestingDuration"
      | "ccWithdrawEpochesAfterFailed"
      | "changeMinPricePerWorkerEpoch"
      | "changePaymentToken"
      | "currentEpoch"
      | "epochDuration"
      | "fltCCCollateralPerUnit"
      | "fltCCTargetRevenuePerEpoch"
      | "fltPrice"
      | "fluenceToken"
      | "getCCRewardPool"
      | "getComputePeer"
      | "getComputeUnit"
      | "getOffer"
      | "initTimestamp"
      | "maxCCProofsPerEpoch"
      | "maxCCRewardPerEpoch"
      | "minCCDuration"
      | "minCCRequierdProofsPerEpoch"
      | "minCCRewardPerEpoch"
      | "minDealDepositedEpoches"
      | "minDealRematchingEpoches"
      | "owner"
      | "registerMarketOffer"
      | "removeComputeUnit"
      | "removeEffector"
      | "renounceOwnership"
      | "returnComputeUnitFromDeal"
      | "setCCConstant"
      | "setDealConstant"
      | "setFLTPrice"
      | "transferOwnership"
      | "usdCCCollateralPerUnit"
      | "usdCCTargetRevenuePerEpoch"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CCConstantUpdated"
      | "ComputeUnitAddedToDeal"
      | "ComputeUnitCreated"
      | "ComputeUnitRemovedFromDeal"
      | "DealConstantUpdated"
      | "EffectorAdded"
      | "EffectorRemoved"
      | "FLTPriceUpdated"
      | "Initialized"
      | "MarketOfferRegistered"
      | "MinPricePerEpochUpdated"
      | "OwnershipTransferred"
      | "PaymentTokenUpdated"
      | "PeerCreated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addComputePeers",
    values: [BytesLike, IMarket.RegisterComputePeerStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addComputeUnits",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addEffector",
    values: [BytesLike, CIDV1Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "ccActiveUnitCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccMaxFailedRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccSlashingRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccVestingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccWithdrawEpochesAfterFailed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeMinPricePerWorkerEpoch",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changePaymentToken",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fltCCCollateralPerUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fltCCTargetRevenuePerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fltPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fluenceToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCCRewardPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getComputePeer",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getComputeUnit",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getOffer", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "initTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxCCProofsPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxCCRewardPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minCCDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minCCRequierdProofsPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minCCRewardPerEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minDealDepositedEpoches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minDealRematchingEpoches",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerMarketOffer",
    values: [
      BigNumberish,
      AddressLike,
      CIDV1Struct[],
      IMarket.RegisterComputePeerStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeComputeUnit",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeEffector",
    values: [BytesLike, CIDV1Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnComputeUnitFromDeal",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCCConstant",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDealConstant",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFLTPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usdCCCollateralPerUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdCCTargetRevenuePerEpoch",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addComputePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addComputeUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addEffector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccActiveUnitCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccMaxFailedRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccSlashingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccVestingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccWithdrawEpochesAfterFailed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMinPricePerWorkerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fltCCCollateralPerUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fltCCTargetRevenuePerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fltPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fluenceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCCRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComputePeer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComputeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxCCProofsPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxCCRewardPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCCDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCCRequierdProofsPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCCRewardPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minDealDepositedEpoches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minDealRematchingEpoches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerMarketOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeComputeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeEffector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnComputeUnitFromDeal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCCConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDealConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFLTPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdCCCollateralPerUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdCCTargetRevenuePerEpoch",
    data: BytesLike
  ): Result;
}

export namespace CCConstantUpdatedEvent {
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

export namespace ComputeUnitAddedToDealEvent {
  export type InputTuple = [
    unitId: BytesLike,
    deal: AddressLike,
    peerId: BytesLike
  ];
  export type OutputTuple = [unitId: string, deal: string, peerId: string];
  export interface OutputObject {
    unitId: string;
    deal: string;
    peerId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ComputeUnitCreatedEvent {
  export type InputTuple = [peerId: BytesLike, unitId: BytesLike];
  export type OutputTuple = [peerId: string, unitId: string];
  export interface OutputObject {
    peerId: string;
    unitId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ComputeUnitRemovedFromDealEvent {
  export type InputTuple = [
    unitId: BytesLike,
    deal: AddressLike,
    peerId: BytesLike
  ];
  export type OutputTuple = [unitId: string, deal: string, peerId: string];
  export interface OutputObject {
    unitId: string;
    deal: string;
    peerId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DealConstantUpdatedEvent {
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

export namespace EffectorAddedEvent {
  export type InputTuple = [offerId: BytesLike, effector: CIDV1Struct];
  export type OutputTuple = [offerId: string, effector: CIDV1StructOutput];
  export interface OutputObject {
    offerId: string;
    effector: CIDV1StructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EffectorRemovedEvent {
  export type InputTuple = [offerId: BytesLike, effector: CIDV1Struct];
  export type OutputTuple = [offerId: string, effector: CIDV1StructOutput];
  export interface OutputObject {
    offerId: string;
    effector: CIDV1StructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FLTPriceUpdatedEvent {
  export type InputTuple = [newPrice: BigNumberish];
  export type OutputTuple = [newPrice: bigint];
  export interface OutputObject {
    newPrice: bigint;
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

export namespace MarketOfferRegisteredEvent {
  export type InputTuple = [
    provider: AddressLike,
    offerId: BytesLike,
    minPricePerWorkerEpoch: BigNumberish,
    paymentToken: AddressLike,
    effectors: CIDV1Struct[]
  ];
  export type OutputTuple = [
    provider: string,
    offerId: string,
    minPricePerWorkerEpoch: bigint,
    paymentToken: string,
    effectors: CIDV1StructOutput[]
  ];
  export interface OutputObject {
    provider: string;
    offerId: string;
    minPricePerWorkerEpoch: bigint;
    paymentToken: string;
    effectors: CIDV1StructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinPricePerEpochUpdatedEvent {
  export type InputTuple = [
    offerId: BytesLike,
    minPricePerWorkerEpoch: BigNumberish
  ];
  export type OutputTuple = [offerId: string, minPricePerWorkerEpoch: bigint];
  export interface OutputObject {
    offerId: string;
    minPricePerWorkerEpoch: bigint;
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

export namespace PaymentTokenUpdatedEvent {
  export type InputTuple = [offerId: BytesLike, paymentToken: AddressLike];
  export type OutputTuple = [offerId: string, paymentToken: string];
  export interface OutputObject {
    offerId: string;
    paymentToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PeerCreatedEvent {
  export type InputTuple = [
    offerId: BytesLike,
    peerId: BytesLike,
    owner: AddressLike
  ];
  export type OutputTuple = [offerId: string, peerId: string, owner: string];
  export interface OutputObject {
    offerId: string;
    peerId: string;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Market extends BaseContract {
  contractName: "Market";

  connect(runner?: ContractRunner | null): Market;
  waitForDeployment(): Promise<this>;

  interface: MarketInterface;

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

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  addComputePeers: TypedContractMethod<
    [offerId: BytesLike, peers: IMarket.RegisterComputePeerStruct[]],
    [void],
    "nonpayable"
  >;

  addComputeUnits: TypedContractMethod<
    [peerId: BytesLike, unitCount: BigNumberish],
    [void],
    "nonpayable"
  >;

  addEffector: TypedContractMethod<
    [offerId: BytesLike, newEffectors: CIDV1Struct[]],
    [void],
    "nonpayable"
  >;

  ccActiveUnitCount: TypedContractMethod<[], [bigint], "view">;

  ccMaxFailedRatio: TypedContractMethod<[], [bigint], "view">;

  ccSlashingRate: TypedContractMethod<[], [bigint], "view">;

  ccVestingDuration: TypedContractMethod<[], [bigint], "view">;

  ccWithdrawEpochesAfterFailed: TypedContractMethod<[], [bigint], "view">;

  changeMinPricePerWorkerEpoch: TypedContractMethod<
    [offerId: BytesLike, newMinPricePerWorkerEpoch: BigNumberish],
    [void],
    "nonpayable"
  >;

  changePaymentToken: TypedContractMethod<
    [offerId: BytesLike, newPaymentToken: AddressLike],
    [void],
    "nonpayable"
  >;

  currentEpoch: TypedContractMethod<[], [bigint], "view">;

  epochDuration: TypedContractMethod<[], [bigint], "view">;

  fltCCCollateralPerUnit: TypedContractMethod<[], [bigint], "view">;

  fltCCTargetRevenuePerEpoch: TypedContractMethod<[], [bigint], "view">;

  fltPrice: TypedContractMethod<[], [bigint], "view">;

  fluenceToken: TypedContractMethod<[], [string], "view">;

  getCCRewardPool: TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;

  getComputePeer: TypedContractMethod<
    [peerId: BytesLike],
    [IMarket.ComputePeerStructOutput],
    "view"
  >;

  getComputeUnit: TypedContractMethod<
    [unitId: BytesLike],
    [IMarket.ComputeUnitStructOutput],
    "view"
  >;

  getOffer: TypedContractMethod<
    [offerId: BytesLike],
    [IMarket.OfferStructOutput],
    "view"
  >;

  initTimestamp: TypedContractMethod<[], [bigint], "view">;

  maxCCProofsPerEpoch: TypedContractMethod<[], [bigint], "view">;

  maxCCRewardPerEpoch: TypedContractMethod<[], [bigint], "view">;

  minCCDuration: TypedContractMethod<[], [bigint], "view">;

  minCCRequierdProofsPerEpoch: TypedContractMethod<[], [bigint], "view">;

  minCCRewardPerEpoch: TypedContractMethod<[], [bigint], "view">;

  minDealDepositedEpoches: TypedContractMethod<[], [bigint], "view">;

  minDealRematchingEpoches: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  registerMarketOffer: TypedContractMethod<
    [
      minPricePerWorkerEpoch: BigNumberish,
      paymentToken: AddressLike,
      effectors: CIDV1Struct[],
      peers: IMarket.RegisterComputePeerStruct[]
    ],
    [string],
    "nonpayable"
  >;

  removeComputeUnit: TypedContractMethod<
    [unitId: BytesLike, lastUnitId: BytesLike],
    [void],
    "nonpayable"
  >;

  removeEffector: TypedContractMethod<
    [offerId: BytesLike, effectors: CIDV1Struct[]],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  returnComputeUnitFromDeal: TypedContractMethod<
    [unitId: BytesLike],
    [void],
    "nonpayable"
  >;

  setCCConstant: TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;

  setDealConstant: TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;

  setFLTPrice: TypedContractMethod<
    [fltPrice_: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  usdCCCollateralPerUnit: TypedContractMethod<[], [bigint], "view">;

  usdCCTargetRevenuePerEpoch: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addComputePeers"
  ): TypedContractMethod<
    [offerId: BytesLike, peers: IMarket.RegisterComputePeerStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addComputeUnits"
  ): TypedContractMethod<
    [peerId: BytesLike, unitCount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addEffector"
  ): TypedContractMethod<
    [offerId: BytesLike, newEffectors: CIDV1Struct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ccActiveUnitCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ccMaxFailedRatio"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ccSlashingRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ccVestingDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ccWithdrawEpochesAfterFailed"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeMinPricePerWorkerEpoch"
  ): TypedContractMethod<
    [offerId: BytesLike, newMinPricePerWorkerEpoch: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changePaymentToken"
  ): TypedContractMethod<
    [offerId: BytesLike, newPaymentToken: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "currentEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "epochDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fltCCCollateralPerUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fltCCTargetRevenuePerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fltPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fluenceToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCCRewardPool"
  ): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getComputePeer"
  ): TypedContractMethod<
    [peerId: BytesLike],
    [IMarket.ComputePeerStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getComputeUnit"
  ): TypedContractMethod<
    [unitId: BytesLike],
    [IMarket.ComputeUnitStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOffer"
  ): TypedContractMethod<
    [offerId: BytesLike],
    [IMarket.OfferStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "initTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxCCProofsPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxCCRewardPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minCCDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minCCRequierdProofsPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minCCRewardPerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minDealDepositedEpoches"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minDealRematchingEpoches"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registerMarketOffer"
  ): TypedContractMethod<
    [
      minPricePerWorkerEpoch: BigNumberish,
      paymentToken: AddressLike,
      effectors: CIDV1Struct[],
      peers: IMarket.RegisterComputePeerStruct[]
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeComputeUnit"
  ): TypedContractMethod<
    [unitId: BytesLike, lastUnitId: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeEffector"
  ): TypedContractMethod<
    [offerId: BytesLike, effectors: CIDV1Struct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "returnComputeUnitFromDeal"
  ): TypedContractMethod<[unitId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCCConstant"
  ): TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDealConstant"
  ): TypedContractMethod<
    [constantType: BigNumberish, v: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFLTPrice"
  ): TypedContractMethod<[fltPrice_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "usdCCCollateralPerUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "usdCCTargetRevenuePerEpoch"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "CCConstantUpdated"
  ): TypedContractEvent<
    CCConstantUpdatedEvent.InputTuple,
    CCConstantUpdatedEvent.OutputTuple,
    CCConstantUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ComputeUnitAddedToDeal"
  ): TypedContractEvent<
    ComputeUnitAddedToDealEvent.InputTuple,
    ComputeUnitAddedToDealEvent.OutputTuple,
    ComputeUnitAddedToDealEvent.OutputObject
  >;
  getEvent(
    key: "ComputeUnitCreated"
  ): TypedContractEvent<
    ComputeUnitCreatedEvent.InputTuple,
    ComputeUnitCreatedEvent.OutputTuple,
    ComputeUnitCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ComputeUnitRemovedFromDeal"
  ): TypedContractEvent<
    ComputeUnitRemovedFromDealEvent.InputTuple,
    ComputeUnitRemovedFromDealEvent.OutputTuple,
    ComputeUnitRemovedFromDealEvent.OutputObject
  >;
  getEvent(
    key: "DealConstantUpdated"
  ): TypedContractEvent<
    DealConstantUpdatedEvent.InputTuple,
    DealConstantUpdatedEvent.OutputTuple,
    DealConstantUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "EffectorAdded"
  ): TypedContractEvent<
    EffectorAddedEvent.InputTuple,
    EffectorAddedEvent.OutputTuple,
    EffectorAddedEvent.OutputObject
  >;
  getEvent(
    key: "EffectorRemoved"
  ): TypedContractEvent<
    EffectorRemovedEvent.InputTuple,
    EffectorRemovedEvent.OutputTuple,
    EffectorRemovedEvent.OutputObject
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
    key: "MarketOfferRegistered"
  ): TypedContractEvent<
    MarketOfferRegisteredEvent.InputTuple,
    MarketOfferRegisteredEvent.OutputTuple,
    MarketOfferRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "MinPricePerEpochUpdated"
  ): TypedContractEvent<
    MinPricePerEpochUpdatedEvent.InputTuple,
    MinPricePerEpochUpdatedEvent.OutputTuple,
    MinPricePerEpochUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PaymentTokenUpdated"
  ): TypedContractEvent<
    PaymentTokenUpdatedEvent.InputTuple,
    PaymentTokenUpdatedEvent.OutputTuple,
    PaymentTokenUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PeerCreated"
  ): TypedContractEvent<
    PeerCreatedEvent.InputTuple,
    PeerCreatedEvent.OutputTuple,
    PeerCreatedEvent.OutputObject
  >;

  filters: {
    "CCConstantUpdated(uint8,uint256)": TypedContractEvent<
      CCConstantUpdatedEvent.InputTuple,
      CCConstantUpdatedEvent.OutputTuple,
      CCConstantUpdatedEvent.OutputObject
    >;
    CCConstantUpdated: TypedContractEvent<
      CCConstantUpdatedEvent.InputTuple,
      CCConstantUpdatedEvent.OutputTuple,
      CCConstantUpdatedEvent.OutputObject
    >;

    "ComputeUnitAddedToDeal(bytes32,address,bytes32)": TypedContractEvent<
      ComputeUnitAddedToDealEvent.InputTuple,
      ComputeUnitAddedToDealEvent.OutputTuple,
      ComputeUnitAddedToDealEvent.OutputObject
    >;
    ComputeUnitAddedToDeal: TypedContractEvent<
      ComputeUnitAddedToDealEvent.InputTuple,
      ComputeUnitAddedToDealEvent.OutputTuple,
      ComputeUnitAddedToDealEvent.OutputObject
    >;

    "ComputeUnitCreated(bytes32,bytes32)": TypedContractEvent<
      ComputeUnitCreatedEvent.InputTuple,
      ComputeUnitCreatedEvent.OutputTuple,
      ComputeUnitCreatedEvent.OutputObject
    >;
    ComputeUnitCreated: TypedContractEvent<
      ComputeUnitCreatedEvent.InputTuple,
      ComputeUnitCreatedEvent.OutputTuple,
      ComputeUnitCreatedEvent.OutputObject
    >;

    "ComputeUnitRemovedFromDeal(bytes32,address,bytes32)": TypedContractEvent<
      ComputeUnitRemovedFromDealEvent.InputTuple,
      ComputeUnitRemovedFromDealEvent.OutputTuple,
      ComputeUnitRemovedFromDealEvent.OutputObject
    >;
    ComputeUnitRemovedFromDeal: TypedContractEvent<
      ComputeUnitRemovedFromDealEvent.InputTuple,
      ComputeUnitRemovedFromDealEvent.OutputTuple,
      ComputeUnitRemovedFromDealEvent.OutputObject
    >;

    "DealConstantUpdated(uint8,uint256)": TypedContractEvent<
      DealConstantUpdatedEvent.InputTuple,
      DealConstantUpdatedEvent.OutputTuple,
      DealConstantUpdatedEvent.OutputObject
    >;
    DealConstantUpdated: TypedContractEvent<
      DealConstantUpdatedEvent.InputTuple,
      DealConstantUpdatedEvent.OutputTuple,
      DealConstantUpdatedEvent.OutputObject
    >;

    "EffectorAdded(bytes32,tuple)": TypedContractEvent<
      EffectorAddedEvent.InputTuple,
      EffectorAddedEvent.OutputTuple,
      EffectorAddedEvent.OutputObject
    >;
    EffectorAdded: TypedContractEvent<
      EffectorAddedEvent.InputTuple,
      EffectorAddedEvent.OutputTuple,
      EffectorAddedEvent.OutputObject
    >;

    "EffectorRemoved(bytes32,tuple)": TypedContractEvent<
      EffectorRemovedEvent.InputTuple,
      EffectorRemovedEvent.OutputTuple,
      EffectorRemovedEvent.OutputObject
    >;
    EffectorRemoved: TypedContractEvent<
      EffectorRemovedEvent.InputTuple,
      EffectorRemovedEvent.OutputTuple,
      EffectorRemovedEvent.OutputObject
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

    "MarketOfferRegistered(address,bytes32,uint256,address,tuple[])": TypedContractEvent<
      MarketOfferRegisteredEvent.InputTuple,
      MarketOfferRegisteredEvent.OutputTuple,
      MarketOfferRegisteredEvent.OutputObject
    >;
    MarketOfferRegistered: TypedContractEvent<
      MarketOfferRegisteredEvent.InputTuple,
      MarketOfferRegisteredEvent.OutputTuple,
      MarketOfferRegisteredEvent.OutputObject
    >;

    "MinPricePerEpochUpdated(bytes32,uint256)": TypedContractEvent<
      MinPricePerEpochUpdatedEvent.InputTuple,
      MinPricePerEpochUpdatedEvent.OutputTuple,
      MinPricePerEpochUpdatedEvent.OutputObject
    >;
    MinPricePerEpochUpdated: TypedContractEvent<
      MinPricePerEpochUpdatedEvent.InputTuple,
      MinPricePerEpochUpdatedEvent.OutputTuple,
      MinPricePerEpochUpdatedEvent.OutputObject
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

    "PaymentTokenUpdated(bytes32,address)": TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;
    PaymentTokenUpdated: TypedContractEvent<
      PaymentTokenUpdatedEvent.InputTuple,
      PaymentTokenUpdatedEvent.OutputTuple,
      PaymentTokenUpdatedEvent.OutputObject
    >;

    "PeerCreated(bytes32,bytes32,address)": TypedContractEvent<
      PeerCreatedEvent.InputTuple,
      PeerCreatedEvent.OutputTuple,
      PeerCreatedEvent.OutputObject
    >;
    PeerCreated: TypedContractEvent<
      PeerCreatedEvent.InputTuple,
      PeerCreatedEvent.OutputTuple,
      PeerCreatedEvent.OutputObject
    >;
  };
}