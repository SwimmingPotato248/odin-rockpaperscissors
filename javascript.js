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

const computerSelection = computerPlay();