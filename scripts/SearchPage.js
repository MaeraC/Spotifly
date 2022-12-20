// Vérifie si l'url contient search
let verifyUrl                   = new URLSearchParams(window.location.search);
let urlParam                    = verifyUrl.has("search");

// Si oui affiche le contenu de la page Search
if (urlParam) {
    Search()
}