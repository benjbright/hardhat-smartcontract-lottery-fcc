const { developmentChains } = require("../../helper-hardhat.config")

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Raffle Unit Tests", async function () {})
