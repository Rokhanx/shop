import { CategoryList } from "./components/CategoryList.js"
import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"
import { getCategorizedData } from "./helpers/ajax.js"
//import { toggleTheme } from '../app/helpers/theme.js';
//import { Carrito } from "./components/Carrito.js"
import { Events } from "./components/Events.js"
import { ModalCarrito } from "./components/ModalCarrito.js"



export const App = () => {
    let divRoot = document.querySelector("#root")


    divRoot.append(Header())
    divRoot.append(Main())


    Router()




    Events()



}
