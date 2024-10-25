import { getCategorizedData } from "../helpers/ajax.js";
import { sheetHome } from "../helpers/urls.js"; // Asegúrate de importar SheetHome

export const homepage = async () => {

    const categorizedObjects = await getCategorizedData(sheetHome);

    const container = document.createElement("div");
    container.classList.add("scroll-container");

    const sheetNames = Object.keys(categorizedObjects);
    sheetNames.forEach(sheetName => {
        const productos = categorizedObjects[sheetName];

        const scrollDiv = document.createElement("div");
        scrollDiv.classList.add("scroll");
        scrollDiv.style.overflowY = "auto";
        scrollDiv.style.maxHeight = "400px"; 
        
        productos.forEach(producto => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="app/assets/images/productos/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
            `;
            scrollDiv.appendChild(productCard);
        });

        container.appendChild(scrollDiv);
    });

    return container; 
};
