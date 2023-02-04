const ethers = require('ethers');
const { expect } = require("chai");

describe("Token", function () {
  let token;

  before(async () => {
    [
      adminWallet,
      stakeholder1,
      stakeholder2
    ] = await hre.ethers.getSigners()
  })

  it("Should deploy", async function () {

    const Token = await hre.ethers.getContractFactory("ProjectTokenName");
    token = await Token.deploy();

    await token.deployed();
  });

  it("should mint some tokens for stakeholder1", async () => {

    const _amountToTransfer = ethers.utils.parseEther('1')

    expect(await token.balanceOf(stakeholder1.address)).to.be.equal(0)
    await token.mint(stakeholder1.address, _amountToTransfer)

    expect(await token.balanceOf(stakeholder1.address)).to.be.equal(_amountToTransfer)
  })
});
