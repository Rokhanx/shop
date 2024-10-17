import { CategoryList } from "./CategoryList.js"
import { ContainerCards } from "./ContainerCards.js"
import { getCategorizedData } from "../helpers/ajax.js"
import { ModalCarrito } from "./ModalCarrito.js"




export const Router = () =>{

    let {hash} = location

    section.innerHTML = "";

    console.log(hash)

    

    if (hash == "" || hash == "#/"){
        document.querySelector("#section").append(ModalCarrito())

        
    }else if (hash  == "#/catalogo"){
        document.querySelector("#section").append(ModalCarrito())
        //document.querySelector("#section").append(CategoryList())
        document.querySelector("#section").append(ContainerCards())














    }


}