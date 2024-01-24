import {CapacityCommitmentStatus, ZERO_BIG_INT} from "../models";
import {CapacityCommitment, Peer} from "../../generated/schema";
import {
  CollateralDeposited, CommitmentActivated,
  CommitmentCreated, CommitmentSnapshotCommitted
} from "../../generated/Capacity/Capacity";

export function handleCommitmentCreated(event: CommitmentCreated): void {
  let commitment = new CapacityCommitment(event.params.commitmentId.toHex());

  commitment.peer = event.params.peerId.toHex()
  commitment.CCStatus = CapacityCommitmentStatus.WaitDelegation
  commitment.collateralPerUnit = event.params.fltCCCollateralPerUnit
  commitment.duration = event.params.duration
  commitment.rewardDelegatorRate = event.params.rewardDelegationRate.toI32()
  commitment.delegator = event.params.delegator.toHex()
  commitment.unitCount = 0
  commitment.startEpoch = ZERO_BIG_INT
  commitment.endEpoch = ZERO_BIG_INT
  commitment.totalCUFailCount = 0
  commitment.failedEpoch = ZERO_BIG_INT
  commitment.exitedUnitCount = 0
  commitment.nextCCFailedEpoch = ZERO_BIG_INT
  commitment.save()

  let peer = Peer.load(event.params.peerId.toHex()) as Peer;
  peer.currentCapacityCommitment = commitment.id
  peer.save()
}

// It is supposed that collateral deposited at the same time as commitment activated
//  (the same tx).
export function handleCommitmentActivated(event: CommitmentActivated): void {
  let commitment = CapacityCommitment.load(event.params.commitmentId.toHex()) as CapacityCommitment;
  // TODO: resolve when on chain resolved problem of waiting for collateral status.
  // commitment.CCStatus = CapacityCommitmentStatus.Active
  commitment.startEpoch = event.params.startEpoch
  commitment.endEpoch = event.params.endEpoch
  commitment.unitCount = event.params.unitIds.length
  commitment.nextCCFailedEpoch = event.params.nextCCFailedEpoch
  commitment.save()

  let peer = Peer.load(event.params.peerId.toHex()) as Peer;
  peer.currentCCCollateralDepositedAt = event.params.startEpoch;
  peer.currentCCEndEpoch = event.params.endEpoch;
  peer.currentCCNextCCFailedEpoch = event.params.nextCCFailedEpoch;
  peer.save();
}

// @deprecated. Currently, no use for the event as it is used in handleCommitmentActivated.
export function handleCollateralDeposited(event: CollateralDeposited): void {}

export function handleCommitmentSnapshotCommitted(event: CommitmentSnapshotCommitted): void {
  let peer = Peer.load(event.params.peerId.toHex()) as Peer;
  const nextCCFailedEpoch = event.params.nextCCFailedEpoch;
  peer.currentCCNextCCFailedEpoch = nextCCFailedEpoch
  peer.save();

  if (peer.currentCapacityCommitment == null) {
    throw new Error("Assertion: Peer has no current capacity commitment.");
  }
  let cc = CapacityCommitment.load(peer.currentCapacityCommitment!) as CapacityCommitment;
  cc.nextCCFailedEpoch = nextCCFailedEpoch;
  cc.save();
}

// TODO: commitment expired and other events.

// TODO: catch nextCCFailedEpoch change in CommitmentSnapshotCommitted...
