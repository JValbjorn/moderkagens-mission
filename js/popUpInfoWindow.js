"use strict"

const popUp = document.getElementById("pop-up");
const span = document.getElementById("close");
let stage = 1;

window.addEventListener("DOMContentLoaded", () => {
    popUp.style.display = "block";
});

window.onclick = (event) => {
    if (event.target === popUp) {
        startGame();
    }
};

span.onclick = () => {
    startGame();
};

function startGame() {
    popUp.style.display = "none";
    stage = +popUp.dataset.stage
    gamePaused = false;
    startCountdown();
    startFoodMovement();

    if (stage > 1) {
        startWasteSpawn();
    }

    if (stage > 2) {
        startVirusSpawn();
    }
}
