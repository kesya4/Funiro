function cartActions() {
    const cartContainer = document.querySelector(".cart-popup");
    const cartButtonOpen = document.querySelectorAll(".cart-open");
    const cartButtonClose = document.querySelector(".cart-popup__close");
    const overlayContainer = document.querySelector(".overlay");
    const cartListContainer = document.querySelector(".cart-popup__list");

    // Открытие и закрытие корзины
    cartButtonOpen.forEach((elem) => {
        elem.addEventListener("click", cartOpen);
    });
    cartButtonClose.addEventListener("click", cartClose);

    function cartOpen() {
        cartContainer.classList.add("_active");
        overlayContainer.classList.add("_active");
    }

    function cartClose() {
        cartContainer.classList.remove("_active");
        overlayContainer.classList.remove("_active");
    }

    // Делегирование событий для добавления продуктов в корзину
    document.querySelector(".products__cards").addEventListener("click", (event) => {
        if (event.target.classList.contains("card-product__btn")) {
            const targetProduct = event.target.closest(".card-product");
            const productInfo = {
                image: targetProduct.querySelector("img").src,
                name: targetProduct.querySelector(".card-info__title").textContent,
                desc: targetProduct.querySelector(".card-info__desc").textContent,
                price: targetProduct.querySelector(".card-info__price_current").textContent,
                id: targetProduct.getAttribute("data-id"),
            };
            handleAddToCart(productInfo);
            cartOpen(); // Открытие корзины после добавления
        }
    });

    function handleAddToCart(productInfo) {
        const productInCart = cartListContainer.querySelector(`[data-id="${productInfo.id}"]`);

        if (productInCart) {
            const countElement = productInCart.querySelector(".cart-product__count");
            const minusBtn = productInCart.querySelector(".cart-product__control_minus");
            countElement.textContent = parseInt(countElement.textContent, 10) + 1;
            minusBtn.classList.remove("_disabled");
        } else {
            renderProductInCart(productInfo);
        }

        updateCartIconItemCount();
        updateCartInfo();
    }

    // Рендеринг продукта в корзину
    function renderProductInCart(productInfo) {
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
                        <button type="button" class="btn btn_orange cart-product__control cart-product__control_minus _disabled">-</button>
                        <span class="text-md cart-product__count">1</span>
                        <button type="button" class="btn btn_orange cart-product__control cart-product__control_plus">+</button>
                    </div>
                    <div class="cart-product__price">${productInfo.price}</div>
                </div>
            </div>
        `;
        cartListContainer.append(div);
        // Привязываем обработчики для кнопок в новом элементе
        bindCartProductEvents(div);
    }

    function bindCartProductEvents(cartProduct) {
        cartProduct.querySelector(".cart-product__close").addEventListener("click", () => {
            cartProduct.remove();
            updateCartIconItemCount();
            updateCartInfo();
        });

        cartProduct.addEventListener("click", (event) => {
            const target = event.target;
            const countValue = cartProduct.querySelector(".cart-product__count");
            const minusBtn = cartProduct.querySelector(".cart-product__control_minus");

            if (target.classList.contains("cart-product__control_plus")) {
                countValue.textContent = parseInt(countValue.textContent, 10) + 1;
            } else if (target.classList.contains("cart-product__control_minus") && parseInt(countValue.textContent, 10) > 1) {
                countValue.textContent = parseInt(countValue.textContent, 10) - 1;
            }

            minusBtn.classList.toggle("_disabled", parseInt(countValue.textContent) === 1);
        });
    }

    function updateCartIconItemCount() {
        const cartProduct = document.querySelectorAll(".cart-product");
        const cartCounterItems = document.querySelectorAll(".cart-counter__value");
        cartCounterItems.forEach((item) => {
            item.textContent = cartProduct.length;
        });
    }

    function updateCartInfo() {
        const cartProduct = document.querySelectorAll(".cart-product");
        const cartTitle = document.querySelector(".cart-popup_title");
        const cartMessage = document.querySelector(".cart-popup__notification");

        if (cartProduct.length === 0) {
            cartTitle.style.display = "none";
            cartMessage.style.display = "flex";
        } else {
            cartTitle.style.display = "block";
            cartMessage.style.display = "none";
        }
    }

    updateCartInfo();
}

export default cartActions;
