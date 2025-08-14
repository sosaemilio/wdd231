import { fetchParks } from './parks-data.mjs';
import { displayParks } from './parks-builder.mjs';

document.addEventListener('DOMContentLoaded', () => {
    // This code block runs on all pages. Put shared code here, like nav menu logic.

    // This code runs ONLY on the parks page
    const parksGrid = document.querySelector('#parks-grid');
    if (parksGrid) {
        let allParksData = []; // Store data for the modal

        fetchParks().then(parks => {
            allParksData = parks; // Save the fetched data
            displayParks(parks, parksGrid);
            
            // Now that buttons exist, add listener for modals
            parksGrid.addEventListener('click', event => {
                if (event.target.classList.contains('modal-btn')) {
                    const parkCode = event.target.dataset.parkcode;
                    // Use Array.find() to get the specific park's data
                    const parkData = allParksData.find(p => p.parkCode === parkCode);
                    openParkModal(parkData);
                }
            });
        });
    }
});

function openParkModal(park) {
    const modal = document.querySelector('#park-modal');
    // Code to populate the modal with park.fullName, park.directionsInfo, etc.
    modal.style.display = 'block';
}
