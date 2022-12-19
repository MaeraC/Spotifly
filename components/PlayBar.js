const playBarSection = document.querySelector(".play-bar-component");
const playBar = document.createElement("div");
const playMusic = document.createElement("div");
const playControls = document.createElement("ul");
const playDuration = document.createElement("div");
const randomBtn = document.createElement("img");
const previousBtn = document.createElement("img");
const pauseBtn = document.createElement("img");
const nextBtn = document.createElement("img");
const repeatBtn = document.createElement("img");
const startTime = document.createElement("span");
const endTime = document.createElement("span");
const durationBar = document.createElement("div");

randomBtn.setAttribute("src", "../assets/icons/aleatoire-icon.png");
randomBtn.setAttribute("alt", "Icône musique aléatoire");
previousBtn.setAttribute("src", "../assets/icons/previous-icon.png");
previousBtn.setAttribute("alt", "Icône musique précédente");
nextBtn.setAttribute("src", "../assets/icons/next-icon.png");
nextBtn.setAttribute("alt", "Icône musique suivante");
pauseBtn.setAttribute("src", "../assets/icons/pause-icon.png");
pauseBtn.setAttribute("alt", "Icône Play Pause Musique");
repeatBtn.setAttribute("src", "../assets/icons/repeat-icon.png");
repeatBtn.setAttribute("alt", "Icône répéter la musique");

playBar.classList.add("play-bar-component__play-bar");
playMusic.classList.add("play-bar-component__play-bar__play-music");
playDuration.classList.add("play-bar-component__play-bar__play-music__play-duration");

startTime.textContent = "0:00";
endTime.textContent = "0:00";

playBarSection.appendChild(playBar);
playBar.appendChild(playMusic);
playMusic.appendChild(playControls);
playControls.appendChild(randomBtn);
playControls.appendChild(previousBtn);
playControls.appendChild(pauseBtn);
playControls.appendChild(nextBtn);
playControls.appendChild(repeatBtn);
playMusic.appendChild(playDuration);
playDuration.appendChild(startTime);
playDuration.appendChild(durationBar);
playDuration.appendChild(endTime);