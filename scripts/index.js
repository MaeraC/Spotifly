const bodyConnexion                 = document.querySelector(".body-connexion");
const headerConnexion               = document.querySelector(".header-connexion");
const LogoWhite                     = document.createElement("div");
const logo                          = document.createElement("img");
const title                         = document.createElement("h1");
const textConnect                   = document.createElement("span");
const LinkConnect                   = document.createElement("a");
const btnLogIn                      = document.createElement("button");
const btnLogOut                     = document.createElement("button");

const CLIENT_ID                     = "4ecc34c264bc4531828ff67b0dbaf91c";
const REDIRECT_URI                  = "https://maerac.github.io/Spotifly/pages/Home.html";
const AUTH_ENDPOINT                 = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE                 = "token";

// Sauvegarde du token dans le localStorage afin que le token 
// ne soit pas perdu lors de l'actualisation de la page
const hash                          = window.location.hash // Récupère le token dans l'url
let token                           = window.localStorage.getItem("token") // Récupère le token du localStorage

LogoWhite.classList.add("header-connexion__logo-white");
logo.setAttribute("src", "https://maerac.github.io/Spotifly/assets/icons/logo-white.png")

title.textContent                   = "Spotifly";
textConnect.textContent             = "Pour continuer, connectez-vous à Spotifly.";
btnLogIn.textContent                = "SE CONNECTER";

if (!token && hash) {
    token                           = hash.substring(1).split("&").find(elt => elt.startsWith("access_token")).split("=")[1]
    window.location.hash            = ""
    // Met le token dans le localStorage
    window.localStorage.setItem("token", token)
}

function logOut() {
    token                           = "";
    window.localStorage.removeItem("token");
};

if (token) {
    // Redirige vers le compte Spotifly
    LinkConnect.setAttribute("href", `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`);
}
else {
    btnLogOut.textContent               = "SE DECONNECTER";
    btnLogOut.style.display             = "flex";
    btnLogIn.style.display              = "none";
    btnLogOut.classList.add("btn-logout");
    bodyConnexion.appendChild(btnLogOut);

    btnLogOut.addEventListener("click", () => {
        logOut()
    });
}

headerConnexion.appendChild(LogoWhite);
LogoWhite.appendChild(logo);
LogoWhite.appendChild(title);
bodyConnexion.appendChild(textConnect);
bodyConnexion.appendChild(LinkConnect);
LinkConnect.appendChild(btnLogIn);
