// Sélectionner les éléments
const carrousel = document.querySelector('.carrousel');
const items = document.querySelectorAll('.carrousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const featuredArticle = document.getElementById('featured-article');
const featuredImage = document.getElementById('featured-image');  // Sélectionner l'image de l'article mis en avant

let currentIndex = 0; // Index de l'article actuellement affiché

// Fonction pour mettre à jour la position du carrousel
function updateCarrousel() {
    const offset = -currentIndex * 50; // Déplace le carrousel de 50% de la largeur de chaque article
    carrousel.style.transform = `translateX(${offset}%)`;
}

// Fonction pour afficher un article dans la section "Article Mis en Avant"
function showFeaturedArticle(article) {
    // Copier le contenu de l'article cliqué dans la section mis en avant
    const title = article.querySelector('h2').innerText;
    const content = article.querySelector('p').innerText;
    const imgSrc = article.querySelector('img').src;  // Récupérer l'URL de l'image de l'article

    // Mettre à jour le contenu de l'article mis en avant (titre, texte, image)
    featuredArticle.querySelector('h2').innerText = title;
    featuredArticle.querySelector('p').innerText = content;
    featuredImage.src = imgSrc;  // Mettre à jour l'image dans l'article mis en avant
}

// Événement pour le bouton "Suivant"
nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++; // Passer à l'article suivant
    } else {
        currentIndex = 0; // Revenir au premier article après le dernier
    }
    updateCarrousel();
});

// Événement pour le bouton "Précédent"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Passer à l'article précédent
    } else {
        currentIndex = items.length - 1; // Revenir au dernier article après le premier
    }
    updateCarrousel();
});

// Ajouter un événement de clic à chaque article du carrousel
items.forEach(item => {
    item.addEventListener('click', () => {
        showFeaturedArticle(item);  // Afficher l'article cliqué dans la section mis en avant
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const searchBar = document.querySelector(".search-bar");
    if (window.scrollY > 20) {
        // 20px correspond à environ 2 cm
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});