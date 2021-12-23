import { createDropdown } from "./dropdown";
import { createSlideMenu } from './mobile-menu';
import { createCarousel } from './carousel';
import './style.css';
import '@fortawesome/fontawesome-free/js/all';

(function () {
    const navbar = document.querySelector('.navbar');
    createDropdown(navbar, 'hover');

    const carousel = document.querySelector('.carousel-container');
    createCarousel(carousel);
})();