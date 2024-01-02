function getRandomNumberLessThan(number)
{
  return Math.floor(Math.random() * number);
}
function handlePlayButtonClick()
{
  const choices = ['Rock', 'Paper', 'Scissors'];
  let playerWins = 0;
  let computerWins = 0;
  function deleteRoundDivs()
  {
    document.querySelectorAll('div.round')
      .forEach(div => div.remove());
  }
  function deletePreviousResult()
  {
    const result = document.querySelector('#result');
    if (result)
      result.remove();
  }
  function getComputerChoice()
  {
    return choices[getRandomNumberLessThan(choices.length)];
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
  function createParagraph(text)
  {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }
  function createRoundDiv(roundNumber, numberOfRounds)
  {
    const div = document.createElement('div');
    div.setAttribute('class', 'round');
    const label = document.createElement('label');
    label.textContent = `Round ${roundNumber}/${numberOfRounds}, make a choice:`;
    div.appendChild(label);
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.setAttribute('class', 'round-btn');
      button.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const computerChoice = getComputerChoice();
        let text = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;
        const roundResult = getRoundResult(playerChoice, computerChoice);
        if (!roundResult)
          text += 'Tie!';
        else if (roundResult > 0)
        {
          playerWins++;
          text += 'You win!';
        }
        else
        {
          computerWins++;
          text += 'Computer wins!';
        }
        this.parentNode.appendChild(createParagraph(text));
        text = `Score: You ${playerWins} - ${computerWins} Computer`;
        this.parentNode.appendChild(createParagraph(text));
        this.parentNode.childNodes.forEach(node => {
          if (node.tagName === "BUTTON")
          {
            node.setAttribute('disabled', true);
          }
        });
        if (roundNumber < numberOfRounds)
        {
          document.querySelector('body')
            .appendChild(createRoundDiv(roundNumber+1, numberOfRounds));
        }
        else
        {
          text = 'End of the game. ';
          if (playerWins > computerWins)
            text += 'You won!';
          else if (computerWins > playerWins)
            text += 'Computer won!';
          else
            text += 'Tie!';
          p = createParagraph(text);
          p.setAttribute('id', 'result');
          document.querySelector('body').appendChild(p);
        }
      });
      div.appendChild(button);
    });
    return div;
  }
  const numberOfRounds = document.querySelector('input').value;
  if (!numberOfRounds || numberOfRounds > 5)
    alert('Please enter a number between 1 and 5.');
  else
  {
    deleteRoundDivs();
    deletePreviousResult();
    document.querySelector('body')
      .appendChild(createRoundDiv(1, numberOfRounds));
  }
}
const playButton = document.querySelector('button');
playButton.addEventListener('click', handlePlayButtonClick);
