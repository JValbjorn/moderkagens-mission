"use strict"

const popUp = document.getElementById("pop-up");
const span = document.getElementById("close");

window.addEventListener("DOMContentLoaded", () => {
    popUp.style.display = "block";
});

window.onclick = (event) => {
    if (event.target === popUp) {
        popUp.style.display = "none";

        // Start timer when clicking outside popup
        const display = document.querySelector(".timer");
        const duration = 45; 
        const redirectUrl = display.dataset.redirect;
        startTimer(duration, display, redirectUrl);
    }
};

span.onclick = () => {
    popUp.style.display = "none";

    // Start timer when clicking "Det er forstået!"
    const display = document.querySelector(".timer");
    const duration = 45; 
    const redirectUrl = display.dataset.redirect;
    startTimer(duration, display, redirectUrl);
};