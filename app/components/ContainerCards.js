import { getCategorizedData } from "../helpers/ajax.js";
import { agregarAlCarrito, carrito } from "./Carrito.js";

export const ContainerCards = () => {

    let productosActuales = [];

    let main = document.createElement("main");
    let aside = document.createElement("aside");
    aside.setAttribute("class", "categorias");
    main.appendChild(aside);

    let ul = document.createElement("ul");
    ul.id = "categoryList";
    ul.setAttribute("class", "desplegado");
    aside.appendChild(ul);

    let div = document.createElement("div");
    div.setAttribute("class", "main-content");
    main.appendChild(div);

    let section = document.createElement("section");
    section.setAttribute("class", "productos");
    section.id = "productos";
    div.appendChild(section);

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
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="app/assets/images/productos/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="add-to-cart-button">Agregar al carrito</button>`;

            // Añadir el event listener al botón
            const button = productCard.querySelector('.add-to-cart-button');
            button.addEventListener('click', () => {
                agregarAlCarrito(producto.nombre, producto.precio, producto.imagen, button);
                console.log(carrito)
            });

            productosSection.appendChild(productCard);
        });
    }

    return main;
};
