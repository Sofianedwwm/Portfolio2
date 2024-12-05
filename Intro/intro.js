"use strict";

// Liste des vidéos (chemins des fichiers)
const videos = [
    "../assets/gif2.mp4",
    "../assets/gif3.mp4",
    "../assets/videobig.mp4",
    "../assets/gif4.mp4",
    "../assets/gif5.mp4"
];

const logo = document.getElementById("logobg");
const videoContainer = document.createElement("video"); // Création d'un élément vidéo dynamique
document.body.appendChild(videoContainer); // Ajout de la vidéo dans le corps du document

// Configuration par défaut pour les vidéos
videoContainer.setAttribute("autoplay", true);
videoContainer.setAttribute("loop", true);
videoContainer.setAttribute("muted", true);
videoContainer.setAttribute("playsinline", true); // Pour iOS et autres navigateurs
videoContainer.style.position = "absolute";
videoContainer.style.top = 0;
videoContainer.style.left = 0;
videoContainer.style.width = "100%";
videoContainer.style.height = "100%";
videoContainer.style.objectFit = "cover";
videoContainer.style.zIndex = "-1"; // Derrière le contenu

let currentIndex = 0;

// Fonction pour changer la vidéo
function changebg() {
    currentIndex = (currentIndex + 1) % videos.length;
    videoContainer.src = videos[currentIndex];
    console.log(`Vidéo actuelle : ${videos[currentIndex]}`);
}



// Écouteur d'événement pour changer la vidéo au clic sur le logo
logo.addEventListener("click", changebg);

// Charger la première vidéo au démarrage
videoContainer.src = videos[currentIndex];

// ------------------------------


// Tableau des couleurs pour les transitions
const colorPaletteH1 = ["#1F51FF", "#FF073A", "#FF6F00", "#39FF14", "#B0B0B0", "#FF007F", "#8A2BE2"]; // Couleurs pour le h1
const colorPaletteSpan = ["#8A2BE2", "#FF007F", "#B0B0B0", "#39FF14", "#FF6F00", "#FF073A", "#1F51FF"]; // Couleurs pour le span

// Sélection des éléments h1 et span
const h1Element = document.querySelector(".BarreMilieu h1");
const spanElement = document.querySelector(".BarreMilieu span");



// Fonction pour changer les couleurs
function changeColors() {
    // Mise à jour des couleurs
    h1Element.style.color = colorPaletteH1[currentIndex];
    spanElement.style.color = colorPaletteSpan[currentIndex];

    // Mise à jour de l'index de manière circulaire
    currentIndex = (currentIndex + 1) % colorPaletteH1.length;
}

// Changer les couleurs toutes les 2 secondes
setInterval(changeColors, 2000); // 2000ms = 2 secondes