function search () {

    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('search-form__icon') || target.closest('.search-form__icon')) {
                document.querySelector('.search-form').classList.toggle('_active');
            } else if (!target.closest('.search-form') &&  document.querySelector('.search-form._active')) {
                document.querySelector('.search-form').classList.remove('_active');
            }
        });
    });
}

export default search;