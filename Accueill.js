// Fix NavBar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const searchBar = document.querySelector(".search-bar");
  if (window.scrollY > 20) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// Close Welcome
document.getElementById("close-welcome").addEventListener("click", function () {
  const overlay = document.getElementById("welcome-overlay");
  overlay.style.display = "none";
});

// Carousel fleche
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const topItems = document.querySelector(".top-items");
const items = document.querySelectorAll(".top-item");

let currentIndex = 0;

function updateCarousel() {
  topItems.style.transition = "transform 0.5s ease-in-out";
  topItems.style.transform = `translateX(${-currentIndex * 320}px)`;
}

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1;
    topItems.style.transition = "none";
    topItems.style.transform = `translateX(${-currentIndex * 320}px)`;
    setTimeout(() => {
      topItems.style.transition = "transform 0.5s ease-in-out";
    }, 0);
    return;
  }
  updateCarousel();
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
    topItems.style.transition = "none";
    topItems.style.transform = `translateX(0px)`;
    setTimeout(() => {
      topItems.style.transition = "transform 0.5s ease-in-out";
    }, 0);
    return;
  }
  updateCarousel();
});

// Search Bar
function initializeSearchBar() {
  const searchBar = document.querySelector(".search-bar");
  if (!searchBar) return;

  searchBar.addEventListener("input", (event) => {
    const result = event.target.value.toLowerCase();

    const sections = document.querySelectorAll("main article section");

    sections.forEach((section) => {
      const text = section.textContent.toLowerCase();
      section.style.display = text.includes(result) ? "" : "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.querySelector(".search-bar");

  if (!searchIcon || !searchBar) return;

  searchIcon.addEventListener("click", () => {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "inline-block";
      searchBar.focus();
    }
  });
});

initializeSearchBar();

// Avis rotation
document.addEventListener("DOMContentLoaded", () => {
  const avisContainer = document.querySelector(".avis-container");

  function checkScreenSize() {
    if (window.innerWidth <= 600) {
      avisContainer.classList.remove("animate");
    } else {
      avisContainer.classList.add("animate");
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});

const boxes = document.querySelectorAll(".jsp-box");

boxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 30%)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.background = "#334a5e73";
  });
});
