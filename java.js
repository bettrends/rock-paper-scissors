/*I decided it would be better to call getComputerChoice and 
getPlayerChoice functions in the playRound function so in the 
future, the variables can be changed without refreshing the page*/

let playerSelection;
let computerSelection;

function random() {
    let r = Math.floor(Math.random() * 3);
    return r;
}

function getComputerChoice() {
    let rand = random();
    if (rand == 0) {
        return "rock";
    } else if (rand == 1) {
        return "paper";
    } else if (rand == 2) {
        return "scissors"
    }
}


//let computerSelection = getComputerChoice();

function getPlayerChoice() {
    let userSelection = " ";
    while ((userSelection != "rock") && (userSelection != "paper") && (userSelection != "scissors")) {
        let userChoice = prompt("Pick rock, paper, or scissors:");
        userSelection = userChoice.toLowerCase();
    }
    return userSelection;
}

//let playerSelection = getPlayerChoice();

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("Tie");
        return "tie";
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    console.log("You lose :(");
                    return "lose";
                } else if (computerSelection == "scissors") {
                    console.log("You WIN :)");
                    return "win";
                }
                break;
            case "scissors":
                if (computerSelection == "rock") {
                    console.log("You lose :(");
                    return "lose";
                } else if (computerSelection == "paper") {
                    console.log("You WIN :)");
                    return "win";
                }
                break;
            case "paper":
                if (computerSelection == "scissors") {
                    console.log("You lose :(");
                    return "lose";
                } else if (computerSelection == "rock") {
                    console.log("You WIN :)");
                    return "win";
                }
                break;

        }
    }
}

function game() {
    let round;
    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;
    let gameResult;

    for ( let i = 1; i <= 5; i++) {
        round = playRound();
        switch (round) {
            case "win":
                winCount = winCount + 1;
                break;
            case "lose":
                loseCount = loseCount + 1;
                break;
            case "tie":
                tieCount = tieCount + 1;
                break;
        }
    }

    console.log("After 5 games, your record is " + winCount + " win(s), " + loseCount + " loss(es), and " + tieCount + " tie(s).")
    if (winCount > loseCount) {
        gameResult = "win";
        console.log("YOU WIN :)")
    } else if (loseCount > winCount) {
        gameResult = "YOU LOSE :(";
        console.log("YOU LOSE");
    } else if (winCount == loseCount) {
        gameResult = "TIE GAME";
        console.log("TIE GAME");
    }

}