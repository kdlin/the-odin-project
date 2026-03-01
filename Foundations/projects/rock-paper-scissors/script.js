


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

function getPlayerChoice(){
    let p1_choice = prompt("Enter Rock, Paper, or scissors: ");
    return p1_choice.toLowerCase()
}
 

const selection1 = document.createElement("button");
const selection2 = document.createElement("button");
const selection3 = document.createElement("button");

[selection1, selection2, selection3].forEach(button => {
    button.addEventListener('click', (e) => {
        let choice = getPlayerChoice();
    })
})

function entireGame() {
    let rounds = 1;
    let humanScore = 0;
    let computerScore = 0;

    while (rounds < 6) {
        console.log(`Round ${rounds} | Current score Player: ${humanScore} | Computer: ${computerScore}`)
        playRound(getPlayerChoice(), getComputerChoice());

        if (humanScore > computerScore) {
        console.log(`Player's score is currently up by ${humanScore-computerScore} | Score: ${humanScore}-${computerScore}`);
        } else if (humanScore < computerScore) { 
        console.log(`Currently the computer is winning. Score is: ${computerScore}-${humanScore}`);
        } else {
        console.log(`The score is tied ${humanScore}-${computerScore}`);
      }

       rounds += 1;
       console.log("-----------------------------------");
    }

    // Score 
    console.log(`You have finished ${rounds} rounds`);
    console.log(`Calculating final score...`);
    setTimeout(() => {
        console.log('...');
    }, 1000); 

    setTimeout(() => {
        console.log('...');
    }, 2000); 

    setTimeout(() => {
        console.log('...');
    }, 3000); 

    setTimeout(() => {
        if (humanScore > computerScore) { 
            console.log(`Player Wins!! Final Score ${humanScore}-${computerScore}`);
        } else if(humanScore < computerScore) {
            console.log(`You Lost!! Final Score: ${humanScore}-${computerScore}`);
        } else {
            console.log(`It's a Tie. Score: ${humanScore}`);
        }
    }, 6000);

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

}

let result = entireGame()