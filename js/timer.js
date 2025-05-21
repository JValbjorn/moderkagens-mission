"use strict";

const startTid = 45; // 45 sekunder
let tid = startTid;
let timerInterval;

const countdownEl = document.querySelector(".timer"); // Henter <p class="timer">

// const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutter = Math.floor(tid / 60);
  let sekunder = tid % 60;

  sekunder = sekunder < 10 ? '0' + sekunder : sekunder;

  countdownEl.textContent = `${minutter}:${sekunder}`;
  tid--; 

  if (tid < 0) {
    clearInterval(countdownInterval);
    countdownEl.textContent = "0:00";
    const redirectUrl = countdownEl.dataset.redirect || "default-page.html";
    window.location.href = redirectUrl; 
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

function startTimer(duration, display, redirectUrl) {
  let timer = duration;
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      if (--timer < 0) {
          clearInterval(timerInterval);
          if (redirectUrl) {
              window.location.href = redirectUrl;
          }
      }
  }, 1000);
}

