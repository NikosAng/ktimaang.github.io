


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    const hero = document.querySelector('.hero');
    const topMenu = document.querySelector('.top-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Hamburger menu functionality
    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('open');
        fullscreenMenu.classList.toggle('open');
    });

    // Menu item click handling
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    // Stagger animation for menu items
    fullscreenMenu.addEventListener('transitionend', () => {
        if (fullscreenMenu.classList.contains('open')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });

    // Reset menu item styles when closing
    fullscreenMenu.addEventListener('transitionstart', () => {
        if (!fullscreenMenu.classList.contains('open')) {
            menuItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
        }
    });

    // Fade in hero section
    hero.style.opacity = '1';

    // Fade in menu and hamburger after hero
    setTimeout(() => {
        topMenu.style.opacity = '1';
        hamburgerMenu.style.opacity = '1';
    }, 2000); // Delay to match the hero fade-in duration
});
