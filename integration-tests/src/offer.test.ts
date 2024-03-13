import { assert, beforeAll, describe, expect, test } from "vitest";
import { registerMarketOffer } from "./helpers.js";
import { getPeerFixture, getUnitIdFixture, randomCID } from "./fixtures.js";
import { CapacityConstantType, DEFAULT_CONFIRMATIONS } from "./constants.js";
import { checkEvents } from "./confirmations.js";
import { ethers, JsonRpcProvider, JsonRpcSigner } from "ethers";
import {
  type ContractsENV,
  DealClient,
  type ICapacity,
  type ICore,
  type IDealFactory,
  type IERC20,
  type IMarket,
} from "@fluencelabs/deal-ts-clients";
import { config } from "dotenv";

config({ path: [".env", ".env.local"] });

const TEST_NETWORK: ContractsENV = "local";
const TEST_RPC_URL = process.env.RPC_URL;
const DEFAULT_TEST_TIMEOUT = 180000;

let provider: JsonRpcProvider;
let signer: JsonRpcSigner;
let contractsClient: DealClient;
let marketContract: IMarket;
let capacityContract: ICapacity;
let dealFactoryContract: IDealFactory;
let coreContract: ICore;
let paymentToken: IERC20;
let paymentTokenAddress: string;
let signerAddress: string;

