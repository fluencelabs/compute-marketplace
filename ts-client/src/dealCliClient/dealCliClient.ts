import { IndexerClient } from "./indexerClient/indexerClient.js";
import type { ContractsENV } from "../client/config.js";
import type { DealByProvider, OfferDetail } from "./types/schemes.js";
import { serializeOfferDetail } from "./serializers/schemes.js";
import type { SerializationSettings } from "../utils/serializers.js";


/*
 * @dev This client represents endpoints to access desirable indexer data in REST
 * @dev  manner from POV of Fluence CLI.
 * @dev Currently, it uses only data from indexer (subgraph) only.
 * @dev It supports mainnet, testnet by selecting related contractsEnv.
 * @dev This client is created in the following hypothesis:
 * @dev  - not more than 1000 Compute Units per Peer exist.
 * @dev  - not more than 1000 Peers per Offer possible.
 * @dev Otherwise there should be additional pagination through child fields of some models
 */
export class DealCliClient {
  public indexerClient: IndexerClient;

  // @param indexerUrl: is optional - you force to replace indexer
  //  URL setting (by default it uses URL from network config mapping).
  // @param serializationSettings: you can control how many fixed values after
  //  floating point you want client to display.
  private _serializationSettings: SerializationSettings;
  constructor(
    network: ContractsENV,
    indexerUrl?: string,
    serializationSettings?: SerializationSettings,
  ) {
    this.indexerClient = new IndexerClient(network, indexerUrl);
    if (serializationSettings) {
      this._serializationSettings = serializationSettings;
    } else {
      this._serializationSettings = {
          parseNativeTokenToFixedDefault: 18,
          parseTokenToFixedDefault: 3,
        }
    }
  }

  // Get Offer detail, i.e. with its peers and compute units.
  // Note, that it can not return more than 1000 peers per offer,
  //  and can not return more than 1000 compute units per each peer.
  async getOffer(offerId: string): Promise<OfferDetail | null> {
    const options = {
      id: offerId,
    };
    const data = await this.indexerClient.getOffer(options);
    if (data.offer) {
      return serializeOfferDetail(data.offer, this._serializationSettings)
    }
    return null
  }

  async getDealsByProvider(providerId: string): Promise<Array<DealByProvider>> {
    const data = await this.indexerClient.getDeals(
      {
        addedComputeUnits_: { provider: providerId.toLowerCase() }
      }
    )
    return data.deals?.map((deal) => {
      return {
        id: deal.id,
      }
    }) || []
  }
}
