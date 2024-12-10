const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-menu-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});
