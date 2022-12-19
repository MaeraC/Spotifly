const header                = document.querySelector(".header");
const nav                   = document.createElement("nav");
const logoWhite             = document.createElement("div");
const logo                  = document.createElement("img");
const title                 = document.createElement("h1");
const menu                  = document.createElement("ul");

const arrayMenu             = [
    { "icons": "../assets/icons/home-icon.png", "items": "Accueil", "url": "Home.html" }, 
    { "icons": "../assets/icons/search-icon.png", "items": "Rechercher", "url": "Home.html?search" }, 
    { "icons": "../assets/icons/bibli-icon.png", "items": "Bibliothèque", "url": "Home.html?library" }, 
    { "icons": "../assets/icons/add-playlist-icon.png", "items": "Créer une playlist", "url": "Home.html?create-playlist" },  
    { "icons": "../assets/icons/like-icon.png", "items": "Titres likés", "url": "Home.html?music-liked" }
]

arrayMenu.forEach((elem) => {
    const menuItems         = document.createElement("li");
    const linkMenu          = document.createElement("a");
    const icons             = document.createElement("img");
    const items             = document.createElement("span");

    items.textContent       = elem.items;

    icons.setAttribute("src", elem.icons);
    icons.setAttribute("alt", "Icône" + elem.items);
    linkMenu.setAttribute("href", elem.url)

    menu.appendChild(menuItems);
    menuItems.appendChild(linkMenu);
    linkMenu.appendChild(icons);
    linkMenu.appendChild(items);
})


logo.setAttribute("src", "../assets/icons/logo-white.png");
logo.setAttribute("alt", "Logo Spotifly");

nav.classList.add("header__nav");
logoWhite.classList.add("header__nav__logoWhite");
title.classList.add("header__nav__logoWhite__title");
menu.classList.add("header__nav__menu");

const menuItemClass = menu.children[2];
menuItemClass.classList.add("add-border");

title.textContent           = "Spotifly";

header.appendChild(nav);
nav.appendChild(logoWhite);
logoWhite.appendChild(logo);
logoWhite.appendChild(title);
nav.appendChild(menu);
