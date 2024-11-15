import { renderCartItems } from "./RenderCart.js";
import { ModalCarrito } from './ModalCarrito.js';

let cartCount = 0;

export const carritoArray = []; // Inicializa el array carrito
if (localStorage.getItem("carritoArray")) {
    const savedCart = JSON.parse(localStorage.getItem("carritoArray"));
    carritoArray.push(...savedCart); // Actualiza el array de carrito directamente
  
}


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
    const existingProductIndex = carritoArray.findIndex((item) => item.nombre === nombre);

    if (existingProductIndex !== -1) {
        carritoArray[existingProductIndex].cantidad += 1;
    } else {
        carritoArray.push({ nombre, precio, imagen, cantidad: 1 });
    }

    // Cambiar el texto y deshabilitar el boton
    button.textContent = 'En el carrito';
    button.classList.add('button-disabled');
    button.disabled = true; // Deshabilitar el botón

    document.getElementById('cartCount').textContent = carritoArray.length;
    document.getElementById('cartCount2').textContent = carritoArray.length;
    renderCartItems(); // Renderiza el carrito al agregar un producto
}
