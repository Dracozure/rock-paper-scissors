let currentGameState;
const gameStateID = '#display-choices';
const originalGameState = document.querySelector(gameStateID);
const cloneOriginalGameState = originalGameState.cloneNode(true);
let playerRockPaperScissorsButtons = document.querySelectorAll('button');

toggleGameState(gameStateID, 'start');

function toggleGameState(elementToggleID, targetGameState) {
    const elementToggle = document.querySelector(elementToggleID);

    switch (targetGameState) {
        case 'start':
            elementToggle.replaceWith(createDisplayButton('start'));
            currentGameState = 'start';
            playerRockPaperScissorsButtons = document.querySelectorAll('button');
            break;
        case 'restart':
            elementToggle.replaceWith(createDisplayButton('restart'));
            currentGameState = 'restart';
            playerRockPaperScissorsButtons = document.querySelectorAll('button');
            break;
        case 'game':
            elementToggle.replaceWith(cloneOriginalGameState);
            currentGameState = 'game';
            playerRockPaperScissorsButtons = document.querySelectorAll('button');
            break;
    }

    playerRockPaperScissorsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('hello');
        });
    });
}

function createDisplayButton(textContent) {
    const gameStatebutton = document.createElement('button');

    gameStatebutton.textContent = textContent.toUpperCase();
    gameStatebutton.style.fontSize = '3rem';
    gameStatebutton.style.padding = '2rem';
    gameStatebutton.style.padding = '1.5rem';
    gameStatebutton.style.maxWidth = 'min-content';
    gameStatebutton.style.marginLeft = 'auto';
    gameStatebutton.style.marginRight = 'auto';
    gameStatebutton.setAttribute('id', 'display-choices');
    gameStatebutton.toggleAttribute('button');

    return gameStatebutton;
}

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

