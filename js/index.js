document.addEventListener('DOMContentLoaded', function() {
    // Configuration des textes à animer
    const texts = [
        "Développeur Web Full Stack",
        "Passionné par le Code",
        "Créatif & Innovant",
        "À la Recherche de Nouveaux Défis"
    ];

    const typingElement = document.querySelector('.typing');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Suppression du texte
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Écriture du texte
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Vitesse de frappe
        let typeSpeed = isDeleting ? 50 : 100;

        // Si le texte est complètement écrit
        if (!isDeleting && charIndex === currentText.length) {
            // Pause avant de commencer à supprimer
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Passage au texte suivant
            textIndex = (textIndex + 1) % texts.length;
            // Petite pause avant de commencer le prochain mot
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Démarrer l'animation après un court délai
    setTimeout(type, 1000);
}); 