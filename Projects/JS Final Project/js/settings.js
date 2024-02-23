document.addEventListener('DOMContentLoaded', function () {
    var settingsIcon = document.getElementById('settings-icon');
    var settingsContainer = document.getElementById('settings-container');

    function toggleSettingsContainer() {
        settingsContainer.classList.toggle('show');
    }

    settingsIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSettingsContainer();
    });

    document.addEventListener('click', function (event) {
        if (!settingsContainer.contains(event.target) && event.target !== settingsIcon) {
            settingsContainer.classList.remove('show');
        }
    });

    settingsContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            settingsContainer.classList.remove('show');
        }
    });

    // Get all circle elements
    const circles = document.querySelectorAll('.circle');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const blackSpan = document.querySelector('.black');
    const whiteSpan = document.querySelector('.white');
    const sidebar = document.querySelector('.sidebar');
    const images = document.querySelectorAll('img');

    // Function to set the default color and add border to selected circle
    function setDefaultColor(color, circle) {
        // Remove border from previously selected circle
        document.querySelector('.circle.selected')?.classList.remove('selected');
        // Set the default color to the clicked color
        document.body.style.setProperty('--default-color', color);
        // Add border to the selected circle
        circle.classList.add('selected');
        // Save the color to localStorage
        localStorage.setItem('defaultColor', color);
    }

    // Function to set the sidebar overlay color
    function setSidebarOverlayColor(color) {
        sidebarOverlay.style.backgroundColor = color;
        localStorage.setItem('sidebarColor', color);
    }

    // Function to set the selected image URL in localStorage
    function setSelectedImage(imageUrl) {
        localStorage.setItem('selectedImage', imageUrl);
    }

    // Loop through each circle and add a click event listener
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Get the background color of the clicked circle
            const color = window.getComputedStyle(circle).getPropertyValue('background-color');

            // Set the default color and add border to selected circle
            setDefaultColor(color, circle);
        });
    });

    // Event listener for the black span
    blackSpan.addEventListener('click', function() {
        setSidebarOverlayColor('rgba(0, 0, 0, 0.6)');
    });

    // Event listener for the white span
    whiteSpan.addEventListener('click', function() {
        setSidebarOverlayColor('rgba(255, 255, 255, 0.6)');
    });

    // Event listener for setting background image when image is clicked
    images.forEach(image => {
        image.addEventListener('click', function() {
            const imageUrl = this.getAttribute('src');
            sidebar.style.backgroundImage = `url(${imageUrl})`;
            setSelectedImage(imageUrl); // Save selected image URL to localStorage
        });
    });

    // Set the default color, sidebar overlay color, and background image when the page loads
    const defaultColor = localStorage.getItem('defaultColor');
    const sidebarColor = localStorage.getItem('sidebarColor');
    const selectedImage = localStorage.getItem('selectedImage');
    
    if (defaultColor) {
        // Find the circle with the default color and set it as selected
        circles.forEach(circle => {
            if (window.getComputedStyle(circle).getPropertyValue('background-color') === defaultColor) {
                setDefaultColor(defaultColor, circle);
            }
        });
    }

    if (sidebarColor) {
        // Set the sidebar overlay color
        setSidebarOverlayColor(sidebarColor);
    }

    if (selectedImage) {
        // Set the background image of the sidebar
        sidebar.style.backgroundImage = `url(${selectedImage})`;
    }
});
