export function BtnToTop(){
    let div = document.createElement("div")
    //div.setAttribute("class", "btn-to-top")
    div.id = "btn-to-top"

    div.innerHTML = `
    <button id="scrollTopBtn">⬆</button>
    `
    
    return div
}