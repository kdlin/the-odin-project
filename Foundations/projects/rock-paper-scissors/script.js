function playRound(playerChoice) { 
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)]

    if (compChoice === playerChoice) { 
        
    }
    // insert rest of round syntax here 
}

const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");

[rock, paper, scissors].forEach((selection) => {
    selection.addEventListener('click', (e) => { 
        playRound(String(selection));
    })
})