import { carritoArray } from "./Carrito.js";

// Cargar el carrito desde localStorage al iniciar


export function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = ""; 

  if (carritoArray.length === 0) {
    cartItemsContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
    document.getElementById("totalPrice").textContent = "0.00";
    document.getElementById("cartCount").textContent = "0";
    saveCartToLocalStorage(); // Asegura que el carrito vacío esté sincronizado
    return;
  }

  carritoArray.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <img src="app/assets/images/productos/${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px;">
        <div style="flex-grow: 1; margin-left: 10px;">
          <h4>${item.nombre}</h4>
          <p>Precio: $${item.precio}</p>
          <div class="quantity-controls">
            <button class="decrease" ${item.cantidad === 1 ? "disabled" : ""}>-</button>
            <span>${item.cantidad}</span>
            <button class="increase">+</button>
          </div>
        </div>
        <button class="btn-delete" title="Eliminar" style="cursor: pointer;">
          <i class="fas fa-trash-alt"></i> <!-- Icono de Font Awesome -->
        </button>
      </div>`;
      
    // Eventos para aumentar, disminuir y eliminar
    cartItem.querySelector(".decrease").addEventListener("click", () => decreaseQuantity(index));
    cartItem.querySelector(".increase").addEventListener("click", () => increaseQuantity(index));
    cartItem.querySelector(".btn-delete").addEventListener("click", () => removeItem(index));

    cartItemsContainer.appendChild(cartItem);
  });

  const totalPrice = carritoArray.reduce((total, item) => total + item.precio * item.cantidad, 0);
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  document.getElementById("cartCount").textContent = carritoArray.length;
  
  // Guardar carrito en localStorage
  saveCartToLocalStorage();
}

// Función para guardar el carrito en localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("carritoArray", JSON.stringify(carritoArray));
}

function increaseQuantity(index) {
  carritoArray[index].cantidad += 1;
  renderCartItems();
}

function decreaseQuantity(index) {
  if (carritoArray[index].cantidad > 1) {
    carritoArray[index].cantidad -= 1;
    renderCartItems();
  }
}

function removeItem(index) {
  const productName = carritoArray[index].nombre;

  // Buscar el botón del producto correspondiente y habilitarlo
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    const productTitle = card.querySelector('h3').textContent;
    if (productTitle === productName) {
      const addButton = card.querySelector('button');
      addButton.textContent = 'Agregar al carrito';
      addButton.disabled = false;
      addButton.classList.remove('button-disabled');
    }
  });

  // Eliminar el producto del carrito
  carritoArray.splice(index, 1);
  renderCartItems();
  document.getElementById("cartCount").textContent = carritoArray.length;
  document.getElementById("cartCount2").textContent = carritoArray.length;
  
}
