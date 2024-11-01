export const Header = () => {
    let nav = document.createElement("nav")

    nav.innerHTML =`
    <header id="main-header">
        <div class="logo"><a href="">La tienda de Luca</a></div>
<<<<<<< HEAD
        <a id="catal" href="#/catalogo">Catalogo</a>
            <div class="header-icons">
                <button id="themeToggle" class="theme-toggle">🌞</button>
            </div>
            
=======
        <a href="#/catalogo">Catalogo</a>
            <div class="header-icons">
                <button id="themeToggle" class="theme-toggle">🌞</button>
            </div>
>>>>>>> origin/main
    </header>
    `
    return nav

}