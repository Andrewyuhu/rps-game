function playRound (userChoice) {
    let computerChoice = generateComputerChoice();
    checkWinner(userChoice, computerChoice);
}

function generateComputerChoice() {
    return Math.floor(Math.random()*3);
}

function displayScore () {
    playerScoreDisplay.textContent = `Player score ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score ${computerScore}`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 1;
    playerScoreDisplay.textContent = `Player score ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score ${computerScore}`;
  
}

function checkWinner (userChoice, computerChoice) {
    let gameOutcome = winningCombinations[computerChoice][userChoice];
    resultsDisplay.textContent = "";
    round.textContent = `Round ${gameRound}`
    gameRound++;
    switch(true){
        case gameOutcome == "w":
            playerScore++;
            displayScore();
            resultsDisplay.textContent = "Player wins this round."
            break;
        case gameOutcome == "l":
            computerScore++;
            displayScore();
            resultsDisplay.textContent = "Computer wins this round."
            break;
        case gameOutcome == "d":
            resultsDisplay.textContent = ("This round was a draw.")
    }

    if (playerScore == 5){
        resultsDisplay.textContent = ("Player wins!");
        resetScore();
    } else if (computerScore == 5) {
        resultsDisplay.textContent = ("Computer wins!");
        resetScore();
    }
}

const winningCombinations = [['d','w','l'],['l','d','w'],['w','l','d']];

let computerScore = 0;
let playerScore = 0;
let gameRound = 1;
const rock = document.querySelector('.rock');
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultsDisplay = document.querySelector(".results");
const playerScoreDisplay = document.querySelector(".userScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const round = document.querySelector('.round');

rock.addEventListener("click",() => (playRound(0)) );
paper.addEventListener("click", () => (playRound(1)) );
scissors.addEventListener("click", () => (playRound(2)) );

