"use strict";

let scoreArray = [
    { type: "good-food", quantity: 0, worth: 10, total: 0 },
    { type: "bad-food", quantity: 0, worth: 5, total: 0 },
    { type: "waste", quantity: 0, worth: 10, total: 0 },
    { type: "virus", quantity: 0, worth: 10, total: 0 }
]

// Gemmer kurvens indhold i localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('pointSystem', JSON.stringify(scoreArray));
}

// Henter kurvens indhold fra localStorage ved sideindlæsning
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('pointSystem');
    if (storedPoints) {
        cart = JSON.parse(storedPoints); // Konverterer string til array
        updateUIFromCart(); // Opdaterer UI med hentede data
    }
}

// Opdaterer UI med kurvens data
//husk at bajer => er en forkortelse af function(bajer), det gør man typisk i f.eks. i en forEach 
function updateUIFromCart() {
    scoreArray.forEach(micro => {
        let antalIndi = document.getElementById(micro.type);
        let vaerdIndi = document.getElementById(micro.type + "-total");

        if (antalIndi && vaerdIndi) {
            antalIndi.value = bajer.quantity;
            vaerdIndi.value = bajer.total; // Rettelse: Bruger bajer.total
        }
    });
    //Disse er til for at at input-felterne "total/samlet...Price()" er opdateret,
    //når man går væk fra checkout siden og siden hen kommer tilbage igen
    samletHyldeblomstPrice();
    samletCitronPrice();
    samletIngefaerPrice();
    samletClassicPrice();
    samletLakridsPrice();
    
    totalPrice();
    console.log("updateUI");
}



// Loader data fra localStorage ved opstart
window.onload = function () {
    loadCartFromLocalStorage();
    visFirst();
    visSecond();
    visThird();
    visFourth();
    visFifth();
    visProdukt();
};