function computerPlay() {
    let comMove = Math.floor(Math.random() * 3);
    switch (comMove) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const playerSelection = prompt("Make your move rock, paper, or scissors").toLowerCase();
const computerSelection = computerPlay();

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "win";
        } else return "lose";
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win";
        } else return "lose";
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "win";
        } else return "lose";
    }
}

console.log(playRound(computerSelection, playerSelection));
console.log(computerSelection);
console.log(playerSelection);