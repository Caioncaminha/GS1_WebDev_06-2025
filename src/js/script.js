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
    let bgColorH = '#008d8d';

    let bgColorF = '#008d8d';
    
    let bgColor = "#fff";
    let textColor = "#000"; 

    if (mode === "dark") {
        bgColorH = '#005c5c';
        
        bgColorF = '#005c5c';

        bgColor = "#111";
        textColor = "#fff";
    } else if (mode === "blue") {
        bgColorH = '#036e8f';
        
        bgColorF = '#036e8f';

        bgColor = "#e0f7fa";
        textColor = "#004d40";
    }

    document.querySelector('header').style.backgroundColor = bgColorH;

    document.querySelector('footer').style.backgroundColor = bgColorF;

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    // Atualiza elementos interativos
    const allElements = document.querySelectorAll("section");
    allElements.forEach(el => {
        el.style.backgroundColor = bgColor;
        el.style.color = textColor;
    });
}