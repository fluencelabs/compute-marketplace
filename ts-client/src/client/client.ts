import type { ethers } from "ethers";

import {
  Core__factory,
  Deal__factory,
  DealFactory__factory,
  ERC20__factory,
  Market__factory,
  Capacity__factory,
  Multicall3__factory,
} from "../typechain-types/index.js";
import { getDeployment } from "./config.js";

import type {
  Deal,
  ICapacity,
  ICore,
  IDealFactory,
  IERC20,
  IMarket,
  Multicall3,
} from "../typechain-types/index.js";
import type { Deployment, ContractsENV } from "./config.js";

export enum CommitmentStatus {
  Inactive,
  Active,
  // WaitDelegation - before collateral is deposited.
  WaitDelegation,
  // Status is WaitStart - means collateral deposited, and epoch should be proceed before Active.
  WaitStart,
  Failed,
  Removed,
}

export enum DealStatus {
  // the deal does have enough funds to pay for the workers
  INSUFFICIENT_FUNDS,
  ACTIVE,
  // the deal is stopped
  ENDED,
  // the deal has a balance and waiting for workers
  NOT_ENOUGH_WORKERS,
  // the deal has balance less than the minimal balance. Min balance: 2 * targetWorkers * pricePerWorkerEpoch
  SMALL_BALANCE,
}

export enum AccessType {
  NONE,
  WHITELIST,
  BLACKLIST
}

export class DealClient {
  private deployment: Deployment;

  static getContractAddresses(env: ContractsENV): Deployment {
    return getDeployment(env);
  }

  constructor(
    private signerOrProvider: ethers.Signer | ethers.Provider,
    env: ContractsENV,
  ) {
    this.deployment = getDeployment(env);
  }

  getDeal(address: string): Deal {
    return Deal__factory.connect(address, this.signerOrProvider);
  }

  getCore(): ICore {
    return Core__factory.connect(this.deployment.core, this.signerOrProvider);
  }

  getMarket(): IMarket {
    return Market__factory.connect(
      this.deployment.market,
      this.signerOrProvider,
    );
  }

  getDealFactory(): IDealFactory {
    return DealFactory__factory.connect(
      this.deployment.dealFactory,
      this.signerOrProvider,
    );
  }

  getCapacity(): ICapacity {
    return Capacity__factory.connect(
      this.deployment.capacity,
      this.signerOrProvider,
    );
  }

  getUSDC(): IERC20 {
    return ERC20__factory.connect(this.deployment.usdc, this.signerOrProvider);
  }

  getMulticall3(): Multicall3 {
    return Multicall3__factory.connect(
      this.deployment.multicall3,
      this.signerOrProvider,
    );
  }
}
