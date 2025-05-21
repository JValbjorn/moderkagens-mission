"use strict";

const performance = document.getElementById('congrats-btn');
let samletScore = gfProcent + bfProcent + wasteProcent;
console.log(samletScore);

performance.addEventListener('click', () =>{
if(samletScore > 90){
    window.location.href = 'game-end1.html';
}

else if(65> samletScore > 65){
    window.location.href = 'game-end2.html';
}


else{
    window.location.href = 'game-end3.html';
}
});