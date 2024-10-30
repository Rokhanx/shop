
const linkElement = document.getElementById("themeStylesheet");

let isDarkTheme = localStorage.getItem("theme") === "dark";

export function applySavedTheme() {
    console.log(localStorage)
    if (isDarkTheme) {
        linkElement.setAttribute("href", "app/css/dark-theme.css");
    } else {
        linkElement.setAttribute("href", "app/css/light-theme.css");
    }
}