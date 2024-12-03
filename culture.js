document.addEventListener("DOMContentLoaded", () => {
    // Gestion des cartes dans .one-x et .two-x
    const cards = document.querySelectorAll(".one-x div, .two-x div");

    // Fonction pour gérer l'affichage en fonction de la largeur de l'écran
    function handleResize() {
        if (window.innerWidth < 900) {
            // Affiche tous les éléments (img, h3, p) pour écran < 900px
            cards.forEach(card => {
                const img = card.querySelector("img");
                const p = card.querySelector("p");

                img.style.display = "block"; // Affiche l'image
                p.style.display = "block";  // Affiche le paragraphe
            });
        } else {
            // Réinitialise l'état par défaut pour écran >= 900px
            cards.forEach(card => {
                const img = card.querySelector("img");
                const p = card.querySelector("p");

                img.style.display = "block"; // Affiche l'image
                p.style.display = "none";   // Cache le paragraphe
            });
        }
    }

    const searchBar = document.querySelector(".search-bar");

    // Ajout de l'événement "input" pour la recherche
    searchBar.addEventListener("input", (m) => {
        const result = m.target.value.toLowerCase(); // Récupère la valeur entrée dans la barre de recherche
    
        // Sélectionne tous les éléments <section> dans les <article>
        const sections = document.querySelectorAll("main article section");
    
        // Parcourt chaque section et applique le filtre
        sections.forEach(section => {
            const text = section.textContent.toLowerCase(); // Texte de la section
            section.style.display = text.includes(result) ? '' : 'none'; // Affiche ou masque
        });
    });
    // // Initialisation
    handleResize();

    // Attache l'événement resize pour surveiller les changements de taille
    window.addEventListener("resize", handleResize);

    // Gestion du clic pour les cartes
    cards.forEach(card => {
        const img = card.querySelector("img");
        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");

        // Initialisation : seul le h3 et l'image sont visibles
        p.style.display = "none";

        card.addEventListener("click", () => {
            if (p.style.display === "none") {
                // Affiche le titre (h3) et le paragraphe (p), masque l'image
                img.style.display = "none";
                p.style.display = "block";
            } else {
                // Retour à l'état initial : affiche l'image et le titre, masque le paragraphe
                img.style.display = "block";
                p.style.display = "none";
            }
        });
    });
<<<<<<< HEAD
});
document.getElementById("close-welcome").addEventListener("click", function () {
    const overlay = document.getElementById("welcome-overlay");
    overlay.style.display = "none"; // Cache la page de bienvenue
  });
=======

    // Sélectionne l'élément du compte à rebours
const countdown = document.getElementById("countdown");
const event = document.getElementsByClassName("one")
// Définis la date de l'événement
const eventDate = new Date("2024-12-25T20:00:00").getTime();

// Met à jour le compte à rebours toutes les secondes
const updateCountdown = setInterval(function() {
  const now = new Date().getTime();  // Temps actuel
  const timeRemaining = eventDate - now;  // Temps restant jusqu'à l'événement

  // Calcul des jours, heures, minutes et secondes
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Affiche le compte à rebours sur la page
  countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
  
  // Si l'événement est arrivé, affiche un message spécial
  if (timeRemaining < 0) {
    clearInterval(updateCountdown);  // Arrête le compte à rebours
    countdown.innerHTML = "L'événement a commencé ! 🎉";
  }
}, 1000);  // Met à jour chaque seconde
});
>>>>>>> dev
