// const homePopup = document.getElementById("home"); 

// window.onclick = (event) => {
//     if (event.target === homePopup) {
//         homeToIndex();
//     }
// };

// function homeToIndex() {
//     console.log("homeToIndex");
//     homePopup.style.display = "block";
// }

// function exitToHome() {
//     window.location.href = "index.html";
// }

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector(".home");
    const confirmPopup = document.getElementById("confirm-box");
    const exitBtn = document.getElementById("exit");
    const stayBtn = document.getElementById("stay");
  
    if (!homeButton) {
      console.warn("Home button not found!");
      return;
    }
  
    homeButton.onclick = () => {
      console.log("Home button clicked");
      confirmPopup.style.display = "block";
    };
  
    exitBtn.onclick = () => {
      console.log("Exit button clicked");
      window.location.href = "index.html";
    };
  
    stayBtn.onclick = () => {
      console.log("Stay button clicked");
      confirmPopup.style.display = "none";
    };
  
    window.onclick = (event) => {
      if (event.target === confirmPopup) {
        confirmPopup.style.display = "none";
      }
    };
  });





  