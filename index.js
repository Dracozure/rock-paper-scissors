function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

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

function game() {
    let computerPoints = 0;
    let playerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let round = i + 1;
        let playerSelection = prompt("Enter rock, paper, or scissors", "rock");
        let result;

        console.log(`Round ${round}`);

        result = playRockPaperScissors(playerSelection, getComputerChoice());

        if (result.slice(0,1) === 'P') {
            playerPoints++;
        } else if (result.slice(0,1) === 'C') {
            computerPoints++;
        } else {
            computerPoints++;
            playerPoints++
        }

        console.log(result);
    }

    console.log("---RESULT---");
    console.log(`Player total points: ${playerPoints}`);
    console.log(`Computer total points: ${computerPoints}`);

    if (computerPoints > playerPoints) {
        console.log("Computer wins!");
    } else if (playerPoints > computerPoints) {
        console.log("Player wins!");
    } else {
        console.log("Tie game!");
    }
}

