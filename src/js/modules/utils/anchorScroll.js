function initSmoothScroll(navSelector) {
    const navHeight = document.querySelector(navSelector).clientHeight;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");

            // Проверяем, что targetId не пустой и начинается с #
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            }
        });
    });
}

export default initSmoothScroll;