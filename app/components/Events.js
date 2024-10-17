import { renderCartItems } from "./RenderCart.js";



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


    let isDarkTheme = false;

document.getElementById("themeToggle").addEventListener("click", () => {
    const linkElement = document.getElementById("themeStylesheet");

    if (!isDarkTheme) {
        // Cambiar a tema oscuro
        linkElement.setAttribute("href", "app/css/dark-theme.css");
        isDarkTheme = true;
    } else {
        // Cambiar a tema claro
        linkElement.setAttribute("href", "app/css/light-theme.css");
        isDarkTheme = false;
    }
});




};
