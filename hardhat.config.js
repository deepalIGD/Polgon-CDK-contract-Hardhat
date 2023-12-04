require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    // Define a custom network with a private key
    sepolia: {
      url: `https://sepolia.infura.io/v3/5b7d545a6ebb46078acc75aa8a6d9efd`, // Replace with your Infura API key
      accounts: ['cc692e20a2a7fcf42d2ceaf408906dec2bbb538a7cb8b7d8e64f598c78c53359'],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.5.12",
      },
      {
        version: "0.5.16",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000000,
      },
    },
  }
};
