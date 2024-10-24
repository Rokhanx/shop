import { CategoryList } from "./CategoryList.js"
import { ContainerCards } from "./ContainerCards.js"
import { getCategorizedData } from "../helpers/ajax.js"
import { ModalCarrito } from "./ModalCarrito.js"
import { Carrito } from "./Carrito.js"
import { CatalogoRef } from "./Catalogo.js"




export const Router = () =>{

    let {hash} = location

    section.innerHTML = "";

    console.log(hash)

    

    if (location.hash === "" || hash == "#/"){
        section.innerHTML = "";
        document.querySelector("#section").appendChild(CatalogoRef())


        
    } else if (location.hash  === "#/catalogo"){
        section.innerHTML = ""; 
        document.querySelector("#section").appendChild(ContainerCards())

    }


}