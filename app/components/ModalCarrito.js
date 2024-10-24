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

    // Número de WhatsApp predefinido
    const whatsappNumber = '5493484237789';  // Reemplaza con el número correcto

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
        const items = cartItems.querySelectorAll('.item'); // Asegúrate de que los productos tengan la clase 'item'

        let mensaje = 'Hola, me gustaría realizar el siguiente pedido:\n';

        items.forEach(item => {
            const nombre = item.querySelector('.item-name').textContent;
            const cantidad = item.querySelector('.item-quantity').textContent;
            mensaje += `- ${nombre} (Cantidad: ${cantidad})\n`;
        });

        // Añadir el total al mensaje
        const totalPrice = document.getElementById('totalPrice').textContent;
        mensaje += `\nTotal: $${totalPrice}`;

        // Redirigir a WhatsApp con el mensaje
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });

    return modal;
};
