export function Error404 () {
    const div = document.createElement("div")
    div.id = "error404"

    div.innerHTML = `
      <div class="content">
        <h3>Error 404</h3>
        <img id="crz" class="error" src="app/assets/icons/cruz.png" alt="cruz" />
      </div>
      <a href="" class="backhome">Volver al inicio</a>
    `

    return div
}
