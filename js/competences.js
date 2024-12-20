document.addEventListener('DOMContentLoaded', function() {
    // Gestion du défilement des logos
    const banner = document.querySelector('.scroll-banner .logos');
    const clone = banner.cloneNode(true);
    banner.parentNode.appendChild(clone);

    // Animation des barres de progression
    const skillItems = document.querySelectorAll('.skill-item');

    if (skillItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.dataset.progress;
                    const progressBar = entry.target.querySelector('.progress');
                    progressBar.style.width = `${progress}%`;
                }
            });
        }, { threshold: 0.5 });

        skillItems.forEach(item => observer.observe(item));
    }
    
    const header = document.getElementByclass('header');
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

});
