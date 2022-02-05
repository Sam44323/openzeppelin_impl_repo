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

  it("Testing the token id increment", async () => {
    await NftToken.mint(
      recipient.address,
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const tokenId = await NftToken.getTokenIdValue();

    console.log("TokenId: ", tokenId.data);

    expect(tokenId).to.equal(1);
  });
});
