"use strict";

function lommeregner(){
    let gf = scoreArray.filter(produkt =>produkt.type.includes("good"));
    let gftal = gf.reduce((sum, ele) => sum + ele.quantity, 0);

    let gfT = Object.keys(generatedCount)
        .filter(key => key === "good")
        .reduce((sum, key) => sum + generatedCount[key], 0);

    let gfProcent = gftal / gfT *100;
    console.log(gfProcent);
}

const classicProdukter = cart.filter(produkt =>produkt.type.includes("classic"));
     const classicSum = classicProdukter.reduce((sum, ele) => sum + ele.total, 0);
     document.getElementById("classicSum").value = classicSum;