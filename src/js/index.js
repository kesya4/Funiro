// -----Global----- //

// Anchors Scroll ---
import initSmoothScroll from "./modules/utils/anchorScroll.js";
document.addEventListener("DOMContentLoaded", initSmoothScroll(".header__wrapper"));
// Navigation fixed + scroll ---
import { updateNavScroll } from "./modules/navigation.js";
updateNavScroll();
// Mobile navigation ---
import { initMobileNav, UpdateMobileNav } from "./modules/mobile-nav.js";
document.addEventListener("DOMContentLoaded", initMobileNav);
window.addEventListener("resize", UpdateMobileNav);

// -----Global----- //

import subList from "./modules/sub-list.js";
subList();

import search from "./modules/search.js";
search();

import footerNav from "./modules/footer.js";
footerNav();

import prodactsShow from "./modules/products-show.js";
prodactsShow();

import { initializeMainSlider } from "./modules/utils/swiperSlider.js";
initializeMainSlider();

import { initializeBlogSlider } from "./modules/utils/swiperSlider.js";
initializeBlogSlider();

import { initializeRoomsSlider } from "./modules/utils/swiperSlider.js";
initializeRoomsSlider();

AOS.init();
Fancybox.bind('[data-fancybox="share-gallery"]', {});

import "./modules/shareGallery.js";

import "./modules/signPopup.js";

