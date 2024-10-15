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

import isMobile from "./modules/utils/isMobile.js";

const shareGallery = document.querySelector(".share__body");

if (shareGallery && !isMobile()) {
    const shareGallery = document.querySelector(".share__body");
    const shareItems = document.querySelector(".share__items");
    const shareColumns = document.querySelectorAll(".share__column");

    const speed = parseFloat(shareGallery.dataset.speed) || 1;

    let positionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle() {
        let ShareItemsWidth = 0;
        shareColumns.forEach((column) => {
            ShareItemsWidth += column.offsetWidth;
        });

        const shareDiff = ShareItemsWidth - shareGallery.offsetWidth;
        const distX = coordXprocent - positionX;

        positionX += distX * speed;

        // Убираем ограничения, чтобы позволить двигаться в обе стороны
        // Применяем только ограничение по ширине колонок
        positionX = Math.max(-shareDiff, Math.min(positionX, shareDiff));

        const position = (shareDiff / 200) * positionX; // инвертируем позицию для корректного смещения
        shareItems.style.transform = `translate3d(${-position}px, 0, 0)`;

        // Продолжаем анимацию, если есть движение
        if (Math.abs(distX) > 0.1) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            shareGallery.classList.remove("_init");
        }
    }

    shareGallery.addEventListener("mousemove", function(e) {
        const shareWidth = shareGallery.offsetWidth;
        const coordX = e.pageX - shareWidth / 2;
        coordXprocent = (coordX / shareWidth) * 200;

        if (!shareGallery.classList.contains("_init")) {
            requestAnimationFrame(setMouseGalleryStyle);
            shareGallery.classList.add("_init");
        }
    });
}
