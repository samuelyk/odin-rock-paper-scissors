function getComputerChoice () {
    const randomNumber = Math.random();
    if (randomNumber <= 1/3) {
        console.log(randomNumber);
        console.log("rock");
        // return "rock";
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        console.log(randomNumber);
        console.log("paper");
        // return "paper";
    } else {
        console.log(randomNumber);
        console.log("scissors");
        // return "scissors";
    }
}

function getHumanChoice () {
    const userChoice = prompt("Choose one of \"Rock\", \"Paper\", \"Scissors\": ");
    return userChoice;
}