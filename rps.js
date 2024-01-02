function getRandomNumberLessThan(number)
{
  return Math.floor(Math.random() * number);
}
function capitalizeFirstLetter(string)
{
  let c = string.charAt(0);
  return c.toUpperCase() + string.slice(1);
}
function playGame()
{
  const choices = ['rock', 'paper', 'scissors'];
  let playerWins = 0;
  let computerWins = 0;
  function isChoiceValid(choice)
  {
    return choices.includes(choice.toLowerCase());
  }
  function getComputerChoice()
  {
    return capitalizeFirstLetter(
      choices[getRandomNumberLessThan(choices.length)]);
  }
  function getRoundResult(playerChoice, computerChoice)
  { // returns 0 if tie, 1 if player wins or -1 otherwise
    const hashTable = {
      'rock': 0,
      'paper': 1,
      'scissors': 2
    };
    const playerHashValue = hashTable[playerChoice.toLowerCase()];
    const computerHashValue = hashTable[computerChoice.toLowerCase()];
    const adjacencyMatrix = [
      [0, 0, 1], // rock beats scissors (0 -> 2)
      [1, 0, 0], // paper beats rock (1 -> 0)
      [0, 1, 0]  // scissors beats paper (2 -> 1)
    ];
    if (playerHashValue === computerHashValue)
      return 0;
    if (adjacencyMatrix[playerHashValue][computerHashValue])
      return 1;
    return -1;
  }
  function playRound(playerChoice, computerChoice)
  {
    const roundResult = getRoundResult(playerChoice, computerChoice);
    if (!roundResult)
      console.log('Tie!'); 
    else if (roundResult > 0)
    {
      playerWins++;
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else
    {
      computerWins++;
      console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
    console.log(`Current score: Player ${playerWins} - ${computerWins} Computer`);
  }
  const prompt = require('prompt-sync')();
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i++)
  {
    let playerChoice;
    do {
      playerChoice = prompt("It's your time to choose. Choose from rock, paper or scissors: ");
    } while (!isChoiceValid(playerChoice));
    playerChoice = capitalizeFirstLetter(playerChoice);
    let computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`);
    playRound(playerChoice, computerChoice);
  }
  console.log("End of the game!");
  if (playerWins > computerWins)
    console.log("Winner: Player");
  else if (playerWins < computerWins)
    console.log("Winner: Computer");
  else
    console.log("Tie!");
}
playGame();
