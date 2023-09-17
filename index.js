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
            if (currentGameState === 'start') {
                toggleGameState(gameStateID, 'game');
            } else if (currentGameState === 'game') {
                switch (button.id) {
                    case 'rock':
                        console.log(playRockPaperScissors('rock', getComputerChoice()));
                        break;
                    case 'paper':
                        console.log(playRockPaperScissors('paper', getComputerChoice()));
                        break;
                    case 'scissors':
                        console.log(playRockPaperScissors('scissors', getComputerChoice()));
                        break;
                }
            };
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
    const playerChoice = document.getElementById('player-choice');
    const computerChoice = document.getElementById('computer-choice');
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    const addOnePoint = (targetElement) => {
        targetElement.textContent = targetElement.textContent.slice(0, -1) + (+targetElement.textContent.slice(-1) + 1);
    }
    const playerResult = () => {
        switch (playerSelection) {
            case 'rock':
                return computerSelection === 'scissors' ? 'won'
                : computerSelection === 'paper' ? 'lose'
                : 'tie';
            case 'paper':
                return computerSelection === 'rock' ? 'won'
                : computerSelection === 'scissors' ? 'lose'
                : 'tie';
            case 'scissors':
                return computerSelection === 'paper' ? 'won'
                : computerSelection === 'rock' ? 'lose'
                : 'tie';
        }
    }

    playerChoice.textContent = playerSelection.toUpperCase();
    computerChoice.textContent = computerSelection.toUpperCase();

    if (playerResult() === 'won') {
        addOnePoint(playerScore);
    } else if (playerResult() === 'lose') {
        addOnePoint(computerScore);
    } else {
        addOnePoint(playerScore);
        addOnePoint(computerScore);
    }

    if (playerScore.textContent.slice(-1) == '5' 
    || computerScore.textContent.slice(-1) == '5') {
        if (playerScore.textContent.slice(-1) > computerScore.textContent.slice(-1)) {
            toggleGameState(gameStateID, 'player win');
        } else if (playerScore.textContent.slice(-1) < computerScore.textContent.slice(-1)) {
            toggleGameState(gameStateID, 'computer win');
        } else {
            toggleGameState(gameStateID, 'tie');
        }
    }
}

