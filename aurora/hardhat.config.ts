import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      viaIR: false,
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://endpoints.omniatech.io/v1/aurora/testnet/public",
        blockNumber: 115897705,
      },
      accounts: {
        passphrase:
          "test test test test claim trade stairs crew inspire obey veteran budget",
      },
    },
    localhost: {
      url: "http://localhost:8545",
    },
    aurora: {
      url: "https://endpoints.omniatech.io/v1/aurora/testnet/public",
      accounts: [
        process.env.AURORA_PRIVATE_KEY ??
          "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
  },
};

export default config;
