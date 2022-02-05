import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Testing the NFT Token", () => {
  let NftToken: Contract,
    owner: SignerWithAddress,
    recipient: SignerWithAddress;

  beforeEach(async () => {
    [owner, recipient] = await ethers.getSigners();
    NftToken = await (await ethers.getContractFactory("NftToken"))
      .connect(owner)
      .deploy();
  });

  it("Checking the owner of the NFT_contract", async () => {
    expect(await NftToken.owner()).to.equal(owner.address);
  });

  it("Only admin can mint a token", async () => {
    try {
      await NftToken.connect(recipient.address).mint(
        recipient.address,
        "https://jsonplaceholder.typicode.com/todos/1"
      );
    } catch (err: any) {
      // eslint-disable-next-line no-unused-expressions
      expect(err).not.to.be.empty;
    }
  });

  it("Testing the token id increment", async () => {
    for (let i of [1, 2, 3]) {
      await NftToken.mint(
        recipient.address,
        "https://jsonplaceholder.typicode.com/todos/1"
      );
    }

    const tokenId = await NftToken.getTokenIdValue();

    console.log("TokenId: ", tokenId.data);

    expect(tokenId).to.equal(3);
  });
});
