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

document.getElementById("close-welcome").addEventListener("click", function () {
  const overlay = document.getElementById("welcome-overlay");
  overlay.style.display = "none"; // Cache la page de bienvenue
});

// Sélection des éléments
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const topItems = document.querySelector(".top-items");
const items = document.querySelectorAll(".top-item");

// Variables
let currentIndex = 0;

// Fonction pour déplacer les items
function updateCarousel() {
  // Réorganiser les éléments si nécessaire pour simuler l'effet circulaire
  if (currentIndex < 0) {
    // Si on dépasse à gauche, on prend le dernier élément et on le met au début
    topItems.prepend(topItems.lastElementChild);
    currentIndex = 0;
  } else if (currentIndex >= items.length) {
    // Si on dépasse à droite, on prend le premier élément et on le met à la fin
    topItems.appendChild(topItems.firstElementChild);
    currentIndex = items.length - 1;
  }

  // Réinitialiser la position
  topItems.style.transition = "none"; // On désactive temporairement la transition
  topItems.style.transform = "translateX(0)";
  setTimeout(() => {
    topItems.style.transition = "transform 0.5s ease-in-out"; // Réactiver la transition
  }, 0);
}

// Déplacement à gauche
leftArrow.addEventListener("click", () => {
  currentIndex--;
  topItems.style.transform = `translateX(${320}px)`; // Décale à droite
  setTimeout(updateCarousel, 500); // Attendre la fin de l'animation
});

// Déplacement à droite
rightArrow.addEventListener("click", () => {
  currentIndex++;
  topItems.style.transform = `translateX(${-320}px)`; // Décale à gauche
  setTimeout(updateCarousel, 500); // Attendre la fin de l'animation
});
