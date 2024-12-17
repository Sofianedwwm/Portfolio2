document.addEventListener('DOMContentLoaded', function() {
    // Variables pour le carrousel
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Créer les points de navigation
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Fonction pour aller à une slide spécifique
    function goToSlide(index) {
        cards[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        cards[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Event listeners pour les boutons
    prevBtn.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    });
}); 