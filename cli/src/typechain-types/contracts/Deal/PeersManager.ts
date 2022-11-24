/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace AquaProxy {
  export type ParticleStruct = {
    air: PromiseOrValue<string>;
    prevData: PromiseOrValue<string>;
    params: PromiseOrValue<string>;
    callResults: PromiseOrValue<string>;
  };

  export type ParticleStructOutput = [string, string, string, string] & {
    air: string;
    prevData: string;
    params: string;
    callResults: string;
  };
}

export interface PeersManagerInterface extends utils.Interface {
  functions: {
    "EXIT_TIMEOUT()": FunctionFragment;
    "GOLDEN_PARTICLE_TARGET()": FunctionFragment;
    "REWARD_AMOUNT()": FunctionFragment;
    "STAKE_AMOUNT()": FunctionFragment;
    "airScriptHash()": FunctionFragment;
    "aquaProxy()": FunctionFragment;
    "claimReward((string,string,string,string),address)": FunctionFragment;
    "core()": FunctionFragment;
    "createExitRequest()": FunctionFragment;
    "exit()": FunctionFragment;
    "fluenceToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "payedParticles(bytes32)": FunctionFragment;
    "paymentToken()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "slash((string,string,string,string),address)": FunctionFragment;
    "stake()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validators(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EXIT_TIMEOUT"
      | "GOLDEN_PARTICLE_TARGET"
      | "REWARD_AMOUNT"
      | "STAKE_AMOUNT"
      | "airScriptHash"
      | "aquaProxy"
      | "claimReward"
      | "core"
      | "createExitRequest"
      | "exit"
      | "fluenceToken"
      | "owner"
      | "payedParticles"
      | "paymentToken"
      | "renounceOwnership"
      | "slash"
      | "stake"
      | "transferOwnership"
      | "validators"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EXIT_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOLDEN_PARTICLE_TARGET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKE_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "airScriptHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "aquaProxy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [AquaProxy.ParticleStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "core", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createExitRequest",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fluenceToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payedParticles",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "slash",
    values: [AquaProxy.ParticleStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validators",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "EXIT_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOLDEN_PARTICLE_TARGET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKE_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airScriptHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "aquaProxy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createExitRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fluenceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payedParticles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PeersManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PeersManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    EXIT_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    GOLDEN_PARTICLE_TARGET(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    STAKE_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    airScriptHash(overrides?: CallOverrides): Promise<[string]>;

    aquaProxy(overrides?: CallOverrides): Promise<[string]>;

    claimReward(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    core(overrides?: CallOverrides): Promise<[string]>;

    createExitRequest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fluenceToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payedParticles(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    paymentToken(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    slash(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        balance: BigNumber;
        status: number;
        lastExitRqTime: BigNumber;
      }
    >;
  };

  EXIT_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

  GOLDEN_PARTICLE_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  STAKE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  airScriptHash(overrides?: CallOverrides): Promise<string>;

  aquaProxy(overrides?: CallOverrides): Promise<string>;

  claimReward(
    particle: AquaProxy.ParticleStruct,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  core(overrides?: CallOverrides): Promise<string>;

  createExitRequest(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fluenceToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  payedParticles(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  paymentToken(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  slash(
    particle: AquaProxy.ParticleStruct,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validators(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber] & {
      balance: BigNumber;
      status: number;
      lastExitRqTime: BigNumber;
    }
  >;

  callStatic: {
    EXIT_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    GOLDEN_PARTICLE_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    STAKE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    airScriptHash(overrides?: CallOverrides): Promise<string>;

    aquaProxy(overrides?: CallOverrides): Promise<string>;

    claimReward(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    core(overrides?: CallOverrides): Promise<string>;

    createExitRequest(overrides?: CallOverrides): Promise<void>;

    exit(overrides?: CallOverrides): Promise<void>;

    fluenceToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    payedParticles(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    paymentToken(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    slash(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        balance: BigNumber;
        status: number;
        lastExitRqTime: BigNumber;
      }
    >;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    EXIT_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    GOLDEN_PARTICLE_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    STAKE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    airScriptHash(overrides?: CallOverrides): Promise<BigNumber>;

    aquaProxy(overrides?: CallOverrides): Promise<BigNumber>;

    claimReward(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    core(overrides?: CallOverrides): Promise<BigNumber>;

    createExitRequest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fluenceToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payedParticles(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paymentToken(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    slash(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EXIT_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOLDEN_PARTICLE_TARGET(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REWARD_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKE_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    airScriptHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aquaProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimReward(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    core(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createExitRequest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fluenceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payedParticles(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paymentToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    slash(
      particle: AquaProxy.ParticleStruct,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
