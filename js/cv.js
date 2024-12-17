"use strict"

// script.js
const header = document.getElementById('header');
document.addEventListener('DOMContentLoaded', function() {
    // Animation du header au scroll
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    setTimeout(typeWriter, 1000);
});