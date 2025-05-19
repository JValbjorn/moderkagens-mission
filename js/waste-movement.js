"use strict"

const wasteContainer = document.getElementById("waste-container");

const wasteIcons = [
  { src: "media/img/affaldsstoffer/waste-orange.png", type: "waste" },
  { src: "media/img/affaldsstoffer/waste-pink.png", type: "waste" },
  { src: "media/img/affaldsstoffer/waste-yellow.png", type: "waste" },
];

const spawnPositions = [
  { x: 160, y: 1200 },
  { x: 300, y: 1100 },
  { x: 500, y: 1100 },
  { x: 650, y: 1100 },
  { x: 800, y: 1200 }
];

// Liste over brugte positioner
let usedPositions = [];

function spawnWasteIcon() {
  // Find ledige positioner
  const availablePositions = spawnPositions.filter(pos => !usedPositions.includes(pos));

  // Hvis alle positioner er brugt, gør ingenting
  if (availablePositions.length === 0) return;

  // Vælg en tilfældig ledig position
  const pos = availablePositions[Math.floor(Math.random() * availablePositions.length)];

  // Markér positionen som brugt
  usedPositions.push(pos);

  // Vælg et affaldsikon
  const randomWaste = wasteIcons[Math.floor(Math.random() * wasteIcons.length)];
  const icon = document.createElement("img");
  icon.src = randomWaste.src;
  icon.classList.add("waste-icon");

  icon.style.position = "absolute";
  icon.style.left = `${pos.x}px`;
  icon.style.top = `${pos.y}px`;
  icon.style.cursor = "pointer"; 


  icon.addEventListener("click", () => {
    icon.remove();
    // Gør positionen ledig igen
    usedPositions = usedPositions.filter(p => p !== pos);
  });

  wasteContainer.appendChild(icon);
}

// Kør funktionen hvert sekund
setInterval(spawnWasteIcon, 4000);


