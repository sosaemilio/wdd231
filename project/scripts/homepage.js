// Get the header element
const header = document.querySelector('.homepage-header');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        // If they have, add the 'scrolled' class
        header.classList.add('scrolled');
    } else {
        // If they haven't, remove the 'scrolled' class
        header.classList.remove('scrolled');
    }
});