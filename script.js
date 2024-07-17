


document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('intro-overlay');
    const introBanner = document.getElementById('intro-banner');
    const introText = document.getElementById('intro-text');
    const introYear = document.getElementById('intro-year');
    const mainContent = document.getElementById('main-content');
    const videoOverlay = document.getElementById('video-overlay');
    const content = document.querySelector('.content');
    const mainLogo = document.getElementById('main-logo');
    const paragraph = document.querySelector('.content p');
    const menuItems = document.querySelectorAll('.menu-item');
    const video = document.getElementById('bg-video');

    // Fade in banner
    setTimeout(() => {
        introBanner.style.opacity = '1';
    }, 500);

    // Fade in intro text
    setTimeout(() => {
        introText.style.opacity = '1';
    }, 1500);

    // Fade in year
    setTimeout(() => {
        introYear.style.opacity = '1';
    }, 2500);

    // Transition to main content
    setTimeout(() => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
            mainContent.style.opacity = '1';
            // Start the video exactly when the transition is complete
            video.play();
        }, 1000); // This 1000ms delay matches the transition duration
    }, 5000);

    // Remove video overlay
    setTimeout(() => {
        videoOverlay.style.opacity = '0';
    }, 6000);

    // Fade in main logo
    setTimeout(() => {
        mainLogo.style.opacity = '1';
        mainLogo.style.transform = 'translateY(0)';
    }, 7000);

    // Fade in paragraph
    setTimeout(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';
    }, 7500);

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
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
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

    // Video loop
    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
});