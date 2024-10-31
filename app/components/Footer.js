export const Footer = () => {
    let footer =document.createElement("footer")


    footer.innerHTML=`
    <footer>
    <span>Todos los derechos reservados</span>
    <img id="foo" class="about" src="app/assets/icons/abt.png" alt="about us" />
</footer>

    `
    return footer
}