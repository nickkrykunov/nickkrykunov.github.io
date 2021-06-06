const body = document.querySelector('body');
const header_burger = document.querySelector('.header__burger');
const header_menu = document.querySelector('.header__menu');


header_burger.addEventListener('click', function(event){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});