function moveElement() {
    const currentElements = document.querySelectorAll("[data-move]");

    currentElements.forEach((elem) => {
        const moveValue = elem.getAttribute("data-move");
        const [originSelector, targetSelector, screenWidth] = moveValue.split(",");

        const targetContainer = document.querySelector(targetSelector.trim());
        const originContainer = document.querySelector(originSelector.trim());

        if (window.innerWidth <= parseFloat(screenWidth.trim())) {
            if (targetContainer && !targetContainer.contains(elem)) {
                targetContainer.appendChild(elem);
            }
        } else {
            if (originContainer && !originContainer.contains(elem)) {
                originContainer.appendChild(elem);
            }
        }
    });
}

export default moveElement;
