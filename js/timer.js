"use strict";

const startTid = 45; // 45 sekunder
let tid = startTid;

const countdownEl = document.querySelector(".timer"); // Henter <p class="timer">

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutter = Math.floor(tid / 60);
  let sekunder = tid % 60;

  sekunder = sekunder < 10 ? '0' + sekunder : sekunder;

  countdownEl.textContent = `${minutter}:${sekunder}`;
  tid--; 

  if (tid < 0) {
    clearInterval(countdownInterval);
    countdownEl.textContent = "0:00";
    window.location.href = "game2-organic-waste.html"; // ← skift til næste stage 
  }
} 

function showMessage(msg) {
  alert(msg); // Du kan ændre denne til noget pænere senere
}

function disableKeyboard() {
  document.onkeydown = function () {
    return false;
  };
}
