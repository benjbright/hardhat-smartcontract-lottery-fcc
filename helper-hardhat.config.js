const { ethers } = require("hardhat")

const networkConfig = {
  4: {
    name: "rinkeby",
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
    // From the Chainlink docs - contract addresses VRF Coordinator
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    // From Chainlink docs - 30 gwei Key Hash
    subscriptionId: "8816",
    callbackGasLimit: "500000", // 500,000 gas set high limit
    interval: "30",
  },
  31337: {
    name: "localhost",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    // 30 gwei key hash - but can use anything?
    callbackGasLimit: "500000", // 500,000 gas
    interval: "30",
  },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
  networkConfig,
  developmentChains,
}
