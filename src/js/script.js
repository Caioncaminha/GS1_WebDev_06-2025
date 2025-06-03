const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.style.display = 'flex';
})

menuClose.addEventListener('click', () => {
    nav.style.display = 'none'
})