

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const labels = document.querySelectorAll('.label');
    const infoPopup = document.querySelector('.place-details');
    const closeInfoButton = document.querySelector('.close-info');
    const placeImage = document.querySelector('.place-image');
    const placeText = document.querySelector('.place-text');
    const mapContainer = document.querySelector('.map-container');

    // Elements for the Fullscreen Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const closeMenuButton = document.querySelector('.close-menu');

    // Event Listener for Map Labels
    labels.forEach(label => {
        label.addEventListener('click', function(e) {
            const place = this.dataset.place;
            showInfoPopup(place, e.target);
        });
    });

    // Event Listener for Closing the Info Popup
    closeInfoButton.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        closeInfoPopup();
    });

    // Event Listener for Opening the Fullscreen Menu
    hamburgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        openFullscreenMenu();
    });

    // Event Listener for Closing the Fullscreen Menu
    closeMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeFullscreenMenu();
    });

     // Function to Show the Info Popup
     function showInfoPopup(place, target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 + window.pageXOffset;
        const centerY = rect.top + rect.height / 2 + window.pageYOffset;

        // Zoom into the map at the clicked label's position
        mapContainer.style.transform = `scale(2)`;
        mapContainer.style.transformOrigin = `${centerX}px ${centerY}px`;

        const placeInfo = {
            'main-house': {
                image: 'house1.jpg',
                text: 'Our main house, a stunning example of traditional Zakynthian architecture, was built in 1817. It exudes old-world elegance and aristocratic charm, offering a glimpse into the island\'s rich cultural heritage. With its stone walls, terracotta roof, and ornate balconies, the house stands as a testament to the enduring beauty of Greek island craftsmanship.'
            },
            'vineyard': {
                image: 'vines.jpg',
                text: 'Our vineyard, planted in 2021, showcases the traditional grape varieties of the Ionian Islands. Here, you\'ll find rows of Malagouzia, Mavrodafni, and the rare Skiadopoulo vines stretching across the sun-drenched hillsides. We combine time-honored cultivation methods with modern viticulture techniques to produce wines that truly capture the essence of Zakynthos terroir.'
            },
            'olive-grove': {
                image: 'olive-grove.jpg',
                text: 'Our olive grove, with trees dating back to various periods throughout the 20th century, is a living testament to the island\'s agricultural history. Each tree is meticulously cared for to ensure the highest quality olives for our premium extra virgin olive oil. The grove\'s gentle slopes and sea breezes create the perfect microclimate for our prized Koroneiki olives.'
            },
            'museum': {
                image: 'house.jpg',
                text: 'Housed within our estate, our family museum offers a unique opportunity to delve into the aristocratic legacy of Zakynthos and a world long past. It holds precious relics of our family history, including antique furniture, historical documents, and artworks that span generations. Visitors can explore the intricacies of island nobility and gain insight into the cultural tapestry that shaped modern Zakynthos.'
            }
        };
        // Update the info popup with the selected place's details
        placeImage.innerHTML = `<img src="${placeInfo[place].image}" alt="${place}">`;
        placeText.innerHTML = placeInfo[place].text;

        // Show the info popup
        infoPopup.classList.add('active');
    }

    // Function to Close the Info Popup
    function closeInfoPopup() {
        infoPopup.classList.remove('active');
        
        // Reset the map zoom and position
        mapContainer.style.transform = '';
        mapContainer.style.transformOrigin = '';
    }

    // Function to Open the Fullscreen Menu
    function openFullscreenMenu() {
        fullscreenMenu.style.display = 'flex';
    }

    // Function to Close the Fullscreen Menu
    function closeFullscreenMenu() {
        fullscreenMenu.style.display = 'none';
    }
});