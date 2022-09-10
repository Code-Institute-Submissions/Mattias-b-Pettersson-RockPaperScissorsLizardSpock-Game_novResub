/** Handles submit button click */
function handleSubmitClicked() {
    let playerChoosen = document.getElementById("player-selected").children[0].getAttribute("data-type");
    if (playerChoosen === "not-chosen" ) {
        alert("You haven't choosen a hand!");
    } else {
    updateComputerSelection();
    evaluate();
    }
}

/** Updates the players choise when choosing a button */
function updatePlayerSelection(elem) {
    document.getElementById("player-selected").innerHTML = elem.children[0].outerHTML;

}

/** Choses and updates a play for the computer */
function updateComputerSelection() {
    let num = Math.floor(Math.random() * 4);
    
    document.getElementById("computer-selected").innerHTML = document.getElementsByClassName("btn")[num].children[0].outerHTML;
}

/** Looks if it is a win or loss between the player and the computer */
function evaluate() {
    let computerChoosen = document.getElementById("computer-selected").children[0].getAttribute("data-type");
    let playerChoosen = document.getElementById("player-selected").children[0].getAttribute("data-type");

    if (playerChoosen === "rock" && (computerChoosen === "lizard" || computerChoosen === "scissor")) {
        updateScore("wins", "You win!");
    } else if (playerChoosen === "paper" && (computerChoosen === "spock" || computerChoosen === "rock")) {
        updateScore("wins", "You win!");
    } else if (playerChoosen === "scissor" && (computerChoosen === "paper" || computerChoosen === "lizard")) {
        updateScore("wins", "You win!");
    } else if (playerChoosen === "lizard" && (computerChoosen === "spock" || computerChoosen === "paper")) {
        updateScore("wins", "You win!");
    } else if (playerChoosen === "spock" && (computerChoosen === "rock" || computerChoosen === "lizard")) {
        updateScore("wins", "You win!");
    } else {
        updateScore("losses", "You lose!");
    }
}

/** this function is used to update the score and displays "You lose!" or "You win!" */
function updateScore(outcome, outcomeMessage) {
    document.getElementById("win-loss").innerText = outcomeMessage;
    document.getElementById(outcome).innerText = parseInt(document.getElementById(outcome).innerText) + 1;
}


/* Make sure the dom is loaded and then adds event listeners for all buttons.*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                handleSubmitClicked();
            } else {
                updatePlayerSelection(this);
            }
        });
    }
});

