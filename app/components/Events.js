import { renderCartItems } from "./RenderCart.js";



export const Events = () => {
    const carritoElement = document.querySelector(".carrito");

    // Verificar si el ícono del carrito existe
    if (carritoElement) {
        carritoElement.addEventListener("click", () => {
            console.log("Carrito abierto");
            const modal = document.getElementById("carritoModal"); // Asegúrate de tener el modal en el DOM
            modal.style.display = "block";
            renderCartItems();
        });
    } else {
        console.error("El ícono del carrito no se encontró en el DOM.");
    }

    // Otros eventos pueden ir aquí
    // ...
};
