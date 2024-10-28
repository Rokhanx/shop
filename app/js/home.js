import { getCategorizedData } from "../helpers/ajax.js";
import { sheetHome } from "../helpers/urls.js"; // Asegúrate de importar SheetHome

export const homepage = async () => {
    const categorizedObjects = await getCategorizedData(sheetHome);
    
    const container = document.createElement("div");
    container.classList.add("scroll-container");

    const sheetNames = Object.keys(categorizedObjects);

    // Crear el encabezado de productos destacados una sola vez
    const header = document.createElement("h2");
    header.classList.add("destc");
    header.textContent = "Productos Destacados"; // Cambia el texto según sea necesario
    container.appendChild(header); // Agregar el encabezado al contenedor

    // Iterar sobre cada hoja para crear las tarjetas de productos
    sheetNames.forEach(sheetName => {
        const productos = categorizedObjects[sheetName];

        const carouselContainer = document.createElement("div");
        carouselContainer.classList.add("carousel-container");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let currentIndex = 0;

        // Crear las tarjetas de productos
        productos.forEach((producto, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card1");
            productCard.innerHTML = `
                <h4>${producto.nombre}</h4>
                <img src="app/assets/images/productos/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
            `;
            imageContainer.appendChild(productCard); // Agregar las tarjetas dentro del imageContainer
        });

        // Mostrar solo la imagen actual
        const updateVisibleImage = () => {
            const cards = imageContainer.children;
            Array.from(cards).forEach((card, index) => {
                card.style.display = index === currentIndex ? 'block' : 'none';
            });
        };

        updateVisibleImage(); // Inicializar mostrando la primera imagen

        const prevButton = document.createElement("button");
        prevButton.innerText = "◀";
        prevButton.classList.add("carousel-button");
        prevButton.onclick = () => {
            currentIndex = (currentIndex - 1 + productos.length) % productos.length;
            updateVisibleImage();
        };

        const nextButton = document.createElement("button");
        nextButton.innerText = "▶";
        nextButton.classList.add("carousel-button");
        nextButton.onclick = () => {
            currentIndex = (currentIndex + 1) % productos.length;
            updateVisibleImage();
        };

        // Añadir elementos al contenedor
        carouselContainer.appendChild(imageContainer);
        carouselContainer.appendChild(prevButton);
        carouselContainer.appendChild(nextButton);
        container.appendChild(carouselContainer);
    });

    return container; 
};
