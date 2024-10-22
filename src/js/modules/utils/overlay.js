document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    const cartModal = document.querySelector(".cart-popup"); 
    const signModal = document.querySelector(".sign-popup"); 

    function closeModals() {
        cartModal.classList.remove("_active"); 
        signModal.classList.remove("_active");
        overlay.classList.remove("_active");
    }

    overlay.addEventListener("click", closeModals);
});
