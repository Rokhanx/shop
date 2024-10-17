import { carrito } from "./Carrito.js";

export function renderCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = ""; 
  
    if (carrito.length === 0) {
      cartItemsContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
      document.getElementById("totalPrice").textContent = "0.00";
      return;
    }
  
    carrito.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <img src="src/img/productos/${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px;">
          <div style="flex-grow: 1; margin-left: 10px;">
            <h4>${item.nombre}</h4>
            <p>Precio: $${item.precio}</p>
            <div class="quantity-controls" style="display: flex; align-items: center; gap: 10px;">
              <button class="decrease" ${item.cantidad === 1 ? "disabled" : ""}>-</button>
              <span>${item.cantidad}</span>
              <button class="increase">+</button>
            </div>
          </div>
          <button class="btn-delete" title="Eliminar" style="cursor: pointer;">
            <i class="fas fa-trash-alt"></i> <!-- Aquí se incluye el ícono de Font Awesome -->
          </button>
        </div>`;
        
      // Eventos para aumentar, disminuir y eliminar
      cartItem.querySelector(".decrease").addEventListener("click", () => decreaseQuantity(index));
      cartItem.querySelector(".increase").addEventListener("click", () => increaseQuantity(index));
      cartItem.querySelector(".btn-delete").addEventListener("click", () => removeItem(index));
  
      cartItemsContainer.appendChild(cartItem);
    });
  
    // Mostrar el total
    const totalPrice = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  }
  
  // Función para aumentar la cantidad de un producto
  function increaseQuantity(index) {
    carrito[index].cantidad += 1;
    renderCartItems();
  }
  
  // Función para disminuir la cantidad de un producto
  function decreaseQuantity(index) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad -= 1;
      renderCartItems();
    }
  }
  
  // Función para eliminar un producto del carrito
  function removeItem(index) {
    const productName = carrito[index].nombre;
  
    // Buscar el botón del producto correspondiente y habilitarlo
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const productTitle = card.querySelector('h3').textContent;
      if (productTitle === productName) {
        const addButton = card.querySelector('button');
        addButton.textContent = 'Agregar al carrito';
        addButton.disabled = false;
        addButton.classList.remove('button-disabled'); // Remover la clase de deshabilitado
      }
    });
  
    // Eliminar el producto del carrito
    carrito.splice(index, 1);
    renderCartItems(); // Renderizar nuevamente los productos del carrito
    document.getElementById('cartCount').textContent = carrito.length; // Actualizar el contador
    document.getElementById('cartCount2').textContent = carrito.length;
  }