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


function playGame() {
    let humanScore = 0
    let computerScore = 0
    let rounds = 5

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("You both picked the same, You tie this round");
            return;
        }
        if (humanChoice > computerChoice) {
            if (humanChoice == 2 && computerChoice == 0) {
                console.log("Computer wins! Rock beats scissor.");
                computerScore++;
                return;
            }
            switch (humanChoice) {
                case 1:
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                    return;
                case 2:
                    console.log("You win! Scissor beats Paper");
                    humanScore++;
                    return;
            }
        }
    
        if (computerChoice == 2 && humanChoice == 0) {
            console.log("You wins! Rock beats Scissor.");
            humanScore++;
            return;
        }
        switch (computerChoice) {
            case 1:
                console.log("Computer wins! Paper beats Rock");
                computerScore++;
                return;
            case 2:
                console.log("Computer wins! Scissor beats Paper");
                computerScore++;
                return;
    
        } 
    }

    for (let i = 0; i < rounds; i) {
        const currentHumanScore = humanScore
        const currentComputerScore = computerScore
        playRound(getHumanChoice(), getComputerChoice())
        if (currentComputerScore != computerScore || currentHumanScore != humanScore) {
            i++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You Win The Game!")
    } else {
        console.log("You Lose The Game!")
    }



}

playGame()
