function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
function updateNavScroll() {
    const nav = document.querySelector(".header__wrapper");
    if (window.scrollY >= nav.clientHeight / 2) {
        nav.classList.add("_scrolled");
    } else {
        nav.classList.remove("_scrolled");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    updateNavScroll();
});
window.addEventListener("scroll", debounce(updateNavScroll, 100));

export { updateNavScroll };
