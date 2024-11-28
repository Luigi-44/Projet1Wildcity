// Sélection de l'élément principal où ajouter du contenu
const main = document.querySelector("main");

// Données pour générer du contenu
const sectionsData = [
    {
        title: "Cinéma",
        events: [
            {
                imgSrc: "./images/plume.d'or.webp",
                title: "Festival de la Plume d’Or",
                date: "15 décembre 2024",
                location: "Place des Cocoricos",
                description:
                    "La ville se prépare pour la 10ᵉ édition du Festival de la Plume d’Or, un concours artistique où les habitants décorent leurs plumes avec des motifs colorés. Cette année, le thème est “Plume et Popcorn”.",
                joke: "Pourquoi les poulets peignent-ils leurs plumes ? Parce que c’est plus chic que de changer de veste !",
            },
            {
                imgSrc: "./images/expo.webp",
                title: "Le Wild Film Fest",
                description:
                    "Chaque printemps, Wild City vibre au rythme du Wild Film Fest, un festival où les talents locaux sont à l’honneur.",
            },
        ],
    },
    {
        title: "Théâtre",
        events: [
            {
                imgSrc: "./images/theatre.webp",
                title: "Roméo et Coqulettes",
                description:
                    "Un spectacle humoristique qui revisite le classique de Shakespeare avec une touche de poulailler.",
            },
        ],
    },
];

// Fonction pour créer une section
function createSection(section) {
    const article = document.createElement("article");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title1");
    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    titleDiv.appendChild(h2);
    article.appendChild(titleDiv);

    section.events.forEach((event) => {
        const eventSection = document.createElement("section");
        eventSection.classList.add("one");

        const img = document.createElement("img");
        img.src = event.imgSrc;
        img.alt = event.title;
        img.classList.add("image");

        const eventInfo = document.createElement("div");
        const eventTitle = document.createElement("h3");
        eventTitle.textContent = event.title;

        const eventDescription = document.createElement("p");
        eventDescription.innerHTML = `
            Date : ${event.date || "N/A"} <br>
            Lieu : ${event.location || "N/A"} <br>
            Description : ${event.description} <br>
            ${event.joke ? `<strong>Blague :</strong> ${event.joke}` : ""}
        `;

        eventInfo.appendChild(eventTitle);
        eventInfo.appendChild(eventDescription);

        eventSection.appendChild(img);
        eventSection.appendChild(eventInfo);
        article.appendChild(eventSection);
    });

    return article;
}

// Générer les sections et les ajouter au DOM
sectionsData.forEach((section) => {
    const sectionElement = createSection(section);
    main.appendChild(sectionElement);
});
