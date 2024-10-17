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
        <button class="btn-checkout">Finalizar compra</button>
        </div>
    </div>
    `;

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

    return modal;
};
