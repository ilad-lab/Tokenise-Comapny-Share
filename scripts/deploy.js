const { expect } = require("chai");
const hre = require("hardhat");

async function main() {

  const Token = await hre.ethers.getContractFactory("ProjectTokenName");
  const token = await Token.deploy();

  await token.deployed();

  expect(hre.ethers.utils.parseEther("1000000000")).to.equal(await token.totalSupply())
  console.log(
    `Deployed at ${token.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
