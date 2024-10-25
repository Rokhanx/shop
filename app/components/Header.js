export const Header = () => {
    let nav = document.createElement("nav")

    nav.innerHTML =`
    <header id="main-header">
        <div class="logo"><a href="">La tienda de Luca</a></div>
            <div class="header-icons">
                <button id="themeToggle" class="theme-toggle">🌞</button>
            </div>
            <a class="home" href="#/catalogo">Catalogo</a>
    </header>
    `
    return nav

}