import isMobile from "./utils/isMobile";

const mobileNav = document.querySelector(".mobile-nav"),
    htmlContainer = document.querySelector("html");
export function initMobileNav() {
    document.addEventListener("click", (e) => {
        const target = e.target;
        // Mobile nav buttons
        if (target.classList.contains("mobile-menu_btn-open") || target.closest(".mobile-menu_btn-open")) {
            mobileNav.classList.add("_active");
            htmlContainer.classList.add("no-scroll");
        } else if (target.classList.contains("mobile-menu_btn-close") || target.closest(".mobile-menu_btn-close")) {
            mobileNav.classList.remove("_active");
            htmlContainer.classList.remove("no-scroll");
        }
        // Spoiler-menu
        if ((target.classList.contains("mobile-nav__item") || target.closest(".mobile-nav__item")) && target.closest(".mobile-nav__item").querySelector(".mobile-nav__arrow")) {
            target.closest(".mobile-nav__item").classList.toggle("_active");
        } else if (!target.closest(".mobile-nav__item")) {
            document.querySelectorAll(".mobile-nav__item").forEach((item) => {
                item.classList.remove("_active");
            });
        }
        // Close after touch
        if (target.closest(".mobile-nav") && !target.classList.contains("mobile-nav__link_drop") && !target.closest(".mobile-nav__search") && !target.closest(".mobile-nav__arrow")) {
            mobileNav.classList.remove("_active");
            htmlContainer.classList.remove("no-scroll");
        }
    });
}

export function UpdateMobileNav() {
    if (!isMobile() && window.innerWidth >= 768) {
        if (mobileNav.classList.contains("_active")) {
            mobileNav.classList.remove("_active");
            htmlContainer.classList.remove("no-scroll");
        }
    }
}
