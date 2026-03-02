


// Getting Choices 
function getComputerChoice(){
    let choice = Math.random()
    if (choice <= 0.33) {
        return "rock";
    } else if (choice > 0.33 && choice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerChoice(selection) { 
    
}

const rock = document.querySelector("Rock");
rock.textContent = "Rock";
const paper = document.querySelector("Paper");
paper.textContent = "Paper";
const scissors = document.querySelector("Scissors"); 
scissors.textContent = "Scissors";

[rock, paper, scissors].forEach(button, (e) => {
    button.addEventListener('click', () => {
        playerChoice(button.textContent);
    })
})

function playRound(humanChoice, compChoice) {
    if (humanChoice == "rock") {
        if (compChoice == "rock") {
            console.log("It's a tie. Both selected rock");
        } else if (compChoice == "paper") {
            console.log("Round goes to Computer. +1 points");
            computerScore += 1;
        } else {
            console.log("Player wins. +1 points");
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper") {
        if (compChoice == "paper") { 
            console.log("It's a tie. Both selected paper");
        } else if (compChoice == "rock") {
            console.log("Player wins. +1 points");
            humanScore += 1;
        } else {
            console.log("Round goes to Computer. +1 points");
            computerScore += 1;
        }
    }    

    else{ //humanChoice is scissorss
        if (compChoice == "scissors") {
            console.log("It's a tie. Both selected scissors");
        } else if (compChoice == "rock") {
            console.log("Round goes to Computer. +1 points");
            computerScore += 1;
        } else{
            console.log("Player wins. +1 points");
            humanScore +=1 ;
        }
    }
    }

    