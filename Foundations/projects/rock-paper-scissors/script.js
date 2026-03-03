let Status = document.querySelector(".Status");
let rounds_played = document.querySelector("#NumOfRounds");
let message = document.querySelector("#Message");
let scorecard = document.querySelector("#Score");



let round_counter = 0;
let playerScore = 0;
let compScore = 0;

function playRound(playerChoice) { 
    
    let round_result;   
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)]

    if (playerScore === 5 || compScore === 5) {
        alert("Game Finished");
        return
    }
    //round tie 
    if (compChoice === playerChoice) { 
        round_result = "Tie";
    } else if (compChoice === "Rock") { 
        if (playerChoice === "Paper") {
            round_result = "Round Win"
        } else {
            round_result = "Round Lost"
      }  
    } else if (compChoice === "Paper") { 
        if (playerChoice === "Scissors") {
            round_result = "Round Win";
        } else {
            round_result = "Round Lost";
        } 
    } else if (compChoice === "Scissors") { 
        if (playerChoice === "Rock") { 
            round_result = "Round Win";
        } else {
            round_result = "Round Lost";
        } 
    }

    if (round_result === "Round Win") {
        message.textContent = "Player Wins";
        playerScore += 1;

    
    } else if (round_result === "Round Lost") { 
        message.textContent = "Player Loses"; 
        compScore += 1;
    } else { 
        message.textContent = "Round Tie";
        // Don't Change either Score 
    }

    round_counter += 1; 
    rounds_played.textContent = `Rounds Played: ${round_counter}`; 
    scorecard.textContent = `Player: ${playerScore} | Computer: ${compScore}`;

}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

[rock, paper, scissors].forEach((selection) => {
    selection.addEventListener('click', (e) => { 
        playRound(selection.textContent);
    })
})