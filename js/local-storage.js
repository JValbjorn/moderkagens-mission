"use strict";

let scoreArray = [
    { type: "good", quantity: 0, worth: 10, total: 0 },
    { type: "bad", quantity: 0, worth: 5, total: 0 },
    { type: "waste", quantity: 0, worth: 10, total: 0 },
    { type: "virus", quantity: 0, worth: 10, total: 0 }
]

// Gemmer kurvens indhold i localStorage
function savePointsToLocalStorage() {
    localStorage.setItem('pointSystem', JSON.stringify(scoreArray));
}

// Henter kurvens indhold fra localStorage ved sideindlæsning
function loadPointsFromLocalStorage() {
    const storedPoints = localStorage.getItem('pointSystem');
    if (storedPoints) {
        scoreArray = JSON.parse(storedPoints); // Konverterer string til array
        updateUIFromCart(); // Opdaterer UI med hentede data
    }
}

// Opdaterer UI med kurvens data
//husk at bajer => er en forkortelse af function(bajer), det gør man typisk i f.eks. i en forEach 
function updateUIFromCart() {
    scoreArray.forEach(micro => {
        let antalIndi = document.getElementById(micro.type);
        // let vaerdIndi = document.getElementById(micro.type + "-total");

        if (antalIndi && vaerdIndi) {
            antalIndi.value = micro.quantity;
            vaerdIndi.value = micro.total; // Rettelse: Bruger bajer.total
        }
    });
   
    console.log("updateUI");
}


function resetPointSystem() {
    scoreArray.forEach(micro => {
        micro.quantity = 0;
        micro.total = 0;
        
    }); 
    console.log("PointSystem reset");
    savePointsToLocalStorage();
    updateUIFromCart();
}


// Loader data fra localStorage ved opstart
window.addEventListener('DOMContentLoaded', function () {
    loadPointsFromLocalStorage();
    visFirst();
   
});