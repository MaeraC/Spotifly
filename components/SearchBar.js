
function Search() {
    const dashboardHeader                   = document.querySelector(".dashboard");
    const formSearch                        = document.createElement("form");
    const iconSearch                        = document.createElement("img");
    const inputSearch                       = document.createElement("input");
    const resultsBox                        = document.createElement("div");
    const resultsBoxContent                 = document.createElement("div");

    const arrayContents                     = [
        "../assets/images/retro.PNG",
        "../assets/images/classement.PNG",
        "../assets/images/concu.PNG",
        "../assets/images/decouvertes.PNG",
        "../assets/images/podcast.PNG",
        "../assets/images/sorties.PNG",
        "../assets/images/tendance.PNG",
        "../assets/images/radar.PNG",
    ]

    iconSearch.setAttribute("src", "../assets/icons/search-icon-black(1).png");
    iconSearch.setAttribute("alt", "Icône rechercher");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder", "Que souhaitez-vous écouter ?")

    resultsBox.classList.add("results-box");
    resultsBoxContent.classList.add("results-box__content");
    inputSearch.classList.add("input-search");
    formSearch.classList.add("form");

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    arrayContents.forEach(content => {
        const contentItem = document.createElement("img");
        contentItem.setAttribute("src", content);
        contentItem.setAttribute("alt", "");
        resultsBoxContent.appendChild(contentItem);
    });

    dashboardHeader.appendChild(formSearch);
    formSearch.appendChild(iconSearch);
    formSearch.appendChild(inputSearch);
    dashboardHeader.appendChild(resultsBox);
    resultsBox.appendChild(resultsBoxContent);
}