"use strict";

function goodLom(){
    let gf = scoreArray.filter(produkt =>produkt.type.includes("good"));
    let gftal = gf.reduce((sum, ele) => sum + ele.quantity, 0);

    let gfT = Object.keys(generatedCount)
        .filter(key => key === "good")
        .reduce((sum, key) => sum + generatedCount[key], 0);

    let gfProcent = gftal / gfT *100;
    console.log(gfProcent);
    updateCircularProgress("good", gfProcent);

}

function badLom(){
    let bf = scoreArray.filter(produkt =>produkt.type.includes("bad"));
    let bftal = bf.reduce((sum, ele) => sum + ele.quantity, 0);

    let bfT = Object.keys(generatedCount)
        .filter(key => key === "bad")
        .reduce((sum, key) => sum + generatedCount[key], 0);

    let bfProcent = bftal / bfT *100;
    console.log(bfProcent);
    updateCircularProgress("bad", bfProcent);
}

function wasteLom(){
    let waste =scoreArray.filter(produkt =>produkt.type.includes("waste"));
    let wastetal = waste.reduce((sum, ele) => sum + ele.quantity, 0);
    let limit = 15;
    let wasteProcent = wastetal / limit*100;
    console.log(wasteProcent);
    updateCircularProgress("waste", wasteProcent);
}

// const classicProdukter = cart.filter(produkt =>produkt.type.includes("classic"));
//      const classicSum = classicProdukter.reduce((sum, ele) => sum + ele.total, 0);
//      document.getElementById("classicSum").value = classicSum;


function updateCircularProgress(type, procent) {
    const wrapper = document.querySelector(`.circle-progress[data-type="${type}"]`);
    if (!wrapper) return;

    const circle = wrapper.querySelector(".progress");
    const text = wrapper.querySelector(".percentage");

    if (!circle || !text) return;

    procent = Math.min(100, Math.max(0, procent));

    const radius = 15.9155; // svarer til din path-radius
    const circumference = 2 * Math.PI * radius;

    const offset = circumference * (1 - procent / 100);

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;

    text.textContent = `${Math.round(procent)}%`;
}



window.addEventListener('DOMContentLoaded', function () {
    loadPointsFromLocalStorage();
    loadGeneratedCount();

    // Opdater cirkler direkte baseret på localStorage
    goodLom();
    badLom();
    wasteLom();
});

