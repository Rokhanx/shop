import { ContainerCards } from "./ContainerCards.js"
import { ModalCarrito } from "./ModalCarrito.js"
import { Carrito } from "./Carrito.js"
import { homepage } from "../js/home.js"
import { Error404 } from "./Error404.js"
import { FloatingCart } from "./FloatingCart.js"
import { BtnToTop } from "./BtnTop.js"





export const Router = async () =>{

    let {hash} = location

    section.innerHTML = "";

    console.log(hash)
    document.querySelector("#section").appendChild(ModalCarrito())
    Carrito()

    

    if (location.hash === "" || location.hash == "#/"){
        const homeContent = await homepage();
        section.appendChild(homeContent);   
    } else if (location.hash  === "#/catalogo"){
        document.querySelector("#section").appendChild(ContainerCards())

        document.querySelector("#section").appendChild(FloatingCart())
        document.querySelector("#section").appendChild(BtnToTop())

        //if (selectedProductName) {
        //    const searchInput = document.querySelector("#buscador"); // Input de búsqueda
        //    searchInput.value = selectedProductName; // Coloca el nombre en el buscador
        //    await new Promise(resolve => setTimeout(resolve, 2000));
        //   searchInput.dispatchEvent(new Event("input")); // Dispara el evento de búsqueda
        //    console.log(selectedProductName)
        //    //selectedProductName = ""; // Limpia la variable después de usarla
        //}



    } else {
        //Muestra una pagina de error en el caso que la url este mal
        document.querySelector("#section").appendChild(Error404())
    }


}