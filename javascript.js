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

function resultMessage(playerSelection, result) {
    if (result === "draw") {
        return "It's a draw!";
    } else if (result === "win") {
        switch (playerSelection) {
            case "rock":
                return "Rock beat scissors. You win!";
            case "paper":
                return "Paper beat rock. You win!";
            case "scissors":
                return "Scissors beat paper. You win!";
        }
    } else if (result === "lose") {
        switch (playerSelection) {
            case "rock":
                return "Paper beat rock. You lose!";
            case "paper":
                return "Scissors beat paper. You lose!";
            case "scissors":
                return "Rock beat scissors. You lose!";
        }
    }
}
let win = 0;
let lose = 0;

function game(playerSelection) {

    const computerSelection = computerPlay();
    const result = playRound(computerSelection,playerSelection);
    if (result === "win") {
        win++;
    } else if (result === "lose") {
        lose++;
    }
    const container = document.querySelector("#result");
    const returnResult = document.createElement("p");
    returnResult.textContent = resultMessage(playerSelection, result);
    returnResult.textContent += (` The score is ${win}-${lose}.`)

    container.appendChild(returnResult);

    if (win === 5) {
        const endGame = document.createElement("p");
        endGame.textContent = "You beat the game!";

        container.appendChild(endGame);
    } else if (lose === 5) {
        const endGame = document.createElement("p");
        endGame.textContent = "You lost the game!";

        container.appendChild(endGame);
    }

    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});