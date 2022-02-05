import deployErcToken from "./contracts/TokenDeploy";

async function main() {
  await deployErcToken();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
