// Seralizers for order by fields: b/w scheme and indexer.
// TODO: rename.
import type {
  CapacityCommitmentsOrderBy,
  DealsShortOrderBy,
  OfferShortOrderBy
} from "../types/filters.js";
import type {
  CapacityCommitment_OrderBy,
  Deal_OrderBy,
  Offer_OrderBy
} from "../indexerClient/generated.types.js";

export function convertOfferShortOrderByToIndexerType(v: OfferShortOrderBy): Offer_OrderBy {
  if (v == "pricePerWorkerEpoch") {
    return "pricePerEpoch" as Offer_OrderBy;
  }
  return v as Offer_OrderBy;
}

export function convertDealShortOrderByToIndexerType(v: DealsShortOrderBy): Deal_OrderBy {
  // Currently no needs in convert because only createdAt.
  return v as Deal_OrderBy;
}

export function serializeCapacityCommitmentsOrderByToIndexerType(v: CapacityCommitmentsOrderBy): CapacityCommitment_OrderBy {
  console.log(v)
  // TODO: implement
  return "startEpoch";
}