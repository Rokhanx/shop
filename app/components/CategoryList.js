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

    let h2 = document.createElement("h2")
    h2.innerText ="Categorias"
    let span = document.createElement("span")
    span.id = "flecha"
    span.className = "flecha"
    span.innerText = "▼"
    h2.appendChild(span)


  
    div.appendChild(h2)
    
    return div;
}
