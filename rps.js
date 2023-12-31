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
function playRound(playerSelection, computerSelection)
{
  playerSelection = capitalizeFirstLetter(playerSelection.toLowerCase());
  computerSelection = capitalizeFirstLetter(computerSelection.toLowerCase());
  console.log(`Player's choice: ${playerSelection}`);
  console.log(`Computer's choice: ${computerSelection}`);
  const result = getGameResult(playerSelection, computerSelection);
  if (!result) return 'Tie!';
  if (result > 0) return `You win! ${playerSelection} beats ${computerSelection}`;
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}
const player = 'rock';
const computer = getComputerChoice();
console.log(playRound(player, computer));
