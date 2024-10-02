import moveElement from "./modules/utils/moveElement.js";
document.addEventListener("DOMContentLoaded", moveElement);
window.addEventListener("resize", moveElement);

import { initMobileNav, UpdateMobileNav } from "./modules/mobile-nav.js";
document.addEventListener("DOMContentLoaded", initMobileNav);
window.addEventListener("resize", UpdateMobileNav);



import subList from "./modules/sub-list.js";
subList();

import search from "./modules/search.js";
search();

import footerNav from "./modules/footer-nav.js";
footerNav();

import prodactsShow from "./modules/products-show.js";
prodactsShow();

import { initializeMainSlider } from "./modules/utils/swiperSlider.js";
initializeMainSlider();

import { initializeBlogSlider } from "./modules/utils/swiperSlider.js";
initializeBlogSlider();

import { initializeRoomsSlider } from "./modules/utils/swiperSlider.js";
initializeRoomsSlider();
