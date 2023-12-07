/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common.js";

export interface DeployDealSystemInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_EPOCH_DURATION"
      | "DEFAULT_FLT_PRICE"
      | "DEFAULT_MAX_FAILED_RATIO"
      | "DEFAULT_MAX_PROOFS_PER_EPOCH"
      | "DEFAULT_MAX_REWARD_PER_EPOCH"
      | "DEFAULT_MIN_DEPOSITED_EPOCHES"
      | "DEFAULT_MIN_DURATION"
      | "DEFAULT_MIN_REMATCHING_EPOCHES"
      | "DEFAULT_MIN_REQUIERD_PROOFS_PER_EPOCH"
      | "DEFAULT_MIN_REWARD_PER_EPOCH"
      | "DEFAULT_SLASHING_RATE"
      | "DEFAULT_USD_COLLATERAL_PER_UNIT"
      | "DEFAULT_USD_TARGET_REVENUE_PER_EPOCH"
      | "DEFAULT_VESTING_DURATION"
      | "DEFAULT_WITHDRAW_EPOCHES_AFTER_FAILED"
      | "PRECISION"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_EPOCH_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_FLT_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MAX_FAILED_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MAX_PROOFS_PER_EPOCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MAX_REWARD_PER_EPOCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MIN_DEPOSITED_EPOCHES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MIN_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MIN_REMATCHING_EPOCHES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MIN_REQUIERD_PROOFS_PER_EPOCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_MIN_REWARD_PER_EPOCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_SLASHING_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_USD_COLLATERAL_PER_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_USD_TARGET_REVENUE_PER_EPOCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_VESTING_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_WITHDRAW_EPOCHES_AFTER_FAILED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_EPOCH_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_FLT_PRICE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MAX_FAILED_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MAX_PROOFS_PER_EPOCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MAX_REWARD_PER_EPOCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MIN_DEPOSITED_EPOCHES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MIN_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MIN_REMATCHING_EPOCHES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MIN_REQUIERD_PROOFS_PER_EPOCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_MIN_REWARD_PER_EPOCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_SLASHING_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_USD_COLLATERAL_PER_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_USD_TARGET_REVENUE_PER_EPOCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_VESTING_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_WITHDRAW_EPOCHES_AFTER_FAILED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
}

export interface DeployDealSystem extends BaseContract {
  contractName: "DeployDealSystem";

  connect(runner?: ContractRunner | null): DeployDealSystem;
  waitForDeployment(): Promise<this>;

  interface: DeployDealSystemInterface;

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

  DEFAULT_EPOCH_DURATION: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_FLT_PRICE: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MAX_FAILED_RATIO: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MAX_PROOFS_PER_EPOCH: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MAX_REWARD_PER_EPOCH: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MIN_DEPOSITED_EPOCHES: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MIN_DURATION: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MIN_REMATCHING_EPOCHES: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_MIN_REQUIERD_PROOFS_PER_EPOCH: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  DEFAULT_MIN_REWARD_PER_EPOCH: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_SLASHING_RATE: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_USD_COLLATERAL_PER_UNIT: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_USD_TARGET_REVENUE_PER_EPOCH: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  DEFAULT_VESTING_DURATION: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_WITHDRAW_EPOCHES_AFTER_FAILED: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_EPOCH_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_FLT_PRICE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MAX_FAILED_RATIO"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MAX_PROOFS_PER_EPOCH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MAX_REWARD_PER_EPOCH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MIN_DEPOSITED_EPOCHES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MIN_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MIN_REMATCHING_EPOCHES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MIN_REQUIERD_PROOFS_PER_EPOCH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_MIN_REWARD_PER_EPOCH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_SLASHING_RATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_USD_COLLATERAL_PER_UNIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_USD_TARGET_REVENUE_PER_EPOCH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_VESTING_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_WITHDRAW_EPOCHES_AFTER_FAILED"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
