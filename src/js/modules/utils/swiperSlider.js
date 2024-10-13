// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

// mainSlider
export function initializeMainSlider() {
    const mainSlider = new Swiper(".main-slider", {
        observeParents: true,
        observer: true,
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 800,
        watchOverflow: true,
        parallax: true,

        navigation: {
            nextEl: ".main-slider__arrow_next",
            prevEl: ".main-slider__arrow_prev",
        },

        pagination: {
            el: ".main-slider__dots",
            clickable: true,
        },

        breakpoints: {
            992: {
                spaceBetween: 32,
                initialSlide: 1,
            },
        },
    });

    return mainSlider;
}

// blogSlider
export function initializeBlogSlider() {
    const blogSlider = new Swiper(".blog-slider", {
        observeParents: true,
        observer: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        watchOverflow: true,
        parallax: true,
        // autoHeight: true,

        navigation: {
            nextEl: ".blog-slider__arrow_next",
            prevEl: ".blog-slider__arrow_prev",
        },

        pagination: {
            el: ".blog-slider__dots",
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1200: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
        },
    });

    return blogSlider;
}

// roomsSlider
export function initializeRoomsSlider() {
    const roomsSlider = new Swiper(".rooms-slider", {
        observeParents: true,
        observer: true,
        // loop: true,
        slidesPerView: "auto",
        initialSlide: 1,
        spaceBetween: 24,
        speed: 800,
        watchOverflow: true,
        parallax: true,

        navigation: {
            nextEl: ".rooms-slider__arrow_next",
            prevEl: ".rooms-slider__arrow_prev",
        },

        pagination: {
            el: ".rooms-slider__dots",
            clickable: true,
        },

        breakpoints: {
            // 768: {
            //     spaceBetween: 25,
            //     slidesPerView: "auto",
            //     initialSlide: 2,
            // },
            992: {
                slidesPerView: "auto",
                spaceBetween: 24,
                initialSlide: 1,
                loop: true
            },
        },
    });

    return roomsSlider;
}
