// Vérifie si l'url contient search
let verifyUrl                           = new URLSearchParams(window.location.search);
let urlParam                            = verifyUrl.has("search");


// Si oui affiche le contenu de la page Search
if (urlParam) {
    Search();
}
  
let searchKey                           = "";
let arrayArtists                        = [];
let arrayTracks                         = [];

// Récupération des données des profils artistes
const searchArtists                     = async () => {
    const {data}                        = await axios.get("https://api.spotify.com/v1/search", {
        headers: { Authorization: `Bearer ${token}`},
        params: { q: searchKey, type: "track,artist" }
    })
    arrayArtists.push(data.artists.items);
    arrayTracks.push(data.tracks.items);
}
console.log(token)
if (token) {
    const inputSearch                   = document.querySelector(".input-search");
    const resultsBox                    = document.querySelector(".results-box");

    inputSearch.addEventListener("input", (e) => {
        resultsBox.innerHTML            = "";
        searchKey                       = e.target.value;
        
        searchArtists();
         
        arrayArtists.forEach(list => { 
            // Filtre les noms des artistes en correspondance avec les touches saisies 
            const filteredArtists       = list.filter(artist => artist.name.toLowerCase().startsWith(searchKey));
            resultsBox.innerHTML        = "";

            console.log(filteredArtists)

            filteredArtists.forEach(artist => {
                const artistCardModel   = artistCardFactory(artist);
                artistCardModel.getArtistCard();
            })
        });

        arrayTracks.forEach(list => {
            // Filtre les noms des tracks en correspondances avec les touches saisies
            const filteredTracks        = list.filter(track => track.album.name.toLowerCase().startsWith(searchKey));
            resultsBox.innerHTML        = "";

            filteredTracks.forEach(track => {
                const trackCardModel    = trackCardFactory(track);
                trackCardModel.getTrackCard();
            })
        });
    });
}


