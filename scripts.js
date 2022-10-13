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
    round.setAttribute("style","width:100px;");
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
            handConversions[userChoice].setAttribute("style","animation:shakeLose 0.75s;");
            resultsDisplay.innerHTML = loserMessage;
            break;
        case gameOutcome == "d":
            handConversions[userChoice].setAttribute("style","animation:draw 0.75s;")
            resultsDisplay.innerHTML = drawMessage;
    }

    if (playerScore == 5){
        resultsDisplay.textContent = ("Player wins!");
        popUp.setAttribute("style","visibility:visible;")
        popUpMessage(1)
        resetScore();
    } else if (computerScore == 5) {
        resultsDisplay.textContent = ("Computer wins!");
        popUp.setAttribute("style","visibility:visible;color:blue;")
        popUpMessage(2);
        resetScore();
    }
}

function popUpMessage (winner) {
    if (winner == 1) {
        popMessage.innerHTML = "Congrats. You have <span style='color:rgb(118, 231, 118);'>won</span> the game."
    } else {
        popMessage.innerHTML = "Better luck next time, you <span style='color:red;'>lost</span> ."
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
const popUp = document.querySelector(".popup");
const popMessage = document.querySelector(".popMessage");
const close = document.querySelector(".close");
rock.addEventListener("click",() => (playRound(0)) );
paper.addEventListener("click", () => (playRound(1)) );
scissors.addEventListener("click", () => (playRound(2)) );

close.addEventListener('click',()=>{
    popUp.removeAttribute('style');
    round.setAttribute('style','width:220px;')
    round.textContent = "Re-make your destiny."
    resultsDisplay.innerHTML = "";
});

rock.addEventListener("animationend",() => rock.removeAttribute('style') );
paper.addEventListener("animationend",() => paper.removeAttribute('style') );
scissors.addEventListener("animationend",() => scissors.removeAttribute('style'));

