import { getCategorizedData } from "../helpers/ajax.js";
import { agregarAlCarrito, carrito } from "./Carrito.js";
import { sheetNames } from "../helpers/urls.js";
import { CategoryList } from "./CategoryList.js";

export const ContainerCards = () => {

    let productosActuales = [];
    let main = document.createElement("main");
    let aside = document.createElement("aside");
    aside.setAttribute("class", "categorias");
    main.appendChild(aside);
    aside.appendChild(CategoryList());

    let ul = document.createElement("ul");
    ul.id = "categoryList";
    ul.setAttribute("class", "desplegado");
    aside.appendChild(ul);
    
    let div = document.createElement("div");
    div.setAttribute("class", "main-content");
    main.appendChild(div);

    let divBuscador = document.createElement("div");
    divBuscador.setAttribute("class", "search-container");
    divBuscador.innerHTML = `<input type="text" id="buscador" placeholder="Buscar productos...">`;
    div.appendChild(divBuscador);

    divBuscador.querySelector("#buscador").addEventListener("input", buscarProducto);

    let section = document.createElement("section");
    section.setAttribute("class", "productos");
    section.id = "productos";
    div.appendChild(section);

    getCategorizedData(sheetNames).then(categorizedObjects => {
        const categoryList = document.getElementById('categoryList');
        
        for (const category of sheetNames) {
            const li = document.createElement('li');
            li.textContent = category;
            li.addEventListener('click', () => {
                mostrarProductos(category, categorizedObjects[category]);
                productosActuales = categorizedObjects[category]; // Actualizar productos de la categoría actual
            });
            categoryList.appendChild(li);
        }

        // Mostrar productos de la categoría por defecto
        const defaultCategory = sheetNames[0];
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
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="app/assets/images/productos/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="add-to-cart-button">Agregar al carrito</button>`;

            const button = productCard.querySelector('.add-to-cart-button');
            button.addEventListener('click', () => {
                agregarAlCarrito(producto.nombre, producto.precio, producto.imagen, button);
                console.log(carrito);
            });

            productosSection.appendChild(productCard);
            //Mostrar cosas ocultas
            aside.style.display = "block";
            divBuscador.style.display = "block";
        });
    }

    // evento para buscar productos
    function buscarProducto() {
        const terminoBusqueda = document.getElementById("buscador").value.toLowerCase();
        const productosFiltrados = productosActuales.filter(producto => 
            producto.nombre.toLowerCase().includes(terminoBusqueda) ||
            producto.descripcion.toLowerCase().includes(terminoBusqueda)
        );
        
        mostrarProductos(null, productosFiltrados); 
    }
    

    return main;
};
