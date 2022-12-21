function artistCardFactory(data) {
    
    const resultsBox                        = document.querySelector(".results-box")
    
    function getArtistCard() {
        const artistCard                    = document.createElement("div");
        const artistImg                     = document.createElement("img");
        const artistName                    = document.createElement("p");
        const type                          = document.createElement("span");

        artistName.textContent              = data.name;
        type.textContent                    = data.type;

        artistImg.setAttribute("src", data.images[0].url);
        artistImg.setAttribute("alt", data.name);

        resultsBox.appendChild(artistCard);
        artistCard.appendChild(artistImg);
        artistCard.appendChild(artistName);
        artistCard.appendChild(type);
    }

    return { getArtistCard }
}