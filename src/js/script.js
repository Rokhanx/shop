// Función para mostrar/ocultar las categorías
function toggleCategorias() {
  const listaCategorias = document.getElementById("categoryList");
  listaCategorias.classList.toggle("oculto");
}

let productosActuales = []; // Variable para almacenar los productos de la categoría actual
const carrito = []; // Carrito de compras

// Cargar los datos al inicio
getCategorizedData().then(categorizedObjects => {
  const categoryList = document.getElementById('categoryList');
  
  for (const category in categorizedObjects) {
    const li = document.createElement('li');
    li.textContent = category;
    li.addEventListener('click', () => {
      mostrarProductos(category, categorizedObjects[category]);
      productosActuales = categorizedObjects[category]; // Actualizar productos de la categoría actual
    });
    categoryList.appendChild(li);
  }

  // Mostrar productos de la categoría por defecto
  const defaultCategory = Object.keys(categorizedObjects)[0];
  mostrarProductos(defaultCategory, categorizedObjects[defaultCategory]);
  productosActuales = categorizedObjects[defaultCategory]; // Actualizar productos de la categoría por defecto
});

// Función para mostrar los productos de una categoría
function mostrarProductos(categoria, productos) {
  const productosSection = document.getElementById('productos');
  productosSection.innerHTML = ''; 

  const productosVisibles = productos.filter(producto => producto.visible === 'TRUE');
  
  productosVisibles.forEach((producto) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    if (document.body.classList.contains('dark-theme')) {
      productCard.classList.add('dark-theme');
    }
    
    productCard.innerHTML = `
      <h3>${producto.nombre}</h3>
      <img src="src/img/${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, '${producto.imagen}', this)">Agregar al carrito</button>`;
      
    productosSection.appendChild(productCard);
  });
}

// Función para mostrar productos filtrados
function displayProductos(productos) {
  const productosSection = document.getElementById('productos');
  productosSection.innerHTML = ''; // Limpiar productos anteriores

  productos.forEach((producto) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    if (document.body.classList.contains('dark-theme')) {
      productCard.classList.add('dark-theme');
    }

    productCard.innerHTML = `
      <h3>${producto.nombre}</h3>
      <img src="src/img/${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, '${producto.imagen}', this)">Agregar al carrito</button>`;
      
    productosSection.appendChild(productCard);
  });
}

// Función de búsqueda
function buscarProducto() {
  const input = document.getElementById('buscador').value.toLowerCase();
  
  // Filtrar productos de la categoría actual
  const productosFiltrados = productosActuales.filter(producto => {
    return producto.nombre.toLowerCase().includes(input) || 
           producto.descripcion.toLowerCase().includes(input);
  });

  displayProductos(productosFiltrados); // Mostrar productos filtrados
}

// Agregar al carrito
function agregarAlCarrito(nombre, precio, imagen, button) {
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

// Función para renderizar los productos en el modal del carrito
function renderCartItems() {
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
        <img src="src/img/${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px;">
        <div style="flex-grow: 1; margin-left: 10px;">
          <h4>${item.nombre}</h4>
          <p>Precio: $${item.precio.toFixed(2)}</p>
          <div class="quantity-controls" style="display: flex; align-items: center;">
            <button class="decrease" ${item.cantidad === 1 ? "disabled" : ""}>-</button>
            <span>${item.cantidad}</span>
            <button class="increase">+</button>
          </div>
        </div>
        <span class="remove-item" title="Eliminar" style="cursor: pointer;">&#128465;</span>
      </div>`;

    // Eventos para aumentar, disminuir y eliminar
    cartItem.querySelector(".decrease").addEventListener("click", () => decreaseQuantity(index));
    cartItem.querySelector(".increase").addEventListener("click", () => increaseQuantity(index));
    cartItem.querySelector(".remove-item").addEventListener("click", () => removeItem(index));

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
  carrito.splice(index, 1);
  renderCartItems();
}

// Cambiar tema (día/noche)
const themeToggle = document.getElementById('themeToggle');
let theme = 'day'; // Valor inicial
themeToggle.addEventListener('click', () => {
  theme = theme === 'day' ? 'night' : 'day';
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = theme === 'day' ? '🌞' : '🌜';

  // Aplicar el modo oscuro a las tarjetas de productos visibles
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.classList.toggle('dark-theme');
  });

  // Aplicar el modo oscuro al menú de categorías
  const categorias = document.querySelector('.categorias');
  categorias.classList.toggle('dark-theme');

  // Aplicar el modo oscuro al modal
  const modal = document.querySelector('.modal-content');
  modal.classList.toggle('dark-theme');
});

// Modal del carrito
const modal = document.getElementById("carritoModal");
const closeModal = document.querySelector(".close");

// Mostrar modal
document.querySelector(".carrito").addEventListener("click", () => {
  modal.style.display = "block";
  renderCartItems();
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
