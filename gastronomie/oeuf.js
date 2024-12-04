// Ajouter un écouteur d'événements pour charger le contenu après le DOM
window.addEventListener('DOMContentLoaded', () => {
    // Crée une image pour le poulet
    const poulet = document.createElement('img');
    poulet.src = '/assets/depositphotos_15554125-stock-illustration-cartoon-chicken.jpg'; // Remplacez par l'URL de votre image de poulet
    poulet.alt = 'Poulet';
    poulet.style.position = 'fixed';
    poulet.style.bottom = '0';
    poulet.style.left = '0';
    poulet.style.transform = 'translateX(0)';
    poulet.style.width = '100px'; // Taille initiale
    poulet.style.transition = 'all 0.3s ease';

    // Ajoute le poulet au corps du document
    document.body.appendChild(poulet);

    // Variables pour suivre la taille et le nombre de clics
    let taille = 100; // Taille initiale en pixels
    let clics = 0;

    // Ajoute un gestionnaire d'événements de clic sur le poulet
    poulet.addEventListener('click', () => {
        if (clics < 15) {
            clics++;
            taille *= 1.15; // Augmente la taille de 15%
            // biome-ignore lint/style/useTemplate: <explanation>
            poulet.style.width = taille + 'px';
        } else if (clics === 15) {
            // Affiche un message après le 15e clic
            alert('AAAARRRRRRREEEETTTTTTEEEE JJJJJEEEEE VVVAAAIIIISSSS EEEECCCCCLLLLLAAAATTTTEEERRRRRR!!!!!');
            taille = 100; // Réinitialise la taille
            // biome-ignore lint/style/useTemplate: <explanation>
            poulet.style.width = taille + 'px';
            clics = 0; // Réinitialise le compteur de clics
        }
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const searchBar = document.querySelector(".search-bar");
    if (window.scrollY > 20) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
    });