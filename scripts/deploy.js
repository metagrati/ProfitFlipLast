const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const Contract = await ethers.getContractFactory("PancakePredictionV2");
  
  // Replace below with the required constructor arguments.
  const contract = await Contract.deploy(
    "0xe7656e23fE8077D438aEfbec2fAbDf2D8e070C4f",
    "0x2c993A957d3c531e1812ba6EC5120AeD671c1C62",
    "0x2c993A957d3c531e1812ba6EC5120AeD671c1C62",
    180,
    30,
    ethers.parseEther("0.0001"),
    240,
    200
  );

  await contract.waitForDeployment();

  console.log("Contract deployed at:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
