console.log("tester") 

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
    let p1_choice = prompt("Enter Rock, Paper, or Scissors: ");
    return toLowerCase(p1_choice) 
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer Wins")
    } else if (humanChoice == "paper" && computerChoice == "rock") { 
        console.log("You win!");
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer Wins");
    } else {
        console.log("You win! ")
    }
}
let humanScore = 0;
let computerScore = 0;

console.log(playRound(getPlayerChoice(), getComputerChoice()))
