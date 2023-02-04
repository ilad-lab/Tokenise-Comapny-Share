require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    polygon: {
      url: `https://rpc.ankr.com/polygon`,
      accounts: [""], //TODO put deployer private key
      network_id: 137,
      chainId: 137,
      confirmations: 2,
      skipDryRun: false,
      // gasPrice: 200000000000,
      // gasPrice: 80000000000,
      networkCheckTimeout: 999999,
    },
    bsc: {
      accounts: [""],
      url: `https://bsc-dataseed1.binance.org`,
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: false,
      // gasPrice: 8000000000,
    },
  },
};

task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})