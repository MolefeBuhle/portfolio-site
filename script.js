// script.js - Additional JavaScript for Buhle Molefe Portfolio

// Feature 1: Dark/Light Mode Toggle
function initDarkModeToggle() {
    // Create and add toggle button to the header
    const toggleButton = document.createElement('button');
    toggleButton.id = 'darkModeToggle';
    toggleButton.innerHTML = '🌙 Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.backgroundColor = '#2c3e50';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1000';
    
    document.body.appendChild(toggleButton);

    let isDarkMode = false;

    toggleButton.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#ffffff';
            toggleButton.innerHTML = '☀️ Light Mode';
            toggleButton.style.backgroundColor = '#e67e22';
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            toggleButton.innerHTML = '🌙 Dark Mode';
            toggleButton.style.backgroundColor = '#2c3e50';
        }
    });
}

// Feature 2: Dynamic Welcome Message Based on Time
function updateWelcomeMessage() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        const hours = new Date().getHours();
        let greeting;
        
        if (hours < 12) {
            greeting = 'Good morning';
        } else if (hours < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }
        
        const welcomeHeading = homeSection.querySelector('h2');
        if (welcomeHeading) {
            welcomeHeading.textContent = `${greeting}! Welcome to My Portfolio`;
        }
    }
}

// Feature 3: Simple Form Validation (for potential future contact form)
function initFormValidation() {
    // This would be used if a contact form is added later
    console.log('Form validation ready for future implementation');
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initDarkModeToggle();
    updateWelcomeMessage();
    initFormValidation();
    
    console.log('Portfolio JavaScript loaded successfully!');
});

// Additional utility function for debugging
function debugInfo() {
    console.log('Current active section:', document.querySelector('section.active').id);
    console.log('All sections:', document.querySelectorAll('section').length);
}