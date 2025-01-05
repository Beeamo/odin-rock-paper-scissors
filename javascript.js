
let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
        case 1:
            return 0
        case 2:
            return 1
        case 3:
            return 2
    }
}

function getHumanChoice() {
    let getChoice = false;
    while (getChoice == false) {
        let choice = prompt("What do you play?")
        switch (choice) {
            case "rock":
                return 0
            case "paper":
                return 1
            case "scissors":
                return 2
        }
    }
}

