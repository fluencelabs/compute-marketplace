import { createOrLoadGraphNetwork } from "../models";
import {
  Initialized,
  WhitelistAccessGranted,
  WhitelistAccessRevoked,
} from "../../generated/Core/Core";
import {
  getCapacityMaxFailedRatio,
  getEpochDuration,
  getInitTimestamp,
  getMinRequiredProofsPerEpoch,
  getPrecision,
} from "../contracts";
import { Provider } from "../../generated/schema";

export function handleInitialized(event: Initialized): void {
  let graphNetwork = createOrLoadGraphNetwork();
  graphNetwork.coreEpochDuration = getEpochDuration(event.address);
  graphNetwork.coreContractAddress = event.address.toHexString();
  graphNetwork.initTimestamp = getInitTimestamp(event.address);
  graphNetwork.capacityMaxFailedRatio = getCapacityMaxFailedRatio(
    event.address,
  ).toI32();
  graphNetwork.corePrecision = getPrecision(event.address).toI32();
  graphNetwork.minRequiredProofsPerEpoch = getMinRequiredProofsPerEpoch(
    event.address,
  ).toI32();

  graphNetwork.save();
}

export function handleWhitelistAccessGranted(
  event: WhitelistAccessGranted,
): void {
  let provider = Provider.load(event.params.account.toHexString()) as Provider;
  provider.approved = true;
  provider.save();
}

export function handleWhitelistAccessRevoked(
  event: WhitelistAccessRevoked,
): void {
  let provider = Provider.load(event.params.account.toHexString()) as Provider;
  provider.approved = false;
  provider.save();
}
