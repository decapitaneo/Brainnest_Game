let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div =  document.querySelector(".score-board");
const gameOver_div = document.querySelector(".game-over");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const p_result = document.getElementById("result");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(getComputerChoice());

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function resetScores() {
    userScore = 0;
    computerScore = 0;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        console.log("It's a draw")
    } else if (userChoice === 'paper' && computerChoice === 'scissors' ||
        userChoice === 'rock' && computerChoice === 'paper' ||
        userChoice === 'scissors' && computerChoice === 'rock') {
        lose();
    } else {
        win();
    }

    if (userScore === 5) {
        p_result.innerHTML = "You Won!!!";
        resetScores();
    } else if (computerScore === 5) {
        p_result.innerHTML = "You Lost!!!";
        resetScores();
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("rock");
    })
        
    paper_div.addEventListener('click', function(){
        game("paper");
     })
        
    scissors_div.addEventListener('click', function(){
        game("scissors");
    })
}

main();