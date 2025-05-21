"use strict";

window.addEventListener("DOMContentLoaded", function (){
const performance = document.getElementById('congrats-btn');



let samletScore = gfProcent + bfProcent + wasteProcent;
console.log(samletScore);

performance.addEventListener('click', () =>{
    console.log("Du har trykket på end-knappen")
// if(samletScore > 90){
//     window.location.href = 'game-end1.html';
// }

// else if(65> samletScore > 65){
//     window.location.href = 'game-end2.html';
// }


// else{
//     window.location.href = 'game-end3.html';
// }
});
});