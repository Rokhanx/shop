import { CategoryList } from "./CategoryList.js"
import { ContainerCards } from "./ContainerCards.js"
import { getCategorizedData } from "../helpers/ajax.js"
import { ModalCarrito } from "./ModalCarrito.js"
import { CatalogoRef } from "./Catalogo.js"
import { Carrito } from "./Carrito.js"




export const Router = () =>{

    let {hash} = location

    section.innerHTML = "";

    console.log(hash)


    document.querySelector("#section").append(ModalCarrito())
    Carrito()
    

    

    if (hash == "" || hash == "#/"){
        //document.querySelector("#section").append(CatalogoRef())


        
    }else if (hash  == "#/catalogo"){
        document.querySelector("#section").append(ContainerCards())

    }


}