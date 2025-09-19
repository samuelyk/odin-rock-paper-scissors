function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 1/3) {
        return "rock";
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const userChoice = 
    prompt("Choose one of \"Rock\", \"Paper\", \"Scissors\": ");
    return userChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") { 
        switch (computerChoice) {
            case "rock":
                console.log("No winner! Let's play again.");
                break;
            case "paper":
                console.log("Computer wins!");
                computerScore++;
                break;
            case "scissors":
                console.log("You win!");
                humanScore++;
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win!");
                humanScore++;
                break;
            case "paper":
                console.log("No winner! Let's play again.");
                break;
            case "scissors":
                console.log("Computer wins!");
                computerScore++;
                break;  
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("Computer wins!");
                computerScore++;
                break;
            case "paper":
                console.log("You win!");
                humanScore++;
                break;
            case "scissors":
                console.log("No winner! Let's play again.");
                break;  
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);