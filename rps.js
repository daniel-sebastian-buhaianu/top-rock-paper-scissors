function getRandomInt(max)
{ // returns a random integer from [0, max-1]
  return Math.floor(Math.random() * max);
}
function capitalizeFirstLetter(string)
{
  let c = string.charAt(0);
  return c.toUpperCase() + string.slice(1);
}
const CHOICES = ["rock", "paper", "scissors"];
function getComputerChoice()
{ // returns "Rock", "Paper" or "Scissors"
  let choice = CHOICES[getRandomInt(CHOICES.length)];
  return capitalizeFirstLetter(choice);
}
