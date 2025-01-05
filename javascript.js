function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissor"
    }
}

function getHumanChoice() {
    let getChoice = false;
    while (getChoice == false) {
        let choice = prompt("What do you play?")
        switch (choice) {
            case "rock":
                return "Rock"
            case "paper":
                return "Paper"
            case "scissors":
                return "Scissor"
        }
    }
}