describe(
  "Modify Offer",
  () => {
    beforeAll(async () => {
      provider = new ethers.JsonRpcProvider(TEST_RPC_URL);
      signer = await provider.getSigner();
      contractsClient = new DealClient(signer, TEST_NETWORK);
      marketContract = contractsClient.getMarket();
      capacityContract = contractsClient.getCapacity();
      dealFactoryContract = contractsClient.getDealFactory();
      coreContract = contractsClient.getCore();
      paymentToken = contractsClient.getUSDC();
      paymentTokenAddress = await paymentToken.getAddress();
      signerAddress = await signer.getAddress();

      await capacityContract.setConstant(CapacityConstantType.MinDuration, 0);
    });

    test("Edit compute peers", async () => {
      const registeredOffer = await registerMarketOffer(
        marketContract,
        signerAddress,
        paymentTokenAddress,
      );

      console.log("Adding new compute peer...");
      const newComputePeerFixture = getPeerFixture(signerAddress, 1);

      const addComputePeersTx = await marketContract.addComputePeers(
        registeredOffer.offerId,
        [newComputePeerFixture],
      );
      await addComputePeersTx.wait(DEFAULT_CONFIRMATIONS);

      const peerEvents = await checkEvents(
        marketContract,
        marketContract.filters.PeerCreated,
        1,
        addComputePeersTx,
      );
      const [peerCreatedEvent] = peerEvents;
      expect(peerCreatedEvent?.args).toEqual([
        registeredOffer.offerId,
        newComputePeerFixture.peerId,
        signerAddress,
      ]);

      console.log(registeredOffer.offerId);

      const offerAfterAddPeer = await marketContract.getOffer(
        registeredOffer.offerId,
      );
      const peerAfterCreation = await marketContract.getComputePeer(
        newComputePeerFixture.peerId,
      );
      expect(offerAfterAddPeer.peerCount).toEqual(2n);
      expect(peerAfterCreation.offerId).toEqual(registeredOffer.offerId);

      console.log("Adding new compute units to created compute peer...");

      const unitIdFixtures = [
        getUnitIdFixture(),
        getUnitIdFixture(),
      ] satisfies [string, string];

      const addComputeUnitsTx = await marketContract.addComputeUnits(
        newComputePeerFixture.peerId,
        unitIdFixtures,
      );

      await addComputeUnitsTx.wait(DEFAULT_CONFIRMATIONS);

      const peerUnitEvents = await checkEvents(
        marketContract,
        marketContract.filters.ComputeUnitCreated,
        unitIdFixtures.length,
        addComputeUnitsTx,
      );

      expect(peerUnitEvents.map((u) => u.args.unitId)).toEqual(
        expect.arrayContaining(unitIdFixtures),
      );

      const newUnits = await marketContract.getComputeUnitIds(
        newComputePeerFixture.peerId,
      );

      const allUnitIds = [
        ...unitIdFixtures,
        ...newComputePeerFixture.unitIds,
      ] satisfies [string, string, ...string[]];

      expect(newUnits).toEqual(expect.arrayContaining(allUnitIds));

      console.log("Removing compute units from created compute peer...");

      const [RemovedCU, ...restCUs] = allUnitIds;
      const removeComputeUnitTx =
        await marketContract.removeComputeUnit(RemovedCU);
      await removeComputeUnitTx.wait(DEFAULT_CONFIRMATIONS);

      const removeCUEvents = await checkEvents(
        marketContract,
        marketContract.filters.ComputeUnitRemoved,
        1,
        removeComputeUnitTx,
      );

      expect(removeCUEvents.map((e) => e.args)).toEqual([
        [newComputePeerFixture.peerId, RemovedCU],
      ]);

      const activeUnits = await marketContract.getComputeUnitIds(
        newComputePeerFixture.peerId,
      );
      expect(activeUnits).toEqual(expect.arrayContaining(restCUs));

      console.log("Removing compute peer...");

      // Remove all CUs from peer to delete it
      for (const restCu of restCUs) {
        await (
          await marketContract.removeComputeUnit(restCu)
        ).wait(DEFAULT_CONFIRMATIONS);
      }

      const peer = await marketContract.getComputePeer(
        newComputePeerFixture.peerId,
      );

      expect(peer.unitCount).toEqual(0n);

      const removeComputePeerTx = await marketContract.removeComputePeer(
        newComputePeerFixture.peerId,
      );
      await removeComputePeerTx.wait(DEFAULT_CONFIRMATIONS);

      const removePeerEvents = await checkEvents(
        marketContract,
        marketContract.filters.PeerRemoved,
        1,
        removeComputePeerTx,
      );
      expect(removePeerEvents.map((e) => e.args)).toEqual([
        [registeredOffer.offerId, newComputePeerFixture.peerId],
      ]);

      const offerAfterRemove = await marketContract.getOffer(
        registeredOffer.offerId,
      );

      expect(offerAfterRemove.peerCount).toEqual(1n);
    });

    test("Edit effectors", async () => {
      const registeredOffer = await registerMarketOffer(
        marketContract,
        signerAddress,
        paymentTokenAddress,
      );

      const newEffectors = [
        {
          id: randomCID(),
          description: "description",
          metadata: randomCID(),
        },
        {
          id: randomCID(),
          description: "description",
          metadata: randomCID(),
        },
      ] as const;

      console.log("Setting effectors info...");

      let block = await marketContract.runner?.provider?.getBlock("latest");
      assert(block, "Block number is not defined");

      for (const { id, metadata, description } of newEffectors) {
        await (
          await marketContract.setEffectorInfo(id, description, metadata)
        ).wait(DEFAULT_CONFIRMATIONS);
      }

      const addEffectorInfoEvents = await checkEvents(
        marketContract,
        marketContract.filters.EffectorInfoSet,
        newEffectors.length,
        block.number,
      );

      expect(
        addEffectorInfoEvents.map((e) => [e.args.description, e.args.metadata]),
      ).toEqual(
        expect.arrayContaining(
          newEffectors.map(({ metadata, description }) => [
            description,
            [metadata.prefixes, metadata.hash],
          ]),
        ),
      );

      console.log("Adding effector...");

      const addEffectorTx = await marketContract.addEffector(
        registeredOffer.offerId,
        newEffectors.map((e) => e.id),
      );

      await addEffectorTx.wait(DEFAULT_CONFIRMATIONS);

      const addEffectorEvents = await checkEvents(
        marketContract,
        marketContract.filters.EffectorAdded,
        newEffectors.length,
        addEffectorTx,
      );

      expect(addEffectorEvents.map((e) => e.args)).toEqual(
        expect.arrayContaining(
          newEffectors.map((e) => [
            registeredOffer.offerId,
            [e.id.prefixes, e.id.hash],
          ]),
        ),
      );

      console.log("Removing effector...");

      const removeEffectorTx = await marketContract.removeEffector(
        registeredOffer.offerId,
        newEffectors.map((e) => e.id),
      );

      await removeEffectorTx.wait(DEFAULT_CONFIRMATIONS);

      const removeEffectorEvents = await checkEvents(
        marketContract,
        marketContract.filters.EffectorRemoved,
        newEffectors.length,
        removeEffectorTx,
      );
      expect(removeEffectorEvents.map((e) => e.args)).toEqual(
        expect.arrayContaining(
          newEffectors.map((e) => [
            registeredOffer.offerId,
            [e.id.prefixes, e.id.hash],
          ]),
        ),
      );

      console.log("Deleting effectors info...");
      block = await marketContract.runner?.provider?.getBlock("latest");
      assert(block, "Block number is not defined");

      for (const { id } of newEffectors) {
        await (
          await marketContract.removeEffectorInfo(id)
        ).wait(DEFAULT_CONFIRMATIONS);
      }

      await checkEvents(
        marketContract,
        marketContract.filters.EffectorInfoRemoved,
        newEffectors.length,
        block.number,
      );
    });

    test("Edit token and reward", async () => {
      const registeredOffer = await registerMarketOffer(
        marketContract,
        signerAddress,
        paymentTokenAddress,
      );

      console.log("Changing payment token...");

      // TODO: deploy mock token instead
      const newTokenAddress = await coreContract.getAddress();
      const changePaymentTokenTx = await marketContract.changePaymentToken(
        registeredOffer.offerId,
        newTokenAddress,
      );

      await changePaymentTokenTx.wait(DEFAULT_CONFIRMATIONS);

      const tokenUpdateEvents = await checkEvents(
        marketContract,
        marketContract.filters.PaymentTokenUpdated,
        1,
        changePaymentTokenTx,
      );

      expect(tokenUpdateEvents.map((e) => e.args)).toEqual([
        [registeredOffer.offerId, newTokenAddress],
      ]);

      const updatedOffer = await marketContract.getOffer(
        registeredOffer.offerId,
      );
      expect(updatedOffer.paymentToken).toEqual(newTokenAddress);

      console.log("Changing min price per worker epoch...");

      const newMinPrice = ethers.parseEther("0.1");
      const changeMinPricePerWorkerEpochTx =
        await marketContract.changeMinPricePerWorkerEpoch(
          registeredOffer.offerId,
          newMinPrice,
        );

      await changeMinPricePerWorkerEpochTx.wait(DEFAULT_CONFIRMATIONS);

      const minPriceUpdateEvents = await checkEvents(
        marketContract,
        marketContract.filters.MinPricePerEpochUpdated,
        1,
        changeMinPricePerWorkerEpochTx,
      );

      expect(minPriceUpdateEvents.map((e) => e.args)).toEqual([
        [registeredOffer.offerId, newMinPrice],
      ]);

      const updatedOfferByChangingMinPrice = await marketContract.getOffer(
        registeredOffer.offerId,
      );

      expect(updatedOfferByChangingMinPrice.minPricePerWorkerEpoch).toEqual(
        newMinPrice,
      );
    });
  },
  DEFAULT_TEST_TIMEOUT,
);
