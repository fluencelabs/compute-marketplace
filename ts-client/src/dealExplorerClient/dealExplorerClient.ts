import { ethers } from "ethers";
import type {
  CapacityCommitmentDetail,
  CapacityCommitmentListView,
  CapacityCommitmentShort,
  CapacityCommitmentStatus,
  DealDetail,
  DealShortListView,
  DealStatus,
  Effector,
  EffectorListView,
  OfferDetail,
  OfferShortListView,
  PaymentToken,
  PaymentTokenListView,
  ProviderDetail,
  ProviderShortListView,
} from "./types/schemes.js";
import type {
  ByProviderAndStatusFilter,
  CapacityCommitmentsFilters,
  CapacityCommitmentsOrderBy,
  DealsFilters,
  DealsShortOrderBy,
  EffectorsOrderBy,
  OffersFilters,
  OfferShortOrderBy,
  OrderType,
  PaymentTokenOrderBy,
  ProvidersFilters,
  ProviderShortOrderBy,
} from "./types/filters.js";
import { IndexerClient } from "./indexerClient/indexerClient.js";
import type {
  BasicDealFragment,
  ComputeUnitBasicFragment,
} from "./indexerClient/queries/deals-query.generated.js";
import { DealClient } from "../client/client.js";
import type { ContractsENV } from "../client/config.js";
import type { BasicPeerFragment } from "./indexerClient/queries/offers-query.generated.js";
import { DealRpcClient } from "./rpcClients/index.js";
import {
  calculateEpoch,
  DEFAULT_ORDER_TYPE,
  DEFAULT_TOKEN_VALUE_ROUNDING,
  FILTER_MULTISELECT_MAX,
  tokenValueToRounded,
} from "./utils.js";
import { serializeEffectorDescription } from "./serializers/logics.js";
import { serializeDealProviderAccessLists } from "../utils/serializers.js";
import {
  FiltersError,
  serializeCapacityCommitmentsFiltersToIndexer,
  serializeDealsFiltersToIndexer,
  serializeOffersFiltersToIndexerType,
  serializeProviderFiltersToIndexer,
  ValidTogetherFiltersError,
} from "./serializers/filters.js";
import {
  serializeCapacityCommitmentShort,
  serializeComputeUnits,
  serializeDealsShort,
  serializeEffectors,
  serializeOfferShort,
  serializePeers,
  serializeProviderBase,
  serializeProviderShort,
} from "./serializers/schemes.js";
import {
  serializeCapacityCommitmentsOrderByToIndexer,
  serializeDealShortOrderByToIndexer,
  serializeOfferShortOrderByToIndexer,
} from "./serializers/orderby.js";
import type { ICapacity } from "../typechain-types/index.js";
import type { CapacityCommitmentBasicFragment } from "./indexerClient/queries/capacity-commitments-query.generated.js";
import { FLTToken } from "./constants.js";

/*
 * @dev Currently this client depends on contract artifacts and on subgraph artifacts.
 * @dev It supports mainnet, testnet by selecting related contractsEnv.
 */
export class DealExplorerClient {
  DEFAULT_PAGE_LIMIT = 100;
  // For MVM we suppose that everything is in USDC.
  //  Used only with filters - if no token selected.
  DEFAULT_FILTER_TOKEN_DECIMALS = 6;

  private _caller: ethers.Provider | ethers.Signer;
  private _indexerClient: IndexerClient;
  private _dealContractsClient: DealClient;
  private _dealRpcClient: DealRpcClient | null;
  private _coreEpochDuration: number | null;
  private _coreInitTimestamp: number | null;
  private _capacityContract: ICapacity | null;
  private _capacityContractAddress: string | null;

  constructor(
    network: ContractsENV,
    chainRpcUrl?: string,
    caller?: ethers.Provider | ethers.Signer,
  ) {
    if (chainRpcUrl) {
      console.warn("Do not use chainRPCUrl, use provider instead.");
      this._caller = new ethers.JsonRpcProvider(chainRpcUrl, undefined, {});
    } else if (caller) {
      this._caller = caller;
    } else {
      throw Error("One of chainRPCUrl or provider should be delclared.");
    }
    this._indexerClient = new IndexerClient(network);
    this._dealContractsClient = new DealClient(this._caller, network);
    // Fields to init() are declared below.
    this._dealRpcClient = null;
    this._coreEpochDuration = null;
    this._coreInitTimestamp = null;
    this._capacityContract = null;
    this._capacityContractAddress = null;
  }

