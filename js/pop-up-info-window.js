"use strict"

const popUp = document.getElementById("pop-up");
const span = document.querySelector(".close");

window.addEventListener("DOMContentLoaded", () => {
    popUp.style.display = "block";
});

window.onclick = (event) => {
    if (event.target === popUp) {
        popUp.style.display = "none";
    }
};

  span.onclick = () => {
    popUp.style.display = "none";
  };