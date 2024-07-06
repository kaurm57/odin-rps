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

function getHumanChoice(){

    let humanChoice = prompt("Choose rock, paper or scissors")

    return humanChoice
}

function playRound(humanChoice, computerChoice){
    if (computerChoice == "rock"){
        if (humanChoice == "rock"){
            return "tie"
        }
        else if (humanChoice == "paper"){
            return "win"
        }
        else{
            return "lose"
        }
    }
    else if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            return "lose"
        }
        else if (humanChoice == "paper"){
            return "tie"
        }
        else{
            return "win"
        }
    }
    else if (computerChoice == "scissors"){
        if (humanChoice == "rock"){
            return "win"
        }
        else if (humanChoice == "paper"){
            return "lose"
        }
        else{
            return "tie"
        }
    }
}
let i = 0;
let humanScore = 0;
let computerScore = 0;

while (i < 5){
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
}