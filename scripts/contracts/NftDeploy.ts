import { ethers } from "hardhat";

export const deployNftToken = async () => {
  try {
    const NftToken = await ethers.getContractFactory("NftToken");

    const token = await NftToken.deploy();

    console.log("NftToken address:", token.address);
  } catch (err: any) {
    console.log("Error message: ", err.message);
  }
};

deployNftToken();
