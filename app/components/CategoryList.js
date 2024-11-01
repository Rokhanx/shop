import { sheetNames } from "../helpers/urls.js"

export function toggleCategorias() {
  const categoryList = document.getElementById('categoryList');
  const flecha = document.getElementById('flecha');
  categoryList.classList.toggle('desplegado');
  flecha.classList.toggle('rotado');
}

export const CategoryList = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "categoryList");

    let h2 = document.createElement("h2");
    h2.innerText = "Categorias";

    let span = document.createElement("span");
    span.id = "flecha";
    span.className = "flecha";
    span.innerText = "▼";
    h2.appendChild(span);

    h2.addEventListener("click", toggleCategorias);

    div.appendChild(h2);

    
    const ul = document.createElement("ul");
    ul.id = "categoryList";
    ul.classList.add("desplegado");
    div.appendChild(ul);

    return div;
}
