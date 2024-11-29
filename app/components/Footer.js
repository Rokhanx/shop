export const Footer = () => {
    let footer =document.createElement("footer")


    const whatsappNumber = '5493484237789';

    let mensaje = 'Hola, me comunico a traves de la Tienda de Luca';

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`


    footer.innerHTML=`
    <footer>
    <span>Podes comunicarte con nosotros por WhatsApp   </span>
    <a href="${url}" target="_blank"><img src="/app/assets/icons/wsp.png" alt="img" style="width:42px;height:42px;"></a>
</footer>

    `
    return footer
}