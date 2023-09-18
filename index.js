let currentGameState = 'start';
const gameStateID = '#display-choices';
const originalGameState = document.querySelector(gameStateID);
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
            originalGameState.replaceWith(originalGameState.cloneNode(true));
            elementToggle.replaceWith(createDisplayButton('restart'));
            currentGameState = 'restart';
            playerRockPaperScissorsButtons = document.querySelectorAll('button');
            break;
        case 'game':
            elementToggle.replaceWith(originalGameState.cloneNode(true));
            currentGameState = 'game';
            playerRockPaperScissorsButtons = document.querySelectorAll('button');
            break;
    }

    addEventListener(playerRockPaperScissorsButtons, currentGameState);
}

function addEventListener(nodeList, currentGameState) {
    nodeList.forEach((element) => {
        element.addEventListener('click', () => {
            if (currentGameState === 'start') {
                toggleGameState(gameStateID, 'game');
            } else if (currentGameState === 'game') {
                if (element.id === 'rock') {
                    playRockPaperScissors('rock', getComputerChoice());
                } else if (element.id === 'paper') {
                    playRockPaperScissors('paper', getComputerChoice());
                } else {
                    playRockPaperScissors('scissors', getComputerChoice());
                }
            } else {
                const announcement = document.querySelector('.winner-announcement');

                resetDisplay();
                announcement.remove();
                toggleGameState(gameStateID, 'start');
            }
        });
    });
}

function resetDisplay() {
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    const playerChoice = document.getElementById('player-choice');
    const computerChoice = document.getElementById('computer-choice');

    playerScore.textContent = 'Score: 0';
    computerScore.textContent = 'Score: 0';
    playerChoice.textContent = 'CHOICE';
    computerChoice.textContent = 'CHOICE';
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

    if (getWinner(playerScore, computerScore) === 'player win') {
        announceWinner('player win');
        toggleGameState(gameStateID, 'restart');
    } else if (getWinner(playerScore, computerScore) === 'computer win') {
        announceWinner('computer win');
        toggleGameState(gameStateID, 'restart');
    } else if (getWinner(playerScore, computerScore) === 'tie'){
        announceWinner('tie');
        toggleGameState(gameStateID, 'restart');
    }
}

function getWinner(playerScore, computerScore) {
    if (playerScore.textContent.slice(-1) == '5' 
    || computerScore.textContent.slice(-1) == '5') {
        if (playerScore.textContent.slice(-1) > computerScore.textContent.slice(-1)) {
            return 'player win';
        } else if (playerScore.textContent.slice(-1) < computerScore.textContent.slice(-1)) {
            return 'computer win';
        } else if (playerScore.textContent.slice(-1) === computerScore.textContent.slice(-1)){
            return 'tie';
        }
    }
}

function announceWinner(winner) {
    const announcement = document.createElement('h1');
    announcement.classList.add('winner-announcement');
    const elementToggle = document.querySelector(gameStateID);

    switch (winner) {
        case 'player win':
            announcement.textContent = 'PLAYER WINS!';
            break;
        case 'computer win':
            announcement.textContent = 'COMPUTER WINS!';
            break;
        case 'tie':
            announcement.textContent = 'IT\'S A TIE!';
            break;
    }

    elementToggle.parentNode.insertBefore(announcement, elementToggle.parentNode.firstChild);
}

