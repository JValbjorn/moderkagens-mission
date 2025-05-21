"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const popSound = new Audio("media/audio/pop.mp3");
  const wasteContainer = document.getElementById("waste-container");

  const wasteIcons = [
    { src: "media/img/affaldsstoffer/waste-orange.png", type: "waste" },
    { src: "media/img/affaldsstoffer/waste-pink.png", type: "waste" },
    { src: "media/img/affaldsstoffer/waste-yellow.png", type: "waste" },
  ];

  const spawnPositions = [
    { x: 160, y: 1075 },
    { x: 300, y: 1020 },
    { x: 500, y: 1000 },
    { x: 650, y: 1033 },
    { x: 800, y: 1150 }
  ];

  let usedPositions = [];

  function spawnWasteIcon() {
    const availablePositions = spawnPositions.filter(pos => !usedPositions.includes(pos));
    if (availablePositions.length === 0) return;

    const pos = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    usedPositions.push(pos);

    const randomWaste = wasteIcons[Math.floor(Math.random() * wasteIcons.length)];

    //Triers local addpoint og local storage bavl
        if (generatedCount[randomWaste.type] !== undefined) {
        generatedCount[randomWaste.type]++; 
        saveGeneratedCount();
        updateScoreDisplay(); // hvis du vil opdatere scoren live
    }

    const icon = document.createElement("img");
    icon.src = randomWaste.src;
    icon.classList.add("waste-icon");
    icon.dataset.type = randomWaste.type;

    icon.style.position = "absolute";
    icon.style.left = `${pos.x}px`;
    icon.style.top = `${pos.y}px`;
    icon.style.cursor = "pointer";

    icon.addEventListener("click", () => {
      popSound.currentTime = 0;
      popSound.play();

      //window.event = event; //prøver at linke til event i point-counter...I guess?
        addPoint();
        
        wasteLom();

      icon.remove();
      usedPositions = usedPositions.filter(p => p !== pos);

      const newPos = { 
        x: window.innerWidth - 300,  // 150px fra højre kant
        y: window.innerHeight - 800
      };

      const exitIcon = document.createElement("img");
      exitIcon.src = randomWaste.src;
      exitIcon.classList.add("waste-icon");

      exitIcon.style.position = "absolute";
      exitIcon.style.left = `${newPos.x}px`;
      exitIcon.style.top = `${newPos.y}px`;
      exitIcon.style.pointerEvents = "none";
      exitIcon.style.animation = "slideOut 2s ease-out forwards";

      wasteContainer.appendChild(exitIcon);

      setTimeout(() => {
        exitIcon.remove();
      }, 2000);
    });

    wasteContainer.appendChild(icon);
  }

  // Første ikon spawn + interval hvert 3. sekund
  spawnWasteIcon();
  setInterval(spawnWasteIcon, 3000);
});

