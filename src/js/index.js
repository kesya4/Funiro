// -----Global----- //
// Data
import products from "./data/products.js";
// Utils
import "./modules/utils/overlay.js";
import initSmoothScroll from "./modules/utils/anchorScroll.js";
// Navigation
import { updateNavScroll } from "./modules/navigation.js";
import { initMobileNav, UpdateMobileNav } from "./modules/mobile-nav.js";
// Slider
import { initializeMainSlider, initializeBlogSlider, initializeRoomsSlider } from "./modules/utils/swiperSlider.js";
// Other modules
import subList from "./modules/sub-list.js";
import search from "./modules/search.js";
import footerNav from "./modules/footer.js";
import { renderProductCards, showMoreProducts } from "./modules/products.js";
import cartActions from "./modules/cartPopup.js";
import "./modules/shareGallery.js";
import "./modules/signPopup.js";

// -----Initialization----- //
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll(".header__wrapper");
    updateNavScroll();
    initMobileNav();
    subList();
    search();
    footerNav();
    const productsContainer = document.querySelector(".products__cards");
    renderProductCards(products, productsContainer);
    showMoreProducts(products, productsContainer);
    cartActions();
    initializeMainSlider();
    initializeBlogSlider();
    initializeRoomsSlider();

    // AOS and Fancybox initialization
    AOS.init();
    Fancybox.bind('[data-fancybox="share-gallery"]', {});
});

window.addEventListener("resize", () => {
    UpdateMobileNav();
});
