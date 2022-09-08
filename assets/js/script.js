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

/** Runs the game when the GO button is pressed */
function runGame() {
    let num = Math.floor(Math.random() * 5) + 1;
    

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

    evaluate();
    

}

/** Updates the players choise when choosing a button */
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

/** Looks if it is a win or loss */
function evaluate() {
    let computerSide = document.getElementById("computer-selected").children;
    let playerSide = document.getElementById("player-selected").children;

    let computerChoosen = (computerSide[0].getAttribute("data-type"))
    let playerChoosen = (playerSide[0].getAttribute("data-type"))


    if (playerChoosen === "notchosen" ) {
        alert("You haven't choosen a hand!")
    } else if (playerChoosen === "rock" && (computerChoosen === "lizard" || computerChoosen === "scissor")) {
        win();
    } else if (playerChoosen === "paper" && (computerChoosen === "spock" || computerChoosen === "rock")) {
        win();
    } else if (playerChoosen === "scissor" && (computerChoosen === "paper" || computerChoosen === "lizard")) {
        win();
    } else if (playerChoosen === "lizard" && (computerChoosen === "spock" || computerChoosen === "paper")) {
        win();
    } else if (playerChoosen === "spock" && (computerChoosen === "rock" || computerChoosen === "lizard")) {
        win();
    } else { 
        loss();
    }
    

}

function win() {
    document.getElementById("win-loss").innerText = "You win!";
    document.getElementById("wins").innerText = parseInt(document.getElementById("wins").innerText) + 1;
}

function loss() {
    document.getElementById("win-loss").innerText = "You lose!";
    document.getElementById("losses").innerText = parseInt(document.getElementById("losses").innerText) + 1;
}

// ---- all display functions below


function displayRock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist" data-type="rock">`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-back-fist" data-type="rock">`
    }

}

function displayPaper(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand" data-type="paper"></i>`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand" data-type="paper"></i>`
    }

}

function displayScissor(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-scissors" data-type="scissor">`
    } else if (input === "player") {
        playerSide.innerHTML = `<i class="fa-solid fa-hand-scissors" data-type="scissor">`
    }

}

function displayLizard(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-lizard" data-type="lizard"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-lizard" data-type="lizard"></i>`
    }

}

function displaySpock(input) {

    let computerSide = document.getElementById("computer-selected");
    let playerSide = document.getElementById("player-selected");
    
    if (input === "computer") {
            computerSide.innerHTML = `<i class="fa-solid fa-hand-spock" data-type="spock"></i>`
    } else if (input === "player"){
        playerSide.innerHTML = `<i class="fa-solid fa-hand-spock" data-type="spock"></i>`
    }

}

// ---- all display functions above