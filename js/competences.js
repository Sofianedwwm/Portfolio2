document.addEventListener('DOMContentLoaded', function() {
    // Animation des barres de progression
    const skillItems = document.querySelectorAll('.skill-item');
    
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
}); 