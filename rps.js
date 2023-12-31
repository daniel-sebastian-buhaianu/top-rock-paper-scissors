function getRandomInt(max)
{ // returns a random integer from [0, max-1]
  return Math.floor(Math.random() * max);
}
function capitalizeFirstLetter(string)
{
  let c = string.charAt(0);
  return c.toUpperCase() + string.slice(1);
}
function getComputerChoice()
{ // returns 'Rock', 'Paper' or 'Scissors'
  const choices = ['rock', 'paper', 'scissors'];
  return capitalizeFirstLetter(
    choices[getRandomInt(choices.length)]);
}
function getGameResult(playerChoice, computerChoice)
{
  // returns 0 if tie
  // returns 1 if player wins
  // returns -1 if computer wins
  const hashTable = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
  };
  const player = hashTable[playerChoice.toLowerCase()];
  const computer = hashTable[computerChoice.toLowerCase()];
  const adjacencyMatrix = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
  ];
  if (player === computer) return 0;
  if (adjacencyMatrix[player][computer]) return 1;
  return -1;
}
function game()
{
  function playRound(playerSelection, computerSelection)
  {
    playerSelection = capitalizeFirstLetter(playerSelection.toLowerCase());
    computerSelection = capitalizeFirstLetter(computerSelection.toLowerCase());
    console.log(`Computer's choice: ${computerSelection}`);
    const result = getGameResult(playerSelection, computerSelection);
    if (!result) return 'Tie!';
    if (result > 0) return `You win! ${playerSelection} beats ${computerSelection}`;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  const prompt = require('prompt-sync')();
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++)
  {
    console.log("It's your time to choose.");
    let player = prompt("Choose from 'rock', 'paper' or 'scissors': ");
    let computer = getComputerChoice();
    console.log(playRound(player, computer));
    let result = getGameResult(player, computer);
    if (result > 0) playerWins++;
    if (result < 0) computerWins++;
  }
  console.log("The end of the game!");
  console.log(`Player ${playerWins} - ${computerWins} Computer`);
  if (playerWins > computerWins)
    console.log("Winner: Player");
  else if (playerWins < computerWins)
    console.log("Winner: Computer");
  else
    console.log("Tie!");
}
game();
