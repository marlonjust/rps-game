document.addEventListener("DOMContentLoaded", () => {

    let userScore = 0;
    let cpuScore = 0;

    let userChoice = "";

    let cpuChoice = () => {
        let calc = Math.floor(Math.random() * 3);

        if (calc === 0) {
            return "Rock";
        } else if (calc === 1) {
            return "Paper";
        } else if (calc === 2) {
            return "Scissors";
        }
    }
    

    let userRock = () => {
        userChoice = "Rock";
        compareChoices();
        updateScore();
        document.getElementById("userChoice").innerHTML = "Rock";
        document.getElementById("cpuChoice").innerHTML = cpuChoice();
    }
    
    let userPaper = () => {
        userChoice = "Paper";
        compareChoices();
        updateScore();
        document.getElementById("userChoice").innerHTML = "Paper";
        document.getElementById("cpuChoice").innerHTML = cpuChoice();
    }
    
    let userScissors = () => {
        userChoice = "Scissors";
        compareChoices();
        updateScore();
        document.getElementById("userChoice").innerHTML = "Scissors";
        document.getElementById("cpuChoice").innerHTML = cpuChoice();
    }
    
    
    let compareChoices = () => {
        let cpu = cpuChoice();
        if (userChoice === "Rock" && cpu === "Paper") {
            cpuScore++;
        } else if (userChoice === "Paper" && cpu === "Scissors") {
            cpuScore++;
        } else if (userChoice === "Scissors" && cpu === "Rock") {
            cpuScore++;
        } else if (userChoice === "Paper" && cpu === "Rock") {
            userScore++;
        } else if (userChoice === "Rock" && cpu === "Scissors") {
            userScore++;
        } else if (userChoice === "Scissors" && cpu === "Paper") {
            userScore++;
        } else if (userChoice === cpu) {
        }
    }

    let updateScore = () => {
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("cpuScore").innerHTML = cpuScore;
    }

    document.getElementById("rockButton").addEventListener("click", userRock);
    document.getElementById("paperButton").addEventListener("click", userPaper);
    document.getElementById("scissorsButton").addEventListener("click", userScissors);

})