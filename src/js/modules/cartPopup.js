// import isMobile from "./utils/isMobile";

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-popup");
    const cartButtonOpen = document.querySelectorAll(".cart-open");
    const cartButtonClose = document.querySelector(".cart-popup__close");
    const overlayContainer = document.querySelector(".overlay");

    // Close with touch
    cartContainer.addEventListener("click", (event) => {
        const target = event.target;

        if (target.closest(".cart-popup") && !target.closest(".cart-product")) {
            cartClose();
        }
    });
    overlayContainer.addEventListener("click", () => {
        cartClose();
    });

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

    cartContainer.addEventListener("click", (event) => {
        const target = event.target;
        let countValue, minusBtn;

        // Проверяем, нажали ли на кнопку увеличения или уменьшения
        if (target.classList.contains("cart-product__control_plus") || target.classList.contains("cart-product__control_minus")) {
            const controlsContainer = target.closest(".cart-product__counter");
            countValue = controlsContainer.querySelector(".cart-product__count");
            minusBtn = controlsContainer.querySelector(".cart-product__control_minus");

            if (target.classList.contains("cart-product__control_plus")) {
                countValue.textContent = parseInt(countValue.textContent, 10) + 1;
            }
            if (target.classList.contains("cart-product__control_minus")) {
                if (parseInt(countValue.textContent, 10) > 1) {
                    countValue.textContent = parseInt(countValue.textContent, 10) - 1;
                }
            }

            updateDisplay();
        }
        function updateDisplay() {
            minusBtn.classList.toggle("_disabled", parseInt(countValue.textContent) === 1);
        }
    });

    // --- Add / remove product to cart ---

    // Add

    const cartListContainer = document.querySelector(".cart-popup__list");
    const addProductBtn = document.querySelectorAll(".card-product__btn");

    const productInfo = {}; // Object with newly added card

    addProductBtn.forEach((product) => {
        product.addEventListener("click", () => {
            cartOpen();
            const targetProduct = product.closest(".card-product");

            const productImage = targetProduct.querySelector("img");
            const productName = targetProduct.querySelector(".card-info__title");
            const productDescription = targetProduct.querySelector(".card-info__desc");
            const productPrice = targetProduct.querySelector(".card-info__price_current");
            const productId = targetProduct.getAttribute("data-id");

            // Object keys set
            productInfo.image = productImage.src;
            productInfo.name = productName.textContent;
            productInfo.desc = productDescription.textContent;
            productInfo.price = productPrice.textContent;
            productInfo.id = productId;

            const productInCart = cartListContainer.querySelector(`[data-id="${productInfo.id}"]`);

            if (productInCart) {
                const countElement = productInCart.querySelector(".cart-product__count");
                minusBtn = productInCart.querySelector(".cart-product__control_minus");
                countElement.textContent = parseInt(countElement.textContent) + 1;
                minusBtn.classList.remove("_disabled");
            } else {
                renderProductInCart();
            }

            // Remove

            const cartProduct = document.querySelectorAll(".cart-product");
            if (cartProduct.length > 0) {
                const removeProductBtn = document.querySelectorAll(".cart-product__close");
                removeProductBtn.forEach((btn) => {
                    btn.addEventListener("click", function(event) {
                        const target = event.target;
                        const targetProduct = btn.closest(".cart-product");
                        targetProduct.remove();
                    });
                });
            }
        });
    });

    // Render product in cart list
    function renderProductInCart() {
        const div = document.createElement("div");
        div.classList.add("cart-product");
        div.setAttribute("data-id", productInfo.id);
        div.innerHTML = `
                    <button type="button" class="cart-product__close">
                        <span class="visually-hidden">Remove product from cart</span>
                        <svg>
                            <use href="./img/svgsprite/sprite.symbol.svg#close-icon"></use>
                        </svg>
                    </button>
                    <img src="${productInfo.image}" alt="IMAGE" class="cart-product__img" />
                    <div class="cart-product__info">
                        <div class="cart-product__name">
                            <h3 class="cart-product__title">${productInfo.name}</h3>
                            <p class="text-md cart-product__subtitle">${productInfo.desc}</p>
                        </div>
                        <div class="cart-product__details">
                            <div class="cart-product__counter">
                                <button type="button" class="btn btn_orange cart-product__control cart-product__control_minus _disabled"><span class="visually-hidden">Add one count of product</span>-</button>
                                <span class="text-md cart-product__count">1</span>
                                <button type="button" class="btn btn_orange cart-product__control cart-product__control_plus"><span class="visually-hidden">Remove one count of product</span>+</button>
                            </div>
                            <div class="cart-product__price">${productInfo.price}</div>
                        </div>
                    </div>
        `;
        cartListContainer.append(div);
    }
});
