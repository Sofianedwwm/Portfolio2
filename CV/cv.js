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


const arcContainer = document.getElementById('arcContainer');
const images = arcContainer.querySelectorAll('img');
const radius = 250; // Rayon de l'arc

images.forEach((img, index) => {
    const angle = Math.PI * (index / (images.length - 1)); // Angle en radians pour chaque image
    const x = radius * Math.cos(angle) + arcContainer.offsetWidth / 2 - img.offsetWidth / 2;
    const y = radius * Math.sin(angle);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
});