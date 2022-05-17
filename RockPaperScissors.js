/* ROCK PAPER SCISSORS */

const getUserChoice = userInput => {
    

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
        return userInput
    } else {
        console.log('ERROR! User input must be rock, paper, or scissors.');
    }
};

const getComputerChoice = () => {
    const numGenerator = Math.floor(Math.random() * 3);

    if (numGenerator === 0) {
        return 'rock'
    } else if (numGenerator === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return "The game is a TIE!"
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer WINS!"
        } else {
            return "User WINS!"
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Computer WINS!"
        } else if (computerChoice === 'rock') {
            return "User WINS!"
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Computer WINS!"
        } else if (computerChoice === 'paper') {
            return "User WINS!"
        }
    }

    if (userChoice === 'bomb') {
        return "USER ANNIHILATES COMPUTER!!"
    }

}

const playGame = () => {

    
    const userChoice = getUserChoice('bomb');
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));


}

playGame();
