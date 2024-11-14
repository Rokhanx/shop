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


        // Obtener el botón de subir, el carrito y el header
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const floatingCart = document.getElementById('floating-cart');
        const header = document.getElementById('main-header');
        // Verificar que los elementos existan
        if (!scrollTopBtn || !floatingCart || !header) {
            console.error("Error: No se encontró uno o más elementos necesarios.");
            return;
        }
        // Mostrar el botón y el carrito cuando el header desaparezca (al hacer scroll hacia abajo)
        window.onscroll = function () {
            if (window.scrollY > header.offsetHeight) {
                floatingCart.style.display = 'flex'; // Mostrar carrito flotante
                scrollTopBtn.style.display = 'block'; // Mostrar botón de subir
            } else {
                floatingCart.style.display = 'none'; // Ocultar carrito flotante
                scrollTopBtn.style.display = 'none'; // Ocultar botón de subir
            }
        };

    const btntop = document.getElementById("btn-to-top")
    btntop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    });
    //Asignar evento de abrir modal al floating-cart
    const modal = document.getElementById("carritoModal");
    document.querySelector(".floating-cart").addEventListener("click", () => {
        modal.style.display = "block";
        renderCartItems();
    });


};
