import isMobile from "./utils/isMobile";

const shareGallery = document.querySelector(".share__body");
const shareItems = document.querySelector(".share__items");
if (shareGallery && !isMobile()) {
    const shareColumns = document.querySelectorAll(".share__column");

    const speed = parseFloat(shareGallery.dataset.speed) || 1;

    let positionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle() {
        let ShareItemsWidth = 0;
        shareColumns.forEach((column) => {
            ShareItemsWidth += column.offsetWidth;
        });

        const shareDiff = ShareItemsWidth - shareGallery.offsetWidth;
        const distX = coordXprocent - positionX;

        positionX += distX * speed;

        positionX = Math.max(-shareDiff, Math.min(positionX, shareDiff));

        const position = (shareDiff / 200) * positionX;
        shareItems.style.transform = `translate3d(${-position}px, 0, 0)`;

        if (Math.abs(distX) > 0.1) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            shareGallery.classList.remove("_init");
        }
    }

    shareGallery.addEventListener("mousemove", function(e) {

        const shareWidth = shareGallery.offsetWidth;
        const coordX = e.pageX - shareWidth / 2;
        coordXprocent = (coordX / shareWidth) * 200;

        if (!shareGallery.classList.contains("_init")) {
            requestAnimationFrame(setMouseGalleryStyle);
            shareGallery.classList.add("_init");
        }
    });
}
