"use strict";

const targetDate = new Date().getTime() + 1000 * 480;

let gameEnded = false;

// Countdown function to update the timer
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the countdown div
  document.getElementById("countdown").innerHTML = 0${minutes}:${seconds};

  // Check if the countdown has ended
  if (timeLeft > 0 && !gameEnded) {
    setTimeout(updateCountdown, 1000); // Call updateCountdown again after 1 second
  } else {
    document.getElementById("countdown").innerHTML = "The event has ended!";
    if (!gameEnded) {
      gameLoss();
    }
  }
}