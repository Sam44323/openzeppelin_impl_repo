import { ethers } from "hardhat";

const deployErcToken = async () => {
  try {
    const Token = await ethers.getContractFactory("ErcToken");
    const token = await Token.deploy();

    await token.deployed();

    console.log("Token address:", token.address);
  } catch (err: any) {
    console.log("Error message: ", err.message);
  }
};

export default deployErcToken;
