function getRandomInt(max)
{ // returns a random integer from [0, max-1]
  return Math.floor(Math.random() * max);
}
function getComputerChoice()
{ // returns "Rock", "Paper" or "Scissors"
  choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomInt(choices.length)];
}
console.log(getComputerChoice());
