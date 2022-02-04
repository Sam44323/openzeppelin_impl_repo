import { ethers } from "hardhat";

const deployErcToken = async () => {
  try {
    const Token = await ethers.getContractFactory("ErcToken");
    const token = await Token.deploy(10 ** 5);

    await token.deployed();

    console.log("Token address:", token.address);
  } catch (err: any) {
    console.log("Error message: ", err.message);
  }
};

export default deployErcToken;
