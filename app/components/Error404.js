export function Error404 () {
    const div = document.createElement("div")
    div.id = "error404"

    div.innerHTML = `
    <h3>Error 404</h3>
    <a href="" class="backhome">Volver al inicio</a>
    
    `

    return div
}