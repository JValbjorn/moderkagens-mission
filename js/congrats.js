"use strict";


// let samletScore = gfProcent + bfProcent + wasteProcent;
// console.log(samletScore);

window.addEventListener('DOMContentLoaded', function () {
   loadPointsFromLocalStorage();
    loadGeneratedCount();

    goodLom();
    badLom();
    wasteLom();
});


function endings(){
    console.log("Du har trykket på KNAPPEN!");
     let samletScore = 0;
     let gennemsnit = 0;

    setTimeout(() => {
         samletScore = gfProcent + bfProcent + wasteProcent;
         gennemsnit = samletScore/3;
        console.log("gennemsnittet er", gennemsnit);
        console.log("Samlet score:", samletScore);
    }, 100); // Vent lidt for at sikre alle funktioner er færdige

    if(gennemsnit > 90){
       window.location.href = 'game-end1.html';
    }

    else if(90 > gennemsnit > 69){
        window.location.href = 'game-end2.html';
    }

    else{
        window.location.href = 'game-end3.html';
    }

}
