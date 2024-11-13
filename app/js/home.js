import { getCategorizedData } from "../helpers/ajax.js";
import { sheetHome } from "../helpers/urls.js"; // Asegúrate de importar SheetHome

export let selectedProductName = "";
export let selectedCategory = "";

export const homepage = async () => {
    const categorizedObjects = await getCategorizedData(sheetHome);
    
    const container = document.createElement("div");
    container.classList.add("scroll-container");

    const sheetNames = Object.keys(categorizedObjects);

    // Crear el encabezado de productos destacados una sola vez
    const header = document.createElement("h2");
    header.classList.add("destc");
    header.textContent = "Productos Destacados 🥵🔥 "; // Cambia el texto según sea necesario
    container.appendChild(header); // Agregar el encabezado al contenedor

    // Iterar sobre cada hoja para crear las tarjetas de productos
    sheetNames.forEach(sheetName => {
        const productos = categorizedObjects[sheetName];

        const carouselContainer = document.createElement("div");
        carouselContainer.classList.add("carousel-container");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let currentIndex = 0;
        let autoScrollInterval;

        // Crear las tarjetas de productos
        productos.forEach((producto, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card1");
            productCard.innerHTML = `
                <h4>${producto.nombre}</h4>
                <img src="app/assets/images/productos/${producto.imagen}" alt="${producto.nombre}">
                <p id="desc">${producto.descripcion}</p>
                <p id="prec">Precio: $${producto.precio}</p>
                <p hidden>${producto.categoria}</p>

                <button class="productoHome">Ver en el Catalogo</button>
            `;
            imageContainer.appendChild(productCard); 


            const button = productCard.querySelector(".productoHome");
            button.addEventListener("click", () => {
            selectedCategory = producto.categoria;
            selectedProductName = producto.nombre;
            //console.log(selectedProductName)
             location.hash = `#/catalogo`; // Redirige con el nombre codificado
            });
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
            resetAutoScroll();
        };

        const nextButton = document.createElement("button");
        nextButton.innerText = "▶";
        nextButton.classList.add("carousel-button");
        nextButton.onclick = () => {
            currentIndex = (currentIndex + 1) % productos.length;
            updateVisibleImage();
            resetAutoScroll();
        };

        // Función para cambiar de imagen automáticamente cada 4 segundos
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % productos.length;
                updateVisibleImage();
            }, 4000); // Cambia cada 4 segundos
        };

        // Función para resetear el auto-scroll cuando se hace clic en los botones
        const resetAutoScroll = () => {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        };

        // Iniciar el auto-scroll
        startAutoScroll();

        // Añadir elementos al contenedor
        carouselContainer.appendChild(imageContainer);
        carouselContainer.appendChild(prevButton);
        carouselContainer.appendChild(nextButton);
        container.appendChild(carouselContainer);
    });

    return container; 
};
