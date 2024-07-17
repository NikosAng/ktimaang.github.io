


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    const toggleMenu = () => {
        hamburgerIcon.classList.toggle('open');
        fullscreenMenu.classList.toggle('open');
    };

    hamburgerMenu.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Close fullscreen menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
});
