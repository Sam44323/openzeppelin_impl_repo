import deployErcToken from "./TokenDeploy";

async function main() {
  await deployErcToken();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
