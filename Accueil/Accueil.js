"use strict"

// script.js
const header = document.getElementById('header');

document.addEventListener('mousemove', (event) => {
    // Vérifie si la souris est dans la zone du haut de la page
    if (event.clientY <= 50) {
        header.style.transform = 'translateY(0)'; 
    } else if (!header.matches(':hover')) {
        header.style.transform = 'translateY(-100%)'; 
    }
});


header.addEventListener('mouseenter', () => {
    header.style.transform = 'translateY(0)';
    header.style.transition = '1s ease'
});

header.addEventListener('mouseleave', () => {
    header.style.transform = 'translateY(-100%)';
    header.style.transition = '1s ease'
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".image");
    const text = document.querySelector(".text");

    // Ajout des animations après un léger délai pour synchronisation
    setTimeout(() => {
        image.style.animation = "slideInFromRight 1.5s ease-out forwards";
        text.style.animation = "slideInFromLeft 1.5s ease-out forwards";
    }, 500); // Délai de 500ms pour un effet plus fluide
});
