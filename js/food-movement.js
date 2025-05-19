"use strict"

const plopSound = new Audio("media/audio/plop.mp3");

const madIkoner = [
    { src: "media/img/food-items/blueberry.png", type: "god" },
    { src: "media/img/food-items/banana.png", type: "god" },
    { src: "media/img/food-items/avcado.png", type: "god" },
    { src: "media/img/food-items/carrot.png", type: "god" },
    { src: "media/img/food-items/fried-egg.png", type: "god" },
    { src: "media/img/food-items/salmon.png", type: "god" },
    { src: "media/img/food-items/strawberry.png", type: "god" },
    { src: "media/img/food-items/water.png", type: "god" },
    { src: "media/img/food-items/blue-donut.png", type: "dårlig" },
    { src: "media/img/food-items/wine.png", type: "dårlig" },
    { src: "media/img/food-items/fries.png", type: "dårlig" },
    { src: "media/img/food-items/pizza.png", type: "dårlig" },
    { src: "media/img/food-items/pink-donut.png", type: "dårlig" },
    { src: "media/img/food-items/lakrids.png", type: "dårlig" },
    { src: "media/img/food-items/ginger.png", type: "dårlig" },
    { src: "media/img/food-items/coffee.png", type: "dårlig" },
];

function genererMadikon() {
    const ikonData = madIkoner[Math.floor(Math.random() * madIkoner.length)];
    const img = document.createElement("img");
    img.src = ikonData.src;
    img.classList.add("food-icon");
    img.dataset.type = ikonData.type;

    // Remove icon after animation ends (the movement animation)
    img.addEventListener("animationend", (e) => {
        if (e.animationName === "curveDown") {
            img.remove();
        }
    });

    img.addEventListener("click", () => {
    // Play bite sound
    plopSound.currentTime = 0;
    plopSound.play();

    // Remove the icon
    img.remove();
});

    document.querySelector(".blodbane-left").appendChild(img);
}


// Justeret til 3 sekunder (3000ms)
const spawnInterval = setInterval(genererMadikon, 1000);



