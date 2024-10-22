import hasTouchSupport from "./utils/hasTouchSupport";

const subList = () => {
    document.addEventListener("click", (e) => {
        const target = e.target;

        if (window.innerWidth >= 768 && hasTouchSupport()) {
            if (target.classList.contains("nav__arrow") || target.closest(".nav__arrow")) {
                target.closest(".nav__item").classList.toggle("_active");
            }
            if (!target.closest(".nav__item") && document.querySelectorAll(".nav__item").length > 0) {
                document.querySelectorAll(".nav__item").forEach((item) => {
                    item.classList.remove("_active");
                });
            }
        }
    });
};

export default subList;
