function getComputerChoice(){
    let randomnum = Math.random()

    if (randomnum < 1/3){
        return "rock"
    }
    else if (randomnum >= 1/3 && randomnum < 2/3 ){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(id){
    return id
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "tie"
    }
    else if (computerChoice == "rock"){
        return (humanChoice == "paper")? "win": "lose";


    }
    else if (computerChoice == "paper"){
        return (humanChoice == "rock")? "lose": "win";
    }
    else if (computerChoice == "scissors"){
        return (humanChoice == "rock")? "win": "lose";
    }
}

let i = 0;
let humanScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", function(){
        if (humanScore < 5 && computerScore < 5){
            let humanChoice = getHumanChoice(button.id)
        let computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice)
        if (result == "win"){
            humanScore++
        }
        else if (result == "lose"){
            computerScore++
        }
        alert("It's a " + result)
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
        else{
            let winner = (humanScore > computerScore)? "Human": "Computer";
            alert(winner + " wins");
        }
    })
})

if (humanScore >=5){
    alert("Human wins");
}
else if (computerScore >= 5){
    alert("Computer wins");
};

/**while (i < 5){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    let result = playRound(humanChoice, computerChoice)
    if (result == "win"){
        humanScore += 1
    }
    else if (result == "lose"){
        computerScore += 1
    }
    console.log(`Human: ${humanScore} Computer: ${computerScore}`)
    i++
} **/