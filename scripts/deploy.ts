import { deployErcToken } from "./contracts/TokenDeploy";
import { deployNftToken } from "./contracts/NftDeploy";

async function main() {
  await deployErcToken();
  await deployNftToken();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
