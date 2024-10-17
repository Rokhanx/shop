import { renderCartItems } from "./RenderCart.js";
import { ModalCarrito } from './ModalCarrito.js';

let cartCount = 0;

export const carrito = []; // Inicializa el array carrito


export const Carrito = () => {
    let div = document.createElement("div")
    div.setAttribute("class", "carrito")

    div.innerHTML=`
    <img id="foo" src="app/assets/icons/bolsa.png" alt="Carrito">
    <span id="cartCount">0</span>
    `
    const header = document.querySelector(".header-icons")
    header.appendChild(div)



    return div
}



export function agregarAlCarrito(nombre, precio, imagen, button) {
    const existingProductIndex = carrito.findIndex((item) => item.nombre === nombre);

    if (existingProductIndex !== -1) {
        carrito[existingProductIndex].cantidad += 1;
    } else {
        carrito.push({ nombre, precio, imagen, cantidad: 1 });
    }

    // Cambiar el texto y deshabilitar el botón correspondiente
    button.textContent = 'En el carrito';
    button.classList.add('button-disabled'); // Añadir clase para cambiar el color
    button.disabled = true; // Deshabilitar el botón

    document.getElementById('cartCount').textContent = carrito.length;
    renderCartItems(); // Renderiza el carrito al agregar un producto
}
