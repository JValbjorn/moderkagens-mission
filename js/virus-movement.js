"use strict"

const virusContainer = document.getElementById("virus-container")

const virusIkoner = [
    { src: "../media/img/virus/herpes.png", type: "virus" },
    { src: "../media/img/virus/estreptococo.png", type: "virus" },
    { src: "../media/img/virus/papiloma.png", type: "virus" },
]; 

const spawnPositions = [
    { x: 160, y: 800 },
    { x: 300, y: 900 },
    { x: 500, y: 900 },
    { x: 650, y: 700 },
    { x: 800, y: 800 }
  ];

function spawnVirusIcon() {
    const ikonData = virusIkoner[Math.floor(Math.random() * virusIkoner.length)];
    const spawn = spawnPositions[Math.floor(Math.random() * spawnPositions.length)]
}; 

    // Create the image element
    const img = document.createElement("img");
    img.src = ikonData.src;
    img.classList.add("virus-icon");
    img.style.position = "absolute";
    img.style.left = spawn.x + "px";
    img.style.top = "-100px"; // Start above the screen

    // Animate down
    img.animate(
        [
            { top: "-100px" },
            { top: spawn.y + "px" }
        ],
        {
            duration: 2500,
            fill: "forwards"
        }
    );

    // Remove after animation
    setTimeout(() => img.remove(), 2500);

    // Add to DOM
    virusContainer.appendChild(img);
     
    setInterval(spawnVirusIcon, 2000); 