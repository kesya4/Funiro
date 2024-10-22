function renderProductCard(product) {
    const div = document.createElement("div");
    div.classList.add("card-product");
    div.setAttribute("data-id", product.id);

    let badges = "";
    if (product.bageNew) {
        badges += '<div class="card-product__bage_new">New</div>';
    }
    if (product.bageDiscount) {
        badges += `<div class="card-product__bage_discount">${product.bageDiscount}</div>`;
    }

    div.innerHTML = `
        <div class="card-product__bage">
            ${badges}
        </div>
        <a class="card-product__img" href="#">
            <img src="../../img/products/prodact-card-${product.img}.jpg" alt="Image of product" width="285" height="301" loading="lazy" />
        </a>
        <div class="card-product__info card-info">
            <h3 class="card-info__title">${product.title}</h3>
            <p class="card-info__desc text-md">${product.description}</p>
            <div class="card-info__price">
                <div class="card-info__price_current">${product.price}</div>
                <div class="card-info__price_old">${product.priceOld}</div>
            </div>
        </div>
        <div class="card-product__actions">
            <button class="card-product__btn btn">Add to cart</button>
            <div class="card-product__links">
                <a href="#!" class="card-product__link card-product__link_share">
                    <svg>
                        <use href="./img/svgsprite/sprite.symbol.svg#share-icon"></use>
                    </svg>
                    Share
                </a>
                <a href="#!" class="card-product__link card-product__link_favorite">
                    <svg>
                        <use href="./img/svgsprite/sprite.symbol.svg#favorites"></use>
                    </svg>
                    Like
                </a>
            </div>
        </div>
    `;
    return div;
}

function appendProductCard(productCard, container) {
    container.append(productCard);
}

function renderProductCards(products, container) {
    const fragment = document.createDocumentFragment(); 

    products.forEach((product) => {
        const card = renderProductCard(product);
        fragment.append(card); 
    });

    container.append(fragment); 
}

export { renderProductCards };
