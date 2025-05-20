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
//total counter til at beregne scores
let generatedCount = {
    good: 0,
    bad: 0,
    waste: 0,
    virus: 0
};

function saveGeneratedCount() {
    localStorage.setItem("generatedCount", JSON.stringify(generatedCount));
}

function loadGeneratedCount() {
    const stored = localStorage.getItem("generatedCount");
    if (stored) {
        generatedCount = JSON.parse(stored);
    }
}



function updateScoreDisplay() {
    scoreArray.forEach(item => {
        const type = item.type;
        const clicked = item.quantity;
        const shown = generatedCount[type] || 0;

        const el = document.getElementById(`score-${type}`);
        if (el) {
            
            el.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: ${clicked} / ${shown}`;
        }
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)}: ${clicked} / ${shown}`);
    });
}


function resetPointSystem() {
    scoreArray.forEach(micro => {
        micro.quantity = 0;
        micro.total = 0;

        Object.keys(generatedCount).forEach(type => {
            generatedCount[type] = 0;
        });
        saveGeneratedCount();
        updateScoreDisplay();
        
    }); 
    console.log("PointSystem reset");
    savePointsToLocalStorage();
    updateUIFromCart();
}


// Loader data fra localStorage ved opstart
window.addEventListener('DOMContentLoaded', function () {
    loadPointsFromLocalStorage();
    loadGeneratedCount();
    
   
});

const urhere = window.location.pathname;
    const pageName = urhere.substring(urhere.lastIndexOf('/') + 1);

 const resetCondition = 'game1-food.html';
    
    if (resetCondition.includes(pageName)) {
        console.log('Auto-reset page detected:', pageName);
        resetPointSystem();
    }