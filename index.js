function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

//Create function playRockPaperScissors with 2 parameters: player choice and computer 
//Console log both player and computer choices
//Create switch case that takes in user choice
//Nest if statement inside each case to compare user choice with robot choice
//Return the winner in a string

function playRockPaperScissors(playerSelection, computerSelection) {
    let playerWinStr = `Player wins! Player's ${playerSelection.toLowerCase()} beats Computer's ${computerSelection.toLowerCase()}`;
    let computerWinStr = `Computer wins! Computer's ${computerSelection.toLowerCase()} beats Player's ${playerSelection.toLowerCase()}`;
    let TieStr = `It's a tie with both drawing ${playerSelection.toLowerCase()}`;

    console.log(`Player chose ${playerSelection.toLowerCase()}`);
    console.log(`Computer chose ${computerSelection.toLowerCase()}`);

    switch (playerSelection.toLowerCase()) {
        case "rock": {
            return (computerSelection === "scissors" ? playerWinStr : 
            computerSelection === "paper" ? computerWinStr :
            TieStr);
        }
        case "paper": {
            return (computerSelection === "rock" ? playerWinStr : 
            computerSelection === "scissors" ? computerWinStr :
            TieStr);
        }
        case "scissors": {
            return (computerSelection === "paper" ? playerWinStr : 
            computerSelection === "rock" ? computerWinStr :
            TieStr);
        }
    }
}
