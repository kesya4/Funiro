import isMobile from './utils/isMobile';

function footerNav () {
    document.addEventListener('DOMContentLoaded', function (e) {
        document.addEventListener('click', function (e) { 
            const target = e.target;
            const spollersContainer = target.closest('[data-spollers]');
            const spollers = document.querySelectorAll('[data-spollers]');

            if (isMobile() && window.innerWidth < 576) {
                if (target.hasAttribute('data-spoller') || target.closest('[data-spoller]')) {
                       spollersContainer.classList.toggle('_active');
                } else if (!target.hasAttribute('data-spoller') || !target.closest('data-spoller')) {
                    spollers.forEach (item => {
                        item.classList.remove('_active');
                    })
                }
            }
        })
    })
}

export default footerNav;