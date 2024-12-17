"use strict"

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Header Animation
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ajoute ou retire la classe scrolled en fonction de la position du scroll
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});
