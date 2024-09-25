function productsShow() {
    document.addEventListener("DOMContentLoaded", function() {
        let currentVisible = 4;
        const prodactCards = document.querySelectorAll("[data-id]");
        prodactCards.forEach((product, index) => {
            if (index >= currentVisible) {
                product.style.display = "none";
            }
        });
        const btnShowMore = document.querySelector(".products__btn-more");
        btnShowMore.addEventListener("click", function() {
            currentVisible += 2;
            setTimeout(() => {
                prodactCards.forEach((product, index) => {
                    if (index < currentVisible) {
                        product.style.display = "flex";
                    }
                });
                if (currentVisible >= prodactCards.length) {
                    btnShowMore.style.display = "none";
                }
            }, 300);
        });
    });
}
export default productsShow;
