function playRound (userChoice) {
    let computerChoice = generateComputerChoice();
    displayScore();
    checkWinner(userChoice, computerChoice);
}

function generateComputerChoice() {
    return Math.floor(Math.random()*3);
}

function displayScore () {
    playerScoreDisplay.textContent = `Player score : ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score : ${computerScore}`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 1;
    displayScore();
  
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
            resultsDisplay.innerHTML = winnerMessage;
            handConversions[userChoice].setAttribute("style","animation:win 0.75s;");
            break;
        case gameOutcome == "l":
            computerScore++;
            displayScore();
            handConversions[userChoice].setAttribute("style","animation:shakeLose 0.75s;box-shadow: 0 8px 10px 0  #cc9999, 0px -8px 10px 0px  #cc9999;")
            resultsDisplay.innerHTML = loserMessage;
            break;
        case gameOutcome == "d":
            handConversions[userChoice].setAttribute("style","animation:draw 0.75s;")
            resultsDisplay.innerHTML = drawMessage;
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
const handConversions = [rock,paper,scissors];
const round = document.querySelector('.round');
const winnerMessage = "Player <span style='color:rgb(118, 231, 118);'>wins</span> this round."
const loserMessage = "Player <span style='color:red;'>loses</span> this round."
const drawMessage = "Rounds ends in a <span style='color:rgb(223, 223, 73);'>draw</span>."
rock.addEventListener("click",() => (playRound(0)) );
paper.addEventListener("click", () => (playRound(1)) );
scissors.addEventListener("click", () => (playRound(2)) );

rock.addEventListener("animationend", () => {rock.removeAttribute("style");});
paper.addEventListener("animationend", () => {paper.removeAttribute("style");});
scissors.addEventListener("animationend", () => {scissors.removeAttribute("style");});