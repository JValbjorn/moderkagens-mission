let gamePaused = true;



function finishGameState() {
  // Reset game state variables
  gamePaused = true;
  tid = startTid;
  usedPositions = [];

  // Clear the DOM elements related to the game
  const wasteContainer = document.getElementById("waste-container");
  if (wasteContainer) {
    wasteContainer.innerHTML = "";
  }

  const virusContainer = document.getElementById("virus-container");
  if (virusContainer) {
    virusContainer.innerHTML = "";
  }

  const foodContainer = document.querySelector(".blodbane-left");
  if (foodContainer) {
    foodContainer.innerHTML = "";
  }

  // Reset any other game-related elements or variables as needed
}
