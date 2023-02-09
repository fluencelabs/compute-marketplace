import { expect } from "chai";
import { ethers, getUnnamedAccounts } from "hardhat";
import { Core, Deal, IERC20 } from "../../typechain-types";
import { setTimeNextTime, setupTestEnv } from "../../utils/tests";
import { BigNumber } from "ethers";

describe("ProviderManager", () => {
  let userAccount: string = "";
  let deal: Deal;
  let core: Core;
  let usdToken: IERC20;
  let fltToken: IERC20;

  let patId: string = "";

  before(async () => {
    const accounts = await getUnnamedAccounts();
    userAccount = accounts[0];

    const config = await setupTestEnv(
      userAccount,
      ethers.utils.parseEther("1"),
      ethers.utils.parseEther("1"),
      BigNumber.from(1),
      BigNumber.from(1),
      BigNumber.from(1)
    );
    deal = config.deal;
    usdToken = config.usdToken;
    fltToken = config.fltToken;
    core = config.core;
  });

  it("createProviderToken", async () => {
    const requiredStake = await deal.requiredStake();

    await (await fltToken.approve(deal.address, requiredStake)).wait();
    const tx = await deal.createProviderToken(
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes("salt"))
    );

    const eventTopic = deal.interface.getEventTopic("AddProviderToken");
    const log = (await tx.wait()).logs.find(
      ({ topics }: any) => topics[0] === eventTopic
    );

    const args = deal.interface.parseLog(log!).args;

    const owner: string = args["owner"];
    patId = args["id"];

    expect(patId).not.to.be.undefined;

    expect(owner).to.be.equal(await deal.getPATOwner(patId));
    expect(owner).to.be.equal(userAccount);
  });

  it("getRewards", async () => {
    const value = ethers.utils.parseEther("100");

    const price = await deal.pricePerEpoch();

    await (await usdToken.approve(deal.address, value)).wait();
    await (await deal.depositToPaymentBalance(value)).wait();

    const balance = await deal.getPaymentBalance();

    const block = await ethers.provider.getBlock("latest");

    await setTimeNextTime(block.timestamp + 120 * 2); //TODO: change to epoches

    expect(await deal.getPaymentBalance()).to.be.equal(
      balance.sub(price.mul(2))
    );
  });

  it("removeProviderToken", async () => {
    const removeTokenTx = await deal.removeProviderToken(patId);

    const removeEventTopic = deal.interface.getEventTopic(
      "RemoveProviderToken"
    );
    const logRemoveTopic = (await removeTokenTx.wait()).logs.find(
      ({ topics }: any) => topics[0] === removeEventTopic
    );

    expect(deal.interface.parseLog(logRemoveTopic!).args["id"]).to.be.equal(
      patId
    );
  });

  it("withdraw", async () => {
    const balanceBefore = await fltToken.balanceOf(userAccount);

    const timeout = await core.withdrawTimeout();
    const block = await ethers.provider.getBlock("latest");
    const requiredStake = await deal.requiredStake();

    await setTimeNextTime(block.timestamp + timeout.toNumber());

    const withdrawTx = await deal.withdraw(fltToken.address);
    await withdrawTx.wait();

    const balanceAfter = await fltToken.balanceOf(userAccount);

    expect(balanceAfter).to.be.eq(balanceBefore.add(requiredStake));
  });
});
