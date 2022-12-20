// Sauvegarde du token dans le localStorage afin que le token 
// ne soit pas perdu lors de l'actualisation de la page
const hash                          = window.location.hash // Récupère le token dans l'url
let token                           = window.localStorage.getItem("token") // Récupère le token du localStorage

if (!token && hash) {
    token = hash.substring(1).split("&").find(elt => elt.startsWith("access_token")).split("=")[1]
    window.location.hash            = ""
    // Met le token dans le localStorage
    window.localStorage.setItem("token", token)
}