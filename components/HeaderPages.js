const dashboard                     = document.querySelector(".dashboard");
const headerDashboard               = document.createElement("div");
const arrows                        = document.createElement("div");
const arrowLeft                     = document.createElement("img");
const arrowRight                    = document.createElement("img");
const profileAccountBox             = document.createElement("div");
const profileAccount                = document.createElement("div");
const userIcon                      = document.createElement("img");
const userBox                       = document.createElement("div");
const userName                      = document.createElement("span");
const arrowDown                     = document.createElement("img");
const profileMenu                   = document.createElement("ul");

const arrayProfileMenu              = ["Compte", "Profile", "Passer à Premium", "Préférences", "Déconnexion"];

userName.textContent                = "User Name";

arrayProfileMenu.forEach(item => {
    const itemMenu                  = document.createElement("li");
    itemMenu.textContent            = item;
    profileMenu.appendChild(itemMenu);
});

profileAccount.addEventListener("click", () => {
    profileMenu.classList.toggle("display");
    profileMenu.style.flexDirection = "column";
})

arrowLeft.setAttribute("src", "../assets/icons/arrow-left.png");
arrowLeft.setAttribute("alt", "Page précedente");
arrowRight.setAttribute("src", "../assets/icons/arrow-right(1).png");
arrowRight.setAttribute("alt", "Page précedente");
arrowDown.setAttribute("src", "../assets/icons/arrow-down.png");
arrowDown.setAttribute("alt", "Voir plus");
userIcon.setAttribute("src", "../assets/icons/user-icon.png");
userIcon.setAttribute("alt", "Utilisateur");

profileMenu.classList.add("profile-menu");
headerDashboard.classList.add("dashboard__header");
arrows.classList.add("dashboard__header__arrows");
profileAccount.classList.add("dashboard__header__profile-account");
userBox.classList.add("dashboard__header__profile-account__user-box");
userIcon.classList.add("dashboard__header__profile-account__user-box__user-icon");

dashboard.appendChild(headerDashboard);
headerDashboard.appendChild(arrows);
arrows.appendChild(arrowLeft);
arrows.appendChild(arrowRight);
headerDashboard.appendChild(profileAccountBox);
profileAccountBox.appendChild(profileAccount);
profileAccount.appendChild(userIcon);
profileAccount.appendChild(userBox);
userBox.appendChild(userName);
userBox.appendChild(arrowDown);
profileAccountBox.appendChild(profileMenu);