document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        hamburgerIcon.classList.toggle('open');
        fullscreenMenu.classList.toggle('open');
    };

    hamburgerIcon.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Close fullscreen menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });

    // Prevent menu toggle when clicking on the menu text
    const menuText = document.querySelector('.menu-icon span');
    if (menuText) {
        menuText.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});