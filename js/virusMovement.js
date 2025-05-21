"use strict";

const hitSound = new Audio("media/audio/plop.mp3");
const damageSound = new Audio("media/audio/dmg2.mp3");

const virusContainer = document.getElementById("virus-container");
// Virus icon data
const virusIkoner = [
  { src: "media/img/virus/herpes.png", type: "virus" },
  { src: "media/img/virus/estreptococo.png", type: "virus" },
  { src: "media/img/virus/papiloma.png", type: "virus" },
];
// Define spawn positions - specific coordinates where viruses can appear
const virusSpawnPositions = [
  { x: 330, y: 1170 },
  { x: 500, y: 1150 },
  { x: 600, y: 1170 },
];

// Function to trigger damage flash effect
function triggerDamageFlash() {
  // Create a full-screen red overlay
  const flashElement = document.createElement("div");
  flashElement.style.position = "fixed";
  flashElement.style.top = 0;
  flashElement.style.left = 0;
  flashElement.style.width = "100%";
  flashElement.style.height = "100%";
  flashElement.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
  flashElement.style.zIndex = 9999;
  flashElement.style.pointerEvents = "none"; // Make it non-interactive

  document.body.appendChild(flashElement);

  // Fade out the flash
  flashElement.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 300,
    easing: "ease-out",
  });

  // Remove after animation
  setTimeout(() => {
    flashElement.remove();
  }, 300);
}

// Function to spawn a virus
function spawnVirusIcon() {
  if (gamePaused) {
    return;
  }
  // Select random virus and spawn position
  const ikonData = virusIkoner[Math.floor(Math.random() * virusIkoner.length)];

  //Triers local addpoint og local storage bavl
  if (generatedCount[ikonData.type] !== undefined) {
    generatedCount[ikonData.type]++;
    saveGeneratedCount();
    updateScoreDisplay(); // hvis du vil opdatere scoren live
  }

  const spawn =
    virusSpawnPositions[Math.floor(Math.random() * virusSpawnPositions.length)];

  // Create the image element
  const img = document.createElement("img");
  img.src = ikonData.src;
  img.classList.add("virus-icon");
  img.style.position = "absolute";
  img.style.left = spawn.x + "px";
  img.style.top = "-100px"; // Start above the screen
  img.dataset.hit = "false"; // Flag to track if this virus has already hit the baby

  // Add click handler to remove virus when clicked
  img.addEventListener("click", function () {
    hitSound.currentTime = 0;
    hitSound.play();
    // Remove instantly when clicked
    img.remove();
    addPoint();
    
  });

  // Add to DOM first (before animation)
  virusContainer.appendChild(img);

  // Create and store the animation
  const animation = img.animate([{ top: "-100px" }, { top: spawn.y + "px" }], {
    duration: 4000,
    fill: "forwards",
  });

  // Set up event listener for when animation finishes
  animation.onfinish = () => {
    // Only trigger damage if the virus is still in the DOM and hasn't been clicked
    if (img.parentNode === virusContainer && img.dataset.hit === "false") {
      img.dataset.hit = "true"; // Mark as hit
      damageSound.currentTime = 0;
      damageSound.play();

      // Trigger damage flash
      triggerDamageFlash();

      // Fade out virus
      img.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 800,
        fill: "forwards",
      });

      // Remove virus after fade completes
      setTimeout(() => {
        img.remove();
      }, 800);
    }
  };
}

// // Start spawning viruses when the document is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Start the interval for spawning viruses
//     setInterval(spawnVirusIcon, 2000);

//     // Spawn one immediately for testing
//     spawnVirusIcon();
// });

let virusInterval; // keep this global so both functions can access

function startVirusSpawn() {
  virusInterval = setInterval(spawnVirusIcon, 2000);
}

// function stopVirusSpawn() {
//   clearInterval(virusInterval);
// }

// function startTimer(duration, display, redirectUrl, onFinish) {
//   let tid = duration;
//   const timerInterval = setInterval(() => {
//     const minutter = Math.floor(tid / 60);
//     const sekunder = tid % 60;
//     display.textContent = `${minutter}:${sekunder < 10 ? "0" : ""}${sekunder}`;

//     if (--tid < 0) {
//       clearInterval(timerInterval);
//       display.textContent = "0:00";

//       // Call the onFinish callback if provided
//       if (onFinish) onFinish();

//       // Other stuff like showing popup or redirecting...
//       // e.g., window.location.href = redirectUrl;
//     }
//   }, 1000);
// }
