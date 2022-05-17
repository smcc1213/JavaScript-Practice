/* NUMBER GUESSER */

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

let compareGuesses = (userGuess, computerGuess, target) => {

  let differenceOfUserGuess = Math.abs(userGuess - target);
  let differenceOfComputerGuess = Math.abs(computerGuess - target);
   if (userGuess < 0 && userGuess > 9) {
    return alert("Number is out of range. Please select a number 0-9.");
  } else {
    return differenceOfUserGuess <= differenceOfComputerGuess; 
  }
}

let updateScore = winner => {
  winner = winner.toLowerCase();
  winner === 'human' ? humanScore += 1 : computerScore += 1;
}

let advanceRound = () => currentRoundNumber += 1;


