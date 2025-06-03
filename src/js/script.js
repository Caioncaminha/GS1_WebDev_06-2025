const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.style.display = 'flex';
})

menuClose.addEventListener('click', () => {
    nav.style.display = 'none'
})
function setTheme(mode) {
    let bgColor = "#fff";
    let textColor = "#000";

    if (mode === "dark") {
        bgColor = "#111";
        textColor = "#eee";
    } else if (mode === "blue") {
        bgColor = "#e0f7fa";
        textColor = "#004d40";
    }

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    // Atualiza elementos interativos
    const allElements = document.querySelectorAll("nav, footer, section");
    allElements.forEach(el => {
        el.style.backgroundColor = bgColor;
        el.style.color = textColor;
    });
}