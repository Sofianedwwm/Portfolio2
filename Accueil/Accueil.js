"use strict"

// script.js
const header = document.getElementById('header');

document.addEventListener('mousemove', (event) => {
    // Vérifie si la souris est dans la zone du haut de la page
    if (event.clientY <= 50) {
        header.style.transform = 'translateY(0)'; // Affiche le header
    } else if (!header.matches(':hover')) {
        header.style.transform = 'translateY(-100%)'; // Cache le header
    }
});

// Si vous voulez garder le header visible lorsqu'on y passe la souris
header.addEventListener('mouseenter', () => {
    header.style.transform = 'translateY(0)';
    header.style.transition = '1s ease'
});

header.addEventListener('mouseleave', () => {
    header.style.transform = 'translateY(-100%)';
    header.style.transition = '1s ease'
});
