document.addEventListener("DOMContentLoaded", function() {
    const overlayContainer = document.querySelector(".overlay");
    const signPopup = document.querySelector(".sign-popup");
    const signPopupClose = document.querySelector(".sign-popup__close");
    const signPopupOpen = document.querySelectorAll("#sign-open");

    function popupOpen() {
        overlayContainer.classList.add("_active");
        signPopup.classList.add("_active");
    }

    function popupClose() {
        overlayContainer.classList.remove("_active");
        signPopup.classList.remove("_active");
    }

    signPopupOpen.forEach((elem) => {
        elem.addEventListener("click", () => {
            popupOpen();
        });
    });

    signPopupClose.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest("svg") || target === signPopupClose) {
            popupClose();
        }
    });
});
