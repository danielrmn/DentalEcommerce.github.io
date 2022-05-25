const menu = document.getElementById('menu');
const btn = document.getElementById('menu-btn');
const close = document.querySelector('.close');
const span = document.querySelector('.menu-btn span')

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    close.classList.toggle('active');
    span.classList.toggle('active');
})

