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

export interface IMarketInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addComputePeers"
      | "addComputeUnits"
      | "addEffector"
      | "changeMinPricePerWorkerEpoch"
      | "changePaymentToken"
      | "getComputePeer"
      | "getComputeUnit"
      | "getOffer"
      | "registerMarketOffer"
      | "removeComputeUnit"
      | "removeEffector"
      | "returnComputeUnitFromDeal"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ComputeUnitAddedToDeal"
      | "ComputeUnitCreated"
      | "ComputeUnitRemovedFromDeal"
      | "EffectorAdded"
      | "EffectorRemoved"
      | "MarketOfferRegistered"
      | "MinPricePerEpochUpdated"
      | "PaymentTokenUpdated"
      | "PeerCreated"
  ): EventFragment;

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
    functionFragment: "changeMinPricePerWorkerEpoch",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changePaymentToken",
    values: [BytesLike, AddressLike]
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
    functionFragment: "returnComputeUnitFromDeal",
    values: [BytesLike]
  ): string;

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
    functionFragment: "changeMinPricePerWorkerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePaymentToken",
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
    functionFragment: "returnComputeUnitFromDeal",
    data: BytesLike
  ): Result;
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

export interface IMarket extends BaseContract {
  contractName: "IMarket";

  connect(runner?: ContractRunner | null): IMarket;
  waitForDeployment(): Promise<this>;

  interface: IMarketInterface;

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

  returnComputeUnitFromDeal: TypedContractMethod<
    [unitId: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "returnComputeUnitFromDeal"
  ): TypedContractMethod<[unitId: BytesLike], [void], "nonpayable">;

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