  // Add init other async attributes here.
  // Call before code in every external methods.
  // Currently, it inits:
  // - DealRpcClient multicall3Contract
  // - fetches core constants from indexer.
  async _init() {
    // Check if already inited - early return.
    if (this._dealRpcClient && this._capacityContract) {
      return;
    }
    console.info(`[DealExplorerClient] Init client...`);
    const multicall3Contract = await this._dealContractsClient.getMulticall3();
    const multicall3ContractAddress = await multicall3Contract.getAddress();
    this._dealRpcClient = new DealRpcClient(
      this._caller,
      multicall3ContractAddress,
    );
    this._capacityContract = await this._dealContractsClient.getCapacity();
    this._capacityContractAddress = await this._capacityContract.getAddress();

    // Init constants from indexer.
    // TODO: add cache.
    if (this._coreEpochDuration == null || this._coreInitTimestamp == null) {
      console.info("Fetch contract constants from indexer.");
      const data = await this._indexerClient.getContractConstants();
      if (
        data.graphNetworks.length != 1 ||
        data.graphNetworks[0] == undefined
      ) {
        throw new Error(
          "Assertion: data.graphNetworks.length != 1 || data.graphNetworks[0] == undefined.",
        );
      }
      this._coreInitTimestamp = Number(data.graphNetworks[0].initTimestamp);
      this._coreEpochDuration = Number(data.graphNetworks[0].coreEpochDuration);
    }
  }

  /*
   * @dev Request indexer for common decimals across tokens, thus,
   * @dev  it checks if symbols across are equal, or throw ValidTogetherFiltersError.
   */
  async _getCommonTokenDecimals(
    tokenAddresses: Array<string>,
  ): Promise<number> {
    if (tokenAddresses.length > FILTER_MULTISELECT_MAX) {
      throw new FiltersError("Too many tokens selected per 1 multiselect.");
    }
    const fetched = await this._indexerClient.getTokens({
      filters: { id_in: tokenAddresses },
      limit: FILTER_MULTISELECT_MAX,
      orderBy: "id",
      orderType: DEFAULT_ORDER_TYPE,
    });
    const tokenModels = fetched.tokens;
    if (tokenModels.length === 0 || tokenModels[0] === undefined) {
      return this.DEFAULT_FILTER_TOKEN_DECIMALS;
    }
    const commonDecimals = tokenModels[0].decimals;
    if (
      tokenModels.some((tokenModel) => tokenModel.decimals !== commonDecimals)
    ) {
      throw new ValidTogetherFiltersError(
        "Tokens have different decimals field. It is impossible to filter them together.",
      );
    }
    return commonDecimals;
  }

