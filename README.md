# hardhat-smartcontract-lottery-fcc

FreeCodeCamp blockchain course - lottery project

## Notes and timestamps

13:54 Introduction to events video

- EVM can emit logs
- EVM writes to a log - can then read these logs
- Events allow you to print to the logging structure
- Smart contracts can't access logs
- `indexed` parameters = topics
- much easier to search for and query
- `emit` an event

14:03 Chainlink VRF

14:14 Hardhat shorthand

- `yarn global add hardhat-shorthand`
- e.g. can now run `hh compile` instead of `yarn hardhat compile`
- NOTE - couldn't get this working so moving on without using shorthand

14:28 Chainlink keepers video

14:34 Chainlink keepers documentation and implementation

14:56 Deploying Raffle.sol

15:04 Mock Chainlink VRF Coordinator

- https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol

15:10 Deploying Raffle.sol continued

Note - when formatting add name of language to the 3 backticks

"```javascript"

15:20 Unit tests `yarn hardhat test`

- can select tests using `yarn hardhat test --grep "you don't pay enough"`

15:30 Testing events and Chai matchers

15:32 Hardhat methods and "Time Travel"

- Hardhat network - reference docs https://hardhat.org/hardhat-network/docs/reference
- Look at 'Special testing/debugging methods' section
- `yarn hardhat coverage`

15:38 Unit tests on checkUpkeep function - `callStatic`

15:49 Unit tests on `fulfillRandomWords`

16:07 Raffle.sol - staging tests

- Note - only want staging tests to run on a test net
- Want unit tests to only run on a local network

16:18 Testing on a Testnet

16:22 Deploying the contract to a testnet
