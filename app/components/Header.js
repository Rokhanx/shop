export const Header = () => {
    let nav = document.createElement("nav")

    nav.innerHTML =`
    <header id="main-header">
        <div class="logo">La tienda de Luca</div>
            <div class="header-icons">
                <button id="themeToggle" class="theme-toggle">🌞</button>
            </div>
    </header>
    `
    return nav

}