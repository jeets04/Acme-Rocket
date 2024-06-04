const initApp = () => {
    const hamBurgerButton = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    const toggleButton = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamBurgerButton.addEventListener('click', toggleButton);

    mobileMenu.addEventListener('click', toggleButton);
}


document.addEventListener('DOMContentLoaded', initApp)