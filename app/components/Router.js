import { CategoryList } from "./CategoryList.js"
import { ContainerCards } from "./ContainerCards.js"
import { getCategorizedData } from "../helpers/ajax.js"
import { ModalCarrito } from "./ModalCarrito.js"
import { Carrito } from "./Carrito.js"
import { CatalogoRef } from "./Catalogo.js"
import { homepage } from "../js/home.js"
import { Error404 } from "./Error404.js"





export const Router = async () =>{

    let {hash} = location

    section.innerHTML = "";

    console.log(hash)
    document.querySelector("#section").appendChild(ModalCarrito())
    Carrito()

    

    if (location.hash === "" || hash == "#/"){
        const homeContent = await homepage();
        section.appendChild(homeContent);   
    } else if (location.hash  === "#/catalogo"){
        document.querySelector("#section").appendChild(ContainerCards())
    } else {
        document.querySelector("#section").appendChild(Error404())

    }


}