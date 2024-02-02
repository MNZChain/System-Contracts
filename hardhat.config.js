require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const { ACCOUNT_PRIVATE_KEY, BSCSCAN_API_KEY, ETHERSCAN_API_KEY } = process.env;


module.exports = {
  solidity: {
    compilers: [
      
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      }
      /*{
        version: "0.6.12", // Second compiler version
      },*/
      // Add more compiler versions as needed
    ],
  },
  
  defaultNetwork: "mainnetz",
  networks: {
    hardhat: {},
    mainnetz: {
      url: "https://mainnet-rpc.mainnetz.io",
      chainId: 2016,
      gasPrice: 10000000000,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
   
  },
  etherscan: {
    //apiKey: ETHERSCAN_API_KEY,
    apiKey: BSCSCAN_API_KEY,
  },
  optimizer: {
    enabled: true,
    runs: 200,
  },
};
