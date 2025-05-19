const popUp = document.getElementById("pop-up");
const close = document.getElementById(".close");

window.addEventListener("DOMContentLoaded", () => {
    popUp.style.display = "block";
});

close.onclick = () => {
    popUp.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === popUp) {
        popUp.style.display = "none";
    }
};