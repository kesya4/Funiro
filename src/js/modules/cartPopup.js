function cartActions() {
    const cartContainer = document.querySelector(".cart-popup");
    const cartButtonOpen = document.querySelectorAll(".cart-open");
    const cartButtonClose = document.querySelector(".cart-popup__close");
    const overlayContainer = document.querySelector(".overlay");
    const cartListContainer = document.querySelector(".cart-popup__list");
    const productCardsContainer = document.querySelector(".products__cards");

    // function getScrollbarWidth() {
    //     let div = document.createElement("div");
    //     div.style.width = "100px";
    //     div.style.height = "100px";
    //     div.style.overflowY = "scroll";
    //     div.style.visibility = "hidden";
    //     document.documentElement.append(div);
    //     let scrollbarWidth = div.offsetWidth - div.clientWidth;
    //     div.remove();
    //     return scrollbarWidth;
    // }

    // const scroll = getScrollbarWidth();
    // console.log(scroll);

    // Close with touch
    cartContainer.addEventListener("click", (event) => {
        const target = event.target;

        if (target.closest(".cart-popup") && !target.closest(".cart-product")) {
            cartClose();
        }
    });

    cartButtonOpen.forEach((elem) => {
        elem.addEventListener("click", cartOpen);
    });
    cartButtonClose.addEventListener("click", cartClose);

    function cartOpen() {
        // console.log(scroll);
        //     document.documentElement.style.overflow = "hidden";
        //     document.documentElement.style.marginRight = `${scroll}px`;
        cartContainer.classList.add("_active");
        overlayContainer.classList.add("_active");
    }

    function cartClose() {
        // console.log(scroll);
        //     document.documentElement.style.overflow = "";
        //     document.documentElement.style.marginRight = `0px`;
        cartContainer.classList.remove("_active");
        overlayContainer.classList.remove("_active");
    }

    productCardsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("card-product__btn")) {
            const targetProduct = event.target.closest(".card-product");
            const productInfo = {
                name: targetProduct.querySelector(".card-info__title").textContent,
                desc: targetProduct.querySelector(".card-info__desc").textContent,
                price: targetProduct.querySelector(".card-info__price_current").textContent,
                dataPrice: targetProduct.querySelector(".card-info__price_current").getAttribute("data-price"),
                id: targetProduct.getAttribute("data-id"),
            };
            handleAddToCart(productInfo);
            cartOpen();
            calculateTotalCartValue();
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
            <picture>
				<source srcset="
					./img/products/prodact-card-0${productInfo.id}.webp     1x,
					./img/products/prodact-card-0${productInfo.id}_@2x.webp 2x,
					./img/products/prodact-card-0${productInfo.id}_@3x.webp 3x
				" type="image/webp">
				<source srcset="./img/products/prodact-card-0${productInfo.id}.jpg 1x, ./img/products/prodact-card-0${productInfo.id}_@2x.jpg 2x, ./img/products/prodact-card-0${productInfo.id}_@3x.jpg 3x" type="image/jpeg">
				<img src="./img/products/prodact-card-0${productInfo.id}.jpg" alt="IMAGE" class="cart-product__img" loading="lazy"/ width="110" height="117">
			</picture>
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
                    <div class="cart-product__price" data-price="${productInfo.dataPrice}">${productInfo.price}</div>
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
            calculateTotalCartValue();
        });

        cartProduct.addEventListener("click", (event) => {
            const target = event.target;
            const countValue = cartProduct.querySelector(".cart-product__count");
            const minusBtn = cartProduct.querySelector(".cart-product__control_minus");

            if (target.classList.contains("cart-product__control_plus")) {
                countValue.textContent = parseInt(countValue.textContent, 10) + 1;
                calculateTotalCartValue();
            } else if (target.classList.contains("cart-product__control_minus") && parseInt(countValue.textContent, 10) > 1) {
                countValue.textContent = parseInt(countValue.textContent, 10) - 1;
                calculateTotalCartValue();
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
        const cartOrderInfo = document.querySelector(".cart-popup__order");
        const cartBtn = document.querySelector(".cart-popup__btn-order");

        if (cartProduct.length === 0) {
            cartTitle.style.display = "none";
            cartOrderInfo.style.display = "none";
            cartBtn.style.display = "none";

            cartMessage.style.display = "flex";
        } else {
            cartTitle.style.display = "block";
            cartOrderInfo.style.display = "flex";
            cartBtn.style.display = "flex";
            cartMessage.style.display = "none";
        }
    }
    updateCartInfo();

    function calculateTotalCartValue() {
        const cartProducts = document.querySelectorAll(".cart-product");
        const cartTotalValue = document.querySelector(".cart-popup__order-sum");

        let totalCartValue = 0;

        cartProducts.forEach((product) => {
            const productCount = product.querySelector(".cart-product__count");
            const productPrice = product.querySelector(".cart-product__price").getAttribute("data-price");

            const productTotalPrice = parseInt(productPrice) * parseInt(productCount.textContent);
            totalCartValue += productTotalPrice;
        });
        const formattedTotalValue = totalCartValue.toLocaleString("de-DE"); // Используем локаль для Германии
        cartTotalValue.textContent = formattedTotalValue + " Rp";
    }
    calculateTotalCartValue();
}

export default cartActions;
