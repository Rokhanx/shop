import { carritoArray } from "./Carrito.js";

export const ModalCarrito = () => {
    // Crear el modal
    const modal = document.createElement('div');
    modal.id = 'carritoModal';
    modal.classList.add('modal');

    // Estructura del modal
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Carrito de Compras</h2>
        <div class="cart-items"></div>
        <div class="cart-summary">
            <p>Total: $<span id="totalPrice">0.00</span></p>
            <button class="btn-checkout">Finalizar compra
            <img id="foo" class="wpp" src="app/assets/icons/wpp1.png" alt="WhatsApp Logo">
            </button>
        </div>
    </div>
    `;

    // Número de WhatsApp predefinido 5493484237789
    const whatsappNumber = '5493484237789';

    // Evento para cerrar el modal
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Evento para cerrar el modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Evento del botón checkout
    const checkoutButton = modal.querySelector('.btn-checkout');
    checkoutButton.addEventListener('click', () => {
        // Obtener los productos del carrito
        const cartItems = document.querySelector('.cart-items');
        const items = cartItems.querySelectorAll('.item');
        //console.log(carrito.length);

        let mensaje = 'Hola, me gustaría realizar el siguiente pedido:\n';
        carritoArray.forEach(item => {


            mensaje += `${item.nombre} ($${item.precio}x${item.cantidad}) Precio total: $${item.cantidad * item.precio}\n`;
        });

        // Añadir el total al mensaje
        const totalPrice = document.getElementById('totalPrice').textContent;
        mensaje += `\nTotal: $${totalPrice}`;

        
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });

    return modal;
};
