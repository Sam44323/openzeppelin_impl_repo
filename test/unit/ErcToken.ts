import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Checking the transfer of tokens", function () {
  let ErcToken: Contract, owner: SignerWithAddress, receiver: SignerWithAddress;
  beforeEach(async () => {
    [owner, receiver] = await ethers.getSigners();
    ErcToken = await (await ethers.getContractFactory("ErcToken"))
      .connect(owner)
      .deploy();

    await ErcToken.transfer(receiver.address, 100);
  });
  it("Test for balance of the owner", async () => {
    const ownerBalance: number = await ErcToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(99900);
  });

  it("Test for balance of receiver", async () => {
    const balance: number = await ErcToken.balanceOf(receiver.address);
    expect(balance).to.equal(100);
  });
});
