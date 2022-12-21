function trackCardFactory(data) {
    function getTrackCard() {

        const resultsBox                    = document.querySelector(".results-box");
        const trackCard                     = document.createElement("div");
        const trackImg                      = document.createElement("img");
        const trackName                     = document.createElement("p");
        const trackYA                       = document.createElement("div");
        const trackYear                     = document.createElement("span");
        const trackArtist                   = document.createElement("span");
        const type                          = document.createElement("span");
        
        trackName.textContent               = data.album.name;
        trackYear.textContent               = data.album.release_date.substr(0, 4) + " - ";
        type.textContent                    = data.album.album_type;

        console.log(trackYA.textContent);
        data.artists.map(elem => {
            trackArtist.textContent         = elem.name;
        });

        trackImg.setAttribute("src", data.album.images[0].url);
        trackImg.setAttribute("alt", data.album.name);

        trackCard.classList.add("track-card");
        trackYA.classList.add("track-ya");

        resultsBox.appendChild(trackCard);
        trackCard.appendChild(trackImg);
        trackCard.appendChild(trackName);
        trackCard.appendChild(trackYA);
        trackYA.appendChild(trackYear);
        trackYA.appendChild(trackArtist);
        trackCard.appendChild(type);
    }

    return { getTrackCard }
}