document.addEventListener("DOMContentLoaded", () => {
    // Charger la navbar dynamiquement
    fetch("index.html")
        .then(response => {
            if (!response.ok) throw new Error("Erreur lors du chargement de la navbar");
            return response.text();
        })
        .then(data => {
            // Insère la navbar dans l'élément avec l'id "navbar"
            const navbarContainer = document.createElement("div");
            navbarContainer.id = "navbar";
            navbarContainer.innerHTML = data;
            document.body.prepend(navbarContainer); // Ajoute la navbar en haut de la page
        })
        .catch(error => console.error("Erreur : ", error));

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

    // Initialisation
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
});