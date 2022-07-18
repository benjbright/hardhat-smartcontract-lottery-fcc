const { developmentChains } = require("../helper-hardhat.config")
const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

const BASE_FEE = ethers.utils.parseEther("0.25")
// 0.25 is the premium, it costs 0.25 LINK per request

const GAS_PRICE_LINK = 1e9
// Calculated value based on the gas price of the chain
// Chainlink nodes pay gas fees to provide randomness and execution
// Price of requests changes based on the price of gas

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const args = [BASE_FEE, GAS_PRICE_LINK]
  const chainId = network.config.chainId
  // If we are on a local development network, we need to deploy mocks!
  // NOTE - 15:03 actually use network.name?

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...")
    // deploy a mock vrfcoordinator...
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: args,
    })
    log("Mocks Deployed!")
    log("---------------")
  }
}

module.exports.tags = ["all", "mocks"]
