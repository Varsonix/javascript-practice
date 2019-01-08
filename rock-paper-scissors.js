/*
Project for basic rock, paper, scissors game using if/else statements
and switches.
*/

// Defining user choice function, and checking for correct input.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('error, invalid choice');
  }
};

// Defining computer choice with randomiser and switch control flow.
const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'error, please send help.';
      break;
  }
};

// Determining winner with control flow again. using original function syntax. Secret cheat code in 'bomb' choice.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You win, computer is dead.';
  }
  if (userChoice === computerChoice){
    return 'Tie game.';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer wins!';
    }	else {
      return 'Player wins!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer wins!';
    }	else{
      return 'Player wins!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer wins!';
    }	else {
      return 'Player wins!';
    }
  }
}

// creating a function for playing the game.
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
