import { sheetNames } from "../helpers/urls.js"

export function toggleCategorias() {
  const categoryList = document.getElementById('categoryList');
  const flecha = document.getElementById('flecha');
  categoryList.classList.toggle('desplegado');
  flecha.classList.toggle('rotado');
}



function createCategoryList() {
    const ul = document.createElement('ul');
    ul.id = "categoryList"
    ul.style.listStyleType = 'none';

    sheetNames.forEach(sheetName => {
      const li = document.createElement('li');
      li.textContent = sheetName;
      // Añadir un evento
        li.addEventListener('click', () => {
          console.log(`Categoría seleccionada: ${sheetName}`);
        });
      ul.appendChild(li);
    });
    
    return ul; 
}

export const CategoryList = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "categoryList");
    

    div.innerHTML = `
        <h2>Categorías <span id="flecha" class="flecha">▼</span></h2>
    `;
    
    return div;
}
