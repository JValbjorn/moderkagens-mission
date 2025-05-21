"use strict";

function goodLom(){
    let gf = scoreArray.filter(produkt =>produkt.type.includes("good"));
    let gftal = gf.reduce((sum, ele) => sum + ele.quantity, 0);

    let gfT = Object.keys(generatedCount)
        .filter(key => key === "good")
        .reduce((sum, key) => sum + generatedCount[key], 0);

    let gfProcent = gftal / gfT *100;
    console.log(gfProcent);
}

function badLom(){
    let bf = scoreArray.filter(produkt =>produkt.type.includes("bad"));
    let bftal = bf.reduce((sum, ele) => sum + ele.quantity, 0);

    let bfT = Object.keys(generatedCount)
        .filter(key => key === "bad")
        .reduce((sum, key) => sum + generatedCount[key], 0);

    let bfProcent = bftal / bfT *100;
    console.log(bfProcent);
}

function wasteLom(){
    let waste =scoreArray.filter(produkt =>produkt.type.includes("waste"));
    let wastetal = waste.reduce((sum, ele) => sum + ele.quantity, 0);
    let limit = 15;
    let wasteProcent = wastetal / limit*100;
    console.log(wasteProcent);
}

const classicProdukter = cart.filter(produkt =>produkt.type.includes("classic"));
     const classicSum = classicProdukter.reduce((sum, ele) => sum + ele.total, 0);
     document.getElementById("classicSum").value = classicSum;