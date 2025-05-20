"use strict"

const plopSound = new Audio("media/audio/plop.mp3");

const virusIkoner = [
    { src: "media/img/virus/herpes.png"},
    { src: "media/img/virus/papiloma.png"},
    { src: "media/img/virus/estreptococo.png"}
];

const spawnPositions = [
    { x: -30, y: 300 },
    { x: -30, y: 500 },
    { x: -30, y: 700 }
  ];

function genererVirusIkon() {
    const ikonData = virusIkoner[Math.floor(Math.random() * virusIkoner.length)];
    const img = document.createElement("img");
    img.src = ikonData.src;
    img.classList.add("virus-icon");

    // Remove icon after animation ends (the movement animation)
    img.addEventListener("animationend", (e) => {
        if (e.animationName === "virus-movement") {
            img.remove();
        }
    });

    img.addEventListener("click", () => {
        // Play bite sound
        plopSound.currentTime = 0;
        plopSound.play();

        //window.event = event; //prøver at linke til event i point-counter...I guess?
        addPoint();
        img.remove();
    });

    
} 

setInterval(genererVirusIkon, 1000);