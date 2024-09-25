import isMobile from './utils/isMobile';
function mobileNav() {
	// Mobile nav button
	document.addEventListener('DOMContentLoaded', function () {
		document.addEventListener('click', (e) => {
        // Burger-menu
            const mobileNav = document.querySelector('.mobile-nav');
			const target = e.target;
            if (target.classList.contains('mobile-menu_btn-open') || target.closest('.mobile-menu_btn-open')) {
                mobileNav.classList.add('_active');
             } else if (target.classList.contains('mobile-menu_btn-close') || target.closest('.mobile-menu_btn-close')) {
                mobileNav.classList.remove('_active');
             } 

        // Spoiller-menu
            if ((target.classList.contains('mobile-nav__item') || target.closest('.mobile-nav__item')) && target.closest('.mobile-nav__item').querySelector('.mobile-nav__arrow')) {
                target.closest('.mobile-nav__item').classList.toggle('_active');
            } else if (!target.closest('.mobile-nav__item')) {
                document.querySelectorAll('.mobile-nav__item').forEach (item => {
                    item.classList.remove('_active');
                })
            } 

		})
	})
}

export default mobileNav;