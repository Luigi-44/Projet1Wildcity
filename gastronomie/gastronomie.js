
document.addEventListener("DOMContentLoaded", () => {
    // Sélection de l'élément à mettre en avant pour la première section
    const miseEnAvant = document.querySelector(".restaurants .mise_en_avant");
    // Sélection de l'élément à mettre en avant pour la deuxième section
    const miseEnAvant2 = document.querySelector(".bars .mise_en_avant2");

    // Sélection des éléments à écouter les événements de clic pour la première section
    const coqElements = document.querySelectorAll(".restaurants .coq");
    const poulesElements = document.querySelectorAll(".restaurants .poules");
    const voliereElements = document.querySelectorAll(".restaurants .volière");

    // Sélection des éléments à écouter les événements de clic pour la deuxième section
    const rotiElements = document.querySelectorAll(".bars .roti");
    const cailleElements = document.querySelectorAll(".bars .caille");
    const perchoirElements = document.querySelectorAll(".bars .perchoir");

    // Fonction pour gérer l'événement de clic pour la première section
    function handleClick(miseEnAvant, element) {
        // Copier le contenu HTML de l'article sélectionné
        const content = element.innerHTML;

        // Mettre à jour le contenu de la section mise_en_avant
        miseEnAvant.innerHTML = content;

        // Ajouter une classe spécifique pour indiquer la mise en avant
        miseEnAvant.classList.add("highlight");

        // Afficher toutes les balises <p> dans l'élément mis en avant
        const pElements = miseEnAvant.querySelectorAll('p');
        // biome-ignore lint/complexity/noForEach: <explanation>
        pElements.forEach(p => {
            p.style.display = 'block'; // Afficher les balises <p>
        });

        // Retirer la classe "highlight" après un délai
        setTimeout(() => {
            miseEnAvant.classList.remove("highlight");
        }, 1000);
    }

    // Fonction pour gérer l'événement de clic pour la deuxième section
    function handleClick2(miseEnAvant2, element) {
        // Copier le contenu HTML de l'article sélectionné
        const content = element.innerHTML;

        // Mettre à jour le contenu de la section mise_en_avant2
        miseEnAvant2.innerHTML = content;

        // Ajouter une classe spécifique pour indiquer la mise en avant
        miseEnAvant2.classList.add("highlight");

        // Afficher toutes les balises <p> dans l'élément mis en avant
        const pElements = miseEnAvant2.querySelectorAll('p');
        // biome-ignore lint/complexity/noForEach: <explanation>
        pElements.forEach(p => {
            p.style.display = 'block'; // Afficher les balises <p>
        });

        // Retirer la classe "highlight" après un délai
        setTimeout(() => {
            miseEnAvant2.classList.remove("highlight");
        }, 1000);
    }

    // Ajout de l'événement de clic pour les éléments de la première section
    // biome-ignore lint/complexity/noForEach: <explanation>
        coqElements.forEach(coqElement => {
        coqElement.addEventListener("click", () => handleClick(miseEnAvant, coqElement));
    });

    // biome-ignore lint/complexity/noForEach: <explanation>
    poulesElements.forEach(poulesElement => {
        poulesElement.addEventListener("click", () => handleClick(miseEnAvant, poulesElement));
    });

    // biome-ignore lint/complexity/noForEach: <explanation>
    voliereElements.forEach(voliereElement => {
        voliereElement.addEventListener("click", () => handleClick(miseEnAvant, voliereElement));
    });

    // Ajout de l'événement de clic pour les éléments de la deuxième section
    // biome-ignore lint/complexity/noForEach: <explanation>
        rotiElements.forEach(rotiElement => {
        rotiElement.addEventListener("click", () => handleClick2(miseEnAvant2, rotiElement));
    });

    // biome-ignore lint/complexity/noForEach: <explanation>
    cailleElements.forEach(cailleElement => {
        cailleElement.addEventListener("click", () => handleClick2(miseEnAvant2, cailleElement));
    });

    // biome-ignore lint/complexity/noForEach: <explanation>
    perchoirElements.forEach(perchoirElement => {
        perchoirElement.addEventListener("click", () => handleClick2(miseEnAvant2, perchoirElement));
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
