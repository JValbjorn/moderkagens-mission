"use strict"

const madIkoner = [
    { src: "media/img/food-items/blueberry.png", type: "god" },
    { src: "media/img/food-items/blue-donut.png", type: "dårlig" }
  ];

  function genererMadikon() {
    const ikonData = madIkoner[Math.floor(Math.random() * madIkoner.length)];
    const img = document.createElement("img");
    img.src = ikonData.src;
    img.classList.add("food-icon");
    img.dataset.type = ikonData.type;
  
    // Klik-funktion
    img.addEventListener("click", () => {
      if (ikonData.type === "god") {
        console.log("God ernæring!");
        // Tilføj point, feedback etc.
      } else {
        console.log("Dårlig ernæring!");
      }
      img.remove(); // fjerner efter klik
    });
  
    document.querySelector(".blodbane-left").appendChild(img);
  
    // Fjern ikon efter animation
    setTimeout(() => img.remove(), 5000);
  }

  // Generér nyt ikon hver 2. sekund
setInterval(genererMadikon, 2000); 