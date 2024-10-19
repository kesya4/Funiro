// import isMobile from "./utils/isMobile";

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-popup");
    const cartButtonOpen = document.querySelectorAll(".cart-open");
    const cartButtonClose = document.querySelector(".cart-popup__close");
    const overlayContainer = document.querySelector(".overlay");

    function cartOpen() {
        cartContainer.classList.add("_active");
        overlayContainer.classList.add("_active");
    }

    function cartClose() {
        cartContainer.classList.remove("_active");
        overlayContainer.classList.remove("_active");
    }

    cartButtonOpen.forEach((elem) => {
        elem.addEventListener("click", () => {
            cartOpen();
        });
    });

    cartButtonClose.addEventListener("click", () => {
        cartClose();
    });

    // Counter
    const btnPlus = document.querySelector(".cart-product__control_plus");
    const btnMinus = document.querySelector(".cart-product__control_minus");
    const countValue = document.querySelector(".cart-product__count");
    let counter = 1;

    function updateDisplay() {
        countValue.textContent = `${counter}`;
        btnMinus.classList.toggle("_disabled", counter === 1);
    }

    // Инициализация отображения
    updateDisplay();

    btnPlus.addEventListener("click", function() {
        counter++;
        updateDisplay();
    });

    btnMinus.addEventListener("click", function() {
        if (counter > 1) {
            counter--;
            updateDisplay();
        }
    });
});
