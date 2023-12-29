const choices = document.querySelectorAll(".choice")
const score = document.getElementById("score")
const result = document.getElementById("result")
const modal = document.querySelector(".modal")
const scoreboard = {
    player:0,
    computer:0
}

function play(e){
    // console.log()
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice()
    let winner = getWinner(playerChoice,computerChoice)
    // console.log(winner,computerChoice)
    showWinner(winner, computerChoice)
}

function showWinner(winner,computerChoice){
    if(winner === "player"){
        scoreboard.player++
        result.innerHTML = `
        <h1>YOU WIN</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }else if(winner === "computer"){
        scoreboard.computer++
        result.innerHTML = `
        <h1>YOU LOSE</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    `
    }else {
        result.innerHTML = `
        <h1>IT's DRAW</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `
    modal.style.display = "block"
}

function getWinner(pc,cc){
    if(pc === cc){
        return "draw";
    }else if(pc == "rock"){
        if(cc == "paper"){
            return "computer";
        }else{
            return "player"
        }
    }else if(pc == "paper"){
        if(cc == "scissors"){
            return "computer"
        }else
            return "player"
    }else if(pc == "scissors"){
        if(cc == "rock"){
            return "computer"
        }else{
            return "player"
        }
    }
}

function getComputerChoice(){
    const randomNumber = Math.random()
    // console.log(randomNumber)
    if(randomNumber>=0.33){
        return "paper"
    }else if(randomNumber>0.34 && randomNumber<=0.66){
        return "scissors";
    }else
        return "rock"
}

choices.forEach(function(ch){
    ch.addEventListener("click",play)
    ch.addEventListener("touchend",play)
})

window.addEventListener("click",clearModal)
window.addEventListener("tap",clearModal)

function clearModal(e){
    if(e.target==modal){
        modal.style.display = "none"
    }
}