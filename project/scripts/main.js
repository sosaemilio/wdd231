import { fetchParks } from './parks-data.mjs';
import { displayParks } from './parks-builder.mjs';

document.addEventListener('DOMContentLoaded', () => {
    // --- DIALOG ELEMENT SELECTION ---
    const dialog = document.querySelector('#park-dialog');

    // --- LOGIC FOR PARKS PAGE ---
    const parksGrid = document.querySelector('#parks-grid');
    if (parksGrid) {
        let allParksData = [];

        fetchParks().then(parks => {
            allParksData = parks;
            displayParks(parks, parksGrid);
        });

        // Event Delegation for opening the dialog
        parksGrid.addEventListener('click', event => {
            const modalButton = event.target.closest('.modal-btn');
            if (modalButton) {
                const parkCode = modalButton.dataset.parkcode;
                const parkData = allParksData.find(p => p.parkCode === parkCode);
                if (parkData) {
                    populateAndShowDialog(parkData);
                }
            }
        });
    }

    // You can add a listener to close the dialog if the user clicks the backdrop.
    // This is optional as the Escape key already works by default.
    if (dialog) {
        dialog.addEventListener("click", e => {
            const dialogDimensions = dialog.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                dialog.close()
            }
        });
    }

});

// --- HELPER FUNCTION to populate and show the dialog ---
function populateAndShowDialog(park) {
    const dialog = document.querySelector('#park-dialog');
    
    // Select all the elements inside the dialog
    const dialogImage = document.querySelector('#dialog-image');
    const dialogTitle = document.querySelector('#dialog-title');
    const dialogDescription = document.querySelector('#dialog-description');
    const dialogFees = document.querySelector('#dialog-fees');
    const dialogDirections = document.querySelector('#dialog-directions');

    // Populate the elements with data from the 'park' object
    dialogTitle.textContent = park.fullName;
    dialogDescription.textContent = park.description;
    dialogDirections.textContent = park.directionsInfo || 'No directions available.';
    
    dialogImage.src = park.images.length > 0 ? park.images[0].url : 'images/default-park.jpg';
    dialogImage.alt = park.images.length > 0 ? park.images[0].altText : `A view of ${park.fullName}`;
    
    const feeInfo = park.entranceFees.length > 0 ? `$${park.entranceFees[0].cost} - ${park.entranceFees[0].description}` : 'Information not available.';
    dialogFees.textContent = feeInfo;
    
    // Use the built-in method to show the dialog as a modal
    dialog.showModal();
}
