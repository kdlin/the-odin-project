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


console.log(getComputerChoice())