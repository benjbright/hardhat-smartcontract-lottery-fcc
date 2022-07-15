// Enter the lottery (paying some amount)
// Pick a random winner (verifiably random)
// Winner selected every x period -> automated

// Chainlink Oracle -> Randomness, Automated execution (Chainlink Keepers)

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

error Raffle__NotEnoughETHEntered();

contract Raffle {
  /* State variables */
  uint256 private immutable i_entranceFee;
  address payable[] private s_players;

  /* Events */
  event RaffleEnter(address indexed player);

  constructor(uint256 entranceFee) {
    i_entranceFee = entranceFee;
  }

  function enterRaffle() public payable {
    // require (msg.value > i_entranceFee, "Not enough ETH!!!")
    if (msg.value < i_entranceFee) {
      revert Raffle__NotEnoughETHEntered();
    }

    s_players.push(payable(msg.sender));
    // Emit an event when we update a dynamic array or mapping
    // Name events with the function name reversed
    emit RaffleEnter(msg.sender);
  }

  function requestRandomWinner() external {
    // Request random number
    // Then do something with the number
  }

  function fulfillRandomWords() internal override {}

  /* View / Pure functions */
  function getEntranceFee() public view returns (uint256) {
    return i_entranceFee;
  }

  function getPlayer(uint256 index) public view returns (address) {
    return s_players[index];
  }
}
