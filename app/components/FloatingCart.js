export function FloatingCart(){
    
    let div = document.createElement("div")
    div.id = "floating-cart"
    div.setAttribute("class", "floating-cart")
    div.innerHTML = `
        <img src="app/assets/icons/bolsa.png" alt="Carrito">
        <span id="cartCount2" class="cart-count">0</span>
    `

    return div
}