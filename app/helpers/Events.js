import { renderCartItems } from "../components/RenderCart.js";



export const Events = () => {
    const carritoElement = document.querySelector(".carrito");

    
    if (carritoElement) {
        carritoElement.addEventListener("click", () => {
            console.log("Carrito abierto");
            const modal = document.getElementById("carritoModal");
            modal.style.display = "block";
            renderCartItems();
        });
    } else {
        console.error("El ícono del carrito no se encontró en el DOM.");
    }







    //Evento cambiar de tema
    const themeToggle = document.getElementById("themeToggle");
    const linkElement = document.getElementById("themeStylesheet");
    let isDarkTheme = localStorage.getItem("theme") === "dark";
    function toggleTheme() {
        if (isDarkTheme) {
            //Cambia el tema a claro y lo guarda en localStorage
            linkElement.setAttribute("href", "app/css/light-theme.css");
            localStorage.setItem("theme", "light");
            isDarkTheme = false;
            console.log(localStorage)
        } else {
            //Cambia el tema a oscuro y lo guarda en localStorage
            linkElement.setAttribute("href", "app/css/dark-theme.css");
            localStorage.setItem("theme", "dark");
            isDarkTheme = true;
            console.log(localStorage)
        }
    }

    //
    themeToggle.addEventListener("click", toggleTheme);



};
