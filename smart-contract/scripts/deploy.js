const { ethers } = require("hardhat");

async function main() {
  const TwitterDapp = await ethers.getContractFactory("TwitterDapp");
  const twitterDapp = await TwitterDapp.deploy();
  await twitterDapp.waitForDeployment();
  const address = await twitterDapp.getAddress();
  console.log("Contract deployed to address: ", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
