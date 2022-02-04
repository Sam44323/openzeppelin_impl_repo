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
      .deploy(10 ** 5);

    await ErcToken.transfer(receiver.address, 100);
  });
  it("Test for balance of receiver", async function () {
    const balance: number = await ErcToken.balanceOf(receiver.address);
    expect(balance).to.equal(100);
  });
});
