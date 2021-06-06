import { tns } from 'tiny-slider/src/tiny-slider';

const body = document.querySelector('body');
const header_burger = document.querySelector('.header__burger');
const header_menu = document.querySelector('.header__menu');
const pets_sliders = document.querySelectorAll('.adoptions_list');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

header_burger.addEventListener('click', function(event){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

pets_sliders.forEach(item => {
    const container = item.querySelector('.slider__container');
    const prev_button = item.querySelector('.slider__prev');
    const next_button = item.querySelector('.slider__next');

    tns({
        container: container,
        autoplayButton:false,
        autoplayTimeout:3000,
        nav:false,
        prevButton: prev_button,
        nextButton: next_button,
        autoWidth: false,
        loop:true,
        mouseDrag:true,
        responsive:{
            640:{
                items: 1
            },
            800: {
                items: 3
            }
        }
    });
});


