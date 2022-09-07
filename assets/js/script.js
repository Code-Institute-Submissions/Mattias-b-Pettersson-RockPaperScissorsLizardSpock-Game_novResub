document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                runGame();
            } else {
                let gameInput = this.getAttribute("data-type");
                updatePlayerSelection;
            }
        })
    }

})

function runGame(gameInput) {
    let num = math.floor(Math.random() * 4) + 1;
    
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




function displayRock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("computer-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist">`
    } else {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist">`
    }

}

function displayPaper(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("computer-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand"></i>`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand"></i>`
    }

}

function displayScissor(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("computer-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-scissors">`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-scissors">`
    }

}

function displayLizard(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("computer-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`
    }

}

function displaySpock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("computer-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`
    }

}