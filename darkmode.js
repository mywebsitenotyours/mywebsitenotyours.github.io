// darkmode.js - Reusable dark mode functionality for all pages

// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Toggle dark mode function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Add sunglasses button to any element with class 'add-sunglasses-btn'
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.add-sunglasses-btn');
    
    elements.forEach(element => {
        // Find the word "sunglasses" in the text
        const html = element.innerHTML;
        const newHtml = html.replace(
            /sunglasses/i, 
            'sunglasses<button class="sunglasses-btn" onclick="toggleDarkMode()" title="Toggle dark mode">🕶️</button>'
        );
        element.innerHTML = newHtml;
    });
});