
function Search() {
    const dashboardHeader                   = document.querySelector(".dashboard");
    const formSearch                        = document.createElement("form");
    const iconSearch                        = document.createElement("img");
    const inputSearch                       = document.createElement("input");
    const resultsBox                        = document.createElement("div");
    let searchKey                           = "";
    let artistsArray                        = [];

    iconSearch.setAttribute("src", "../assets/icons/search-icon-black(1).png");
    iconSearch.setAttribute("alt", "Icône rechercher");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder", "Que souhaitez-vous écouter ?")

    resultsBox.classList.add("results-box");

    const searchArtists = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: { Authorization: `Bearer ${token}`},
            params: { q: searchKey, type: "artist" }
        })

        artistsArray.push(data.artists.items);

        function displayArtists() {
            artistsArray.forEach(elem => {
                elem.forEach(item => {
                    const artistBox         = document.createElement("div");
                    const artistImg         = document.createElement("img");
                    const artistName        = document.createElement("p");
                    const type              = document.createElement("span");

                    artistName.textContent  = item.name;
                    type.textContent        = "Artiste";

                    item.images.map(img => {
                        artistImg.setAttribute("src", img.url);
                        artistBox.appendChild(artistImg);
                    })

                    resultsBox.appendChild(artistBox);
                    artistBox.appendChild(artistName);
                    artistBox.appendChild(type);

                })
            })
        }
        
        displayArtists()
    }

    if (token) {
        formSearch.addEventListener("submit", (e) => {
            e.preventDefault();
            searchArtists()
        });
        inputSearch.addEventListener("change", (e) => {
            searchKey = e.target.value;
        })   
    }
    else {
        console.log(error)
    }

    dashboardHeader.appendChild(formSearch);
    formSearch.appendChild(iconSearch);
    formSearch.appendChild(inputSearch);
    dashboardHeader.appendChild(resultsBox);
}