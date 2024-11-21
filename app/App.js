
import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"

import { Events } from "./helpers/Events.js"

import { Footer } from "./components/Footer.js"


import { applySavedTheme } from "./helpers/themes.js"


export default function App() {
    let divRoot = document.querySelector("#root")
    divRoot.innerHTML = ""


    divRoot.appendChild(Header())

    divRoot.appendChild(Main())

    divRoot.appendChild(Footer())

    applySavedTheme() //aplica modo claro/oscuro guardado
    

    Router()

    Events()
}
