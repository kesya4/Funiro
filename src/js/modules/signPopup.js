document.addEventListener("DOMContentLoaded", function() {
    const overlayContainer = document.querySelector(".overlay");
    const signPopup = document.querySelector(".sign-popup");
    const signPopupClose = document.querySelector(".sign-popup__close");
    const signPopupOpen = document.querySelector("#sign-open");
    const htmlContainer = document.querySelector("html");

    function popupOpen() {
        overlayContainer.style.display = "block";
        signPopup.classList.add("_active");
    }

    function popupClose() {
        overlayContainer.style.display = "none";
        signPopup.classList.remove("_active");
    }

    signPopupOpen.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest("img") || target === signPopupOpen) {
            popupOpen();
        }
    });

    signPopupClose.addEventListener("click", function(event) {
        const target = event.target;
        if (target.closest("svg") || target === signPopupClose) {
            popupClose();
        }
    });
});
