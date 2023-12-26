function initApp() {
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#menu-mobile');

    function toggleMenu() {
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('hidden');
        menuBtn.classList.toggle('toggle-btn');
    }

    [menuBtn, mobileMenu].forEach(btn => btn.addEventListener('click', toggleMenu));
};

document.addEventListener('DOMContentLoaded', initApp);