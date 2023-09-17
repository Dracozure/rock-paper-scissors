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
    const playerChoice = document.querySelector('#player-choice');
    const computerChoice = document.querySelector('#computer-choice');

    playerChoice.textContent = playerSelection.toUpperCase();
    computerChoice.textContent = computerSelection.toUpperCase();
}

