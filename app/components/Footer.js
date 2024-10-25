export const Footer = () => {
    let footer =document.createElement("footer")


    footer.innerHTML=`
    <footer>Todos los derechos reservados</footer>
    <img id="foo" class="about"  src="app/assets/icons/icons8-información-16.png" alt="about us">
    `
    return footer
}