import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper(
    '.swiper', {
        loop: true,
        autoplay: {
            delay: 10000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }
);