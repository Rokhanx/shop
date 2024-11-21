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



    } else {
        //Muestra una pagina de error en el caso que la url este mal
        document.querySelector("#section").appendChild(Error404())
    }


}