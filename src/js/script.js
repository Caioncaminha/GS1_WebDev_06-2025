const menuOpen = document.querySelector('.menu-mobile-open');
const menuClose = document.querySelector('.menu-mobile-close');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileBlock = document.querySelector('.menu-mobile-block');
const carrosel = document.querySelector('.carrosel');

menuOpen.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
    menuMobileBlock.style.display = 'flex';
    carrosel.style.display = 'none';
})

menuClose.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    menuMobileBlock.style.display = 'none';
    carrosel.style.display = 'flex';
})

function setTheme(mode) {
    let bgColorH = '#008d8d';
    let bgColorF = '#008d8d';
    let bgColor = "#fff";
    let textColor = "#000";
    let formBg = "#f9f9f9";
    let formText = "#000";

    if (mode === "dark") {
        bgColorH = '#005c5c';
        bgColorF = '#005c5c';
        bgColor = "#111";
        textColor = "#fff";
        formBg = "#aaa";      // Formulário cinza
        formText = "#fff";    // Texto branco no formulário
    } else if (mode === "blue") {
        bgColorH = '#036e8f';
        bgColorF = '#036e8f';
        bgColor = "#e0f7fa";
        textColor = "#004d40";
        formBg = "#f9f9f9";
        formText = "#000";
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

    // Atualiza o formulário se existir
    const form = document.getElementById("relatoForm");
    if (form) {
        form.style.backgroundColor = formBg;
        form.style.color = formText;
        // Atualiza inputs, selects e textarea para tema dark
        form.querySelectorAll("input, select, textarea").forEach(el => {
            el.style.backgroundColor = formBg;
            el.style.color = formText;
            el.style.borderColor = mode === "dark" ? "#444" : "#ccc";
        });
    }
}