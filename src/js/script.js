// Cargar los datos al inicio
getCategorizedData().then(categorizedObjects => {
  const categoryList = document.getElementById('categoryList');
  for (const category in categorizedObjects) {
    const li = document.createElement('li');
    li.textContent = category;
    li.addEventListener('click', () => mostrarProductos(category, categorizedObjects[category]));
    categoryList.appendChild(li);
  }

  // Mostrar productos de la categoría por defecto
  const defaultCategory = sheetNames[0];
  mostrarProductos(defaultCategory, categorizedObjects[defaultCategory]);
});

// Función para mostrar los productos de una categoría
function mostrarProductos(categoria, productos) {
    const productosSection = document.getElementById('productos');
    productosSection.innerHTML = ''; // Limpiar productos
  
    //Muestra los productos dependiendo si son visibles o no
    const productosVisibles = productos.filter(producto => producto.visible === 'TRUE');
  
    productosVisibles.forEach((producto) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="src/img/${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
        <div class="quantity-controls hidden" id="controls-${producto.nombre}">
          <button onclick="adjustQuantity('${producto.nombre}', -1)">-</button>
          <span id="quantity-${producto.nombre}">1</span>
          <button onclick="adjustQuantity('${producto.nombre}', 1)">+</button>
        </div>`;
      productosSection.appendChild(productCard);
    });
  }
  

// Carrito de compras
const carrito = [];

// Agregar al carrito
function agregarAlCarrito(nombre) {
  carrito.push(nombre);
  document.getElementById('cartCount').textContent = carrito.length;
  document.getElementById(`controls-${nombre}`).classList.remove('hidden');
}

// Ajustar cantidad de productos en el carrito
function adjustQuantity(nombre, amount) {
  const quantitySpan = document.getElementById(`quantity-${nombre}`);
  let currentQuantity = parseInt(quantitySpan.textContent);
  currentQuantity = Math.max(1, currentQuantity + amount);
  quantitySpan.textContent = currentQuantity;
}

// Cambiar tema (día/noche)
const themeToggle = document.getElementById('themeToggle');
let theme = 'day'; // Estado inicial del tema
themeToggle.addEventListener('click', () => {
  theme = theme === 'day' ? 'night' : 'day';
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = theme === 'day' ? '🌞' : '🌜';
});

// Mostrar/ocultar menú en móvil
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
