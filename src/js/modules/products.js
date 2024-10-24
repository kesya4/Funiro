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
        <picture>
			<source srcset="
				./img/products/prodact-card-${product.img}.webp     1x,
				./img/products/prodact-card-${product.img}_@2x.webp 2x,
				./img/products/prodact-card-${product.img}_@3x.webp 3x
			" type="image/webp">
			<source srcset="./img/products/prodact-card-${product.img}.jpg 1x, ./img/products/prodact-card-${product.img}_@2x.jpg 2x, ./img/products/prodact-card-${product.img}_@3x.jpg 3x" type="image/jpeg">
			<img src="./img/products/prodact-card-${product.img}.jpg" alt="${product.title}" width="285" height="301" loading="lazy" />
        </picture>
        </a>
        <div class="card-product__info card-info">
            <h3 class="card-info__title">${product.title}</h3>
            <p class="card-info__desc text-md">${product.description}</p>
            <div class="card-info__price">
                <div data-price="${product.dataPrice}" class="card-info__price_current">${product.price}</div>
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

let firstProductIndex = 0;
let lastProductIndex = 4;

export function renderProductCards(products, container) {
    const fragment = document.createDocumentFragment();

    const productsOnPage = products.slice(firstProductIndex, lastProductIndex);

    productsOnPage.forEach((product) => {
        const card = renderProductCard(product);
        fragment.append(card);
    });

    container.append(fragment);
}

export function showMoreProducts(products, container) {
    const btnShow = document.querySelector(".products__btn-more");
    const showIncrement = 2;

    btnShow.addEventListener("click", () => {
        if (lastProductIndex >= products.length) {
            btnShow.style.display = "none";
        }

        firstProductIndex = lastProductIndex;
        lastProductIndex += showIncrement;

        renderProductCards(products, container);
        AOS.refresh();

        if (lastProductIndex >= products.length) {
            btnShow.style.display = "none";
        }
    });
}
