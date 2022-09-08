document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                runGame();
            } else {
                let gameInput = this.getAttribute("data-type");
                updatePlayerSelection(gameInput);
            }
        })
    }

})

let computerSelectedTimes = 0;

function runGame() {
    let num = Math.floor(Math.random() * 5) + 1;
        computerSelectedTimes++
    if (computerSelectedTimes === 2) {
        computerSelectedTimes = 0
        runGame();
    }

    if (num === 1)  {
        displayRock("computer");
    } else if (num === 2) {
        displayPaper("computer"); 
    } else if (num === 3) {
        displayScissor("computer");
    } else if (num === 4) {
        displayLizard("computer");
    } else if (num === 5) {
       displaySpock("computer");
    }



}

function updatePlayerSelection(gameInput) {
    
    if (gameInput === "rock") {
        displayRock("player");
    } else if (gameInput === "paper") {
        displayPaper("player");
    } else if (gameInput === "scissor") {
        displayScissor("player");
    } else if (gameInput === "lizard") {
        displayLizard("player");
    } else if (gameInput === "spock") {
        displaySpock("player");
    }

}




function displayRock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist">`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist">`
    }

}

function displayPaper(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand"></i>`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand"></i>`
    }

}

function displayScissor(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-scissors">`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-scissors">`
    }

}

function displayLizard(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`
    }

}

function displaySpock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`
    }

}

