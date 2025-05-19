"use strict";

function addOneCart(produkt) {
    let spladd = cart.find(bajer => bajer.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
    //console.logs er bare for at tjekke om vi når til dette sted i scriptet,
    // og om de har en værdi eller om de er "undefined"
    console.log("tilføjet 1");
    console.log(produkt);
    console.log(spladd);
}