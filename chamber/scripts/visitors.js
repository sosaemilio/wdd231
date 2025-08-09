// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// Get the current date and time in milliseconds
const now = Date.now();

// Get the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

// Check if there is a last visit date stored
if (!lastVisit) {
  // First visit
  visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
} else {
  // Calculate the time difference in milliseconds
  const timeDifference = now - parseInt(lastVisit, 10);
  
  // Convert milliseconds to days (1000ms * 60s * 60m * 24h)
  const oneDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor(timeDifference / oneDay);

  if (daysDifference < 1) {
    // Less than a day since the last visit
    visitsDisplay.textContent = 'Back so soon! Awesome!';
  } else if (daysDifference === 1) {
    // Exactly one day since the last visit
    visitsDisplay.textContent = 'You last visited 1 day ago.';
  } else {
    // More than one day since the last visit
    visitsDisplay.textContent = `You last visited ${daysDifference} days ago.`;
  }
}

// Store the current date and time for the next visit
localStorage.setItem('lastVisit', now);