  /*
   * @dev search: you could perform strict search by `provider address` or `provider name`
   * @dev Note, deprecation:
   */
  async getProviders(
    providersFilters?: ProvidersFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: ProviderShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<ProviderShortListView> {
    await this._init();
    const composedFilters =
      await serializeProviderFiltersToIndexer(providersFilters);
    const data = await this._indexerClient.getProviders({
      filters: composedFilters,
      offset,
      limit,
      orderBy,
      orderType,
    });
    const res = [];
    if (data) {
      for (const provider of data.providers) {
        res.push(serializeProviderShort(provider));
      }
    }
    let total = null;
    if (
      !providersFilters &&
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].providersTotal
    ) {
      total = data.graphNetworks[0].providersTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  async getProvider(providerId: string): Promise<ProviderDetail | null> {
    await this._init();
    const options = {
      id: providerId,
    };
    const data = await this._indexerClient.getProvider(options);
    let res = null;
    if (data && data.provider) {
      const providerFetched = data.provider;
      const providerBase = serializeProviderBase(providerFetched);
      res = {
        ...providerBase,
        peerCount: providerFetched.peerCount,
      };
    }
    return res;
  }

  async getOffersByProvider(
    // TODO: what this status is about?
    byProviderAndStatusFilter: ByProviderAndStatusFilter,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: OfferShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<OfferShortListView> {
    await this._init();
    if (byProviderAndStatusFilter.status) {
      // TODO.
      console.warn("Status filter is not implemented.");
    }
    return await this._getOffersImpl(
      { providerId: byProviderAndStatusFilter.providerId?.toLowerCase() },
      offset,
      limit,
      orderBy,
      orderType,
    );
  }

  async getDealsByProvider(
    byProviderAndStatusFilter: ByProviderAndStatusFilter,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: DealsShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<DealShortListView> {
    await this._init();
    if (byProviderAndStatusFilter.status) {
      // TODO.
      console.warn("Status filter is not implemented.");
    }
    return await this._getDealsImpl(
      { providerId: byProviderAndStatusFilter.providerId?.toLowerCase() },
      offset,
      limit,
      orderBy,
      orderType,
    );
  }

  async _calculateTokenDecimalsForFilters(
    paymentTokens: Array<string> | undefined,
    otherConditions: boolean | undefined,
  ) {
    let tokenDecimals = this.DEFAULT_FILTER_TOKEN_DECIMALS;
    if (paymentTokens) {
      const paymentTokensLowerCase = paymentTokens.map((tokenAddress) => {
        return tokenAddress.toLowerCase();
      });
      if (otherConditions && paymentTokensLowerCase.length > 1) {
        tokenDecimals = await this._getCommonTokenDecimals(
          paymentTokensLowerCase,
        );
      }
    }
    return tokenDecimals;
  }

  async _getOffersImpl(
    offerFilters?: OffersFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: OfferShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<OfferShortListView> {
    const orderByConverted = serializeOfferShortOrderByToIndexer(orderBy);

    const _cond =
      (offerFilters?.minPricePerWorkerEpoch ||
        offerFilters?.maxPricePerWorkerEpoch) !== undefined;
    const commonTokenDecimals = await this._calculateTokenDecimalsForFilters(
      offerFilters?.paymentTokens,
      _cond,
    );

    const filtersConverted = await serializeOffersFiltersToIndexerType(
      offerFilters,
      commonTokenDecimals,
    );
    const data = await this._indexerClient.getOffers({
      filters: filtersConverted,
      offset,
      limit,
      orderBy: orderByConverted,
      orderType,
    });
    const res = [];
    if (data) {
      for (const offer of data.offers) {
        res.push(serializeOfferShort(offer));
      }
    }
    let total = null;
    if (
      !offerFilters &&
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].offersTotal
    ) {
      total = data.graphNetworks[0].offersTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  /*
   * @dev Get offers list for 1 page and specified filters.
   */
  async getOffers(
    offerFilters?: OffersFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: OfferShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<OfferShortListView> {
    await this._init();
    return await this._getOffersImpl(
      offerFilters,
      offset,
      limit,
      orderBy,
      orderType,
    );
  }

  // Return OfferDetail View.
  async getOffer(offerId: string): Promise<OfferDetail | null> {
    const options = {
      id: offerId,
    };
    const data = await this._indexerClient.getOffer(options);
    let res: OfferDetail | null = null;
    if (data && data.offer) {
      res = {
        ...serializeOfferShort(data.offer),
        peers: serializePeers(data.offer.peers as Array<BasicPeerFragment>),
        updatedAt: Number(data.offer.updatedAt),
      };
    }
    return res;
  }

  async _getDealsImpl(
    dealsFilters?: DealsFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: DealsShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<DealShortListView> {
    await this._init();

    const orderByConverted = serializeDealShortOrderByToIndexer(orderBy);

    const _cond =
      (dealsFilters?.minPricePerWorkerEpoch ||
        dealsFilters?.maxPricePerWorkerEpoch) !== undefined;
    const commonTokenDecimals = await this._calculateTokenDecimalsForFilters(
      dealsFilters?.paymentTokens,
      _cond,
    );

    const filtersConverted = await serializeDealsFiltersToIndexer(
      dealsFilters,
      commonTokenDecimals,
    );
    const data = await this._indexerClient.getDeals({
      filters: filtersConverted,
      offset,
      limit,
      orderBy: orderByConverted,
      orderType,
    });
    const res = [];
    if (data) {
      const dealAddresses = data.deals.map((deal) => {
        return deal.id;
      });
      // Use several n feature calls instead of limit * n calls to rpc.
      const dealStatuses: Array<DealStatus> =
        await this._dealRpcClient!.getStatusDealBatch(dealAddresses);
      const freeBalances: Array<bigint | null> =
        await this._dealRpcClient!.getFreeBalanceDealBatch(dealAddresses);

      for (let i = 0; i < data.deals.length; i++) {
        const deal = data.deals[i] as BasicDealFragment;
        res.push(
          serializeDealsShort(deal, {
            dealStatus: dealStatuses[i],
            freeBalance: freeBalances[i],
          }),
        );
      }
    }
    let total = null;
    if (
      !dealsFilters &&
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].dealsTotal
    ) {
      total = data.graphNetworks[0].dealsTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  async getDeals(
    dealFilters?: DealsFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: DealsShortOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<DealShortListView> {
    return await this._getDealsImpl(
      dealFilters,
      offset,
      limit,
      orderBy,
      orderType,
    );
  }

  async getDeal(dealId: string): Promise<DealDetail | null> {
    await this._init();
    const options = {
      id: dealId.toLowerCase(),
    };
    const data = await this._indexerClient.getDeal(options);
    let res: DealDetail | null = null;
    if (data && data.deal) {
      const deal = data.deal;
      const dealStatus = (
        await this._dealRpcClient!.getStatusDealBatch([dealId])
      )[0];
      const freeBalance = (
        await this._dealRpcClient!.getFreeBalanceDealBatch([dealId])
      )[0];
      const effectors = serializeEffectors(deal.effectors);
      const { whitelist, blacklist } = serializeDealProviderAccessLists(
        deal.providersAccessType,
        deal.providersAccessList,
      );
      res = {
        ...serializeDealsShort(deal, { dealStatus, freeBalance }),
        pricePerWorkerEpoch: tokenValueToRounded(
          deal.pricePerWorkerEpoch,
          DEFAULT_TOKEN_VALUE_ROUNDING,
          deal.paymentToken.decimals,
        ),
        maxWorkersPerProvider: deal.maxWorkersPerProvider,
        computeUnits: serializeComputeUnits(
          deal.addedComputeUnits as Array<ComputeUnitBasicFragment>,
        ),
        // Serialize data from indexer into lists.
        whitelist,
        blacklist,
        effectors: effectors,
      };
    }
    return res;
  }

  async getEffectors(
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: EffectorsOrderBy = "id",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<EffectorListView> {
    const data = await this._indexerClient.getEffectors({
      offset,
      limit,
      orderBy,
      orderType,
    });
    let res: Array<Effector> = [];
    if (data) {
      // data.deals.map(deal => { return deal.id })
      res = data.effectors.map((effector) => {
        return {
          cid: effector.id,
          description: serializeEffectorDescription(
            effector.id,
            effector.description,
          ),
        };
      });
    }
    let total = null;
    if (
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].effectorsTotal
    ) {
      total = data.graphNetworks[0].effectorsTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  async getPaymentTokens(
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: PaymentTokenOrderBy = "symbol",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<PaymentTokenListView> {
    const data = await this._indexerClient.getTokens({
      offset,
      limit,
      orderBy,
      orderType,
    });
    let res: Array<PaymentToken> = [];
    if (data) {
      // data.deals.map(deal => { return deal.id })
      res = data.tokens.map((token) => {
        return {
          address: token.id,
          symbol: token.symbol,
          decimals: token.decimals.toString(),
        };
      });
    }
    let total = null;
    if (
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].tokensTotal
    ) {
      total = data.graphNetworks[0].tokensTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  async getCapacityCommitments(
    filters?: CapacityCommitmentsFilters,
    offset: number = 0,
    limit: number = this.DEFAULT_PAGE_LIMIT,
    orderBy: CapacityCommitmentsOrderBy = "createdAt",
    orderType: OrderType = DEFAULT_ORDER_TYPE,
  ): Promise<CapacityCommitmentListView> {
    await this._init();

    const orderBySerialized =
      serializeCapacityCommitmentsOrderByToIndexer(orderBy);

    let currentEpoch = undefined;
    if (filters?.onlyActive) {
      if (this._coreInitTimestamp == null || this._coreEpochDuration == null) {
        throw new Error("Assertion: Class object was not inited correctly.");
      }
      currentEpoch = calculateEpoch(
        Date.now() / 1000,
        this._coreInitTimestamp,
        this._coreEpochDuration,
      ).toString();
    }

    const filtersSerialized = serializeCapacityCommitmentsFiltersToIndexer(
      filters,
      currentEpoch,
    );
    const data = await this._indexerClient.getCapacityCommitments({
      filters: filtersSerialized,
      offset,
      limit,
      orderBy: orderBySerialized,
      orderType,
    });
    const res: Array<CapacityCommitmentShort> = [];

    if (data) {
      if (
        data.graphNetworks.length != 1 ||
        data.graphNetworks[0] == undefined
      ) {
        throw new Error(
          "Assertion: data.graphNetworks.length != 1 || data.graphNetworks[0] == undefined.",
        );
      }

      const capacityComitmentIds: Array<string> = data.capacityCommitments.map(
        (capacityCommitment) => {
          return capacityCommitment.id;
        },
      );
      const capacityCommitmentsStatuses: Array<CapacityCommitmentStatus> =
        await this._dealRpcClient!.getStatusCapacityCommitmentsBatch(
          this._capacityContractAddress!,
          capacityComitmentIds,
        );

      for (let i = 0; i < data.capacityCommitments.length; i++) {
        const capacityCommitment = data.capacityCommitments[
          i
        ] as CapacityCommitmentBasicFragment;

        res.push(
          serializeCapacityCommitmentShort(
            capacityCommitment,
            capacityCommitmentsStatuses[i] ?? "undefined",
            this._coreInitTimestamp!,
            this._coreEpochDuration!,
          ),
        );
      }
    }
    // TODO: generalize code below.
    let total = null;
    if (
      data.graphNetworks.length == 1 &&
      data.graphNetworks[0] &&
      data.graphNetworks[0].capacityCommitmentsTotal
    ) {
      total = data.graphNetworks[0].capacityCommitmentsTotal as string;
    }
    return {
      data: res,
      total,
    };
  }

  async getCapacityCommitment(
    capacityCommitmentId: string,
  ): Promise<CapacityCommitmentDetail | null> {
    await this._init();
    const options = {
      id: capacityCommitmentId,
    };
    const data = await this._indexerClient.getCapacityCommitment(options);
    if (!data || !data.capacityCommitment) {
      return null;
    }

    const capacityCommitment = data.capacityCommitment;
    const capacityCommitmentRpcDetails =
      await this._dealRpcClient!.getCapacityCommitmentDetails(
        this._capacityContractAddress!,
        capacityCommitment.id,
      );

    return {
      ...serializeCapacityCommitmentShort(
        capacityCommitment,
        capacityCommitmentRpcDetails.status,
        this._coreInitTimestamp!,
        this._coreEpochDuration!,
      ),
      totalCollateral: tokenValueToRounded(capacityCommitment.totalCollateral),
      collateralToken: FLTToken,
      rewardDelegatorRate: capacityCommitment.rewardDelegatorRate,
      unlockedRewards: capacityCommitmentRpcDetails.unlockedRewards
        ? tokenValueToRounded(capacityCommitmentRpcDetails.unlockedRewards)
        : "0",
      totalRewards: capacityCommitmentRpcDetails.totalRewards
        ? tokenValueToRounded(capacityCommitmentRpcDetails.totalRewards)
        : "0",
    };
  }
}

/*
 * @deprecated: rename to DealExplorerClient
 */
export class DealIndexerClient extends DealExplorerClient {}
