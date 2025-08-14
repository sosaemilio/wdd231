import { fetchParks } from './parks-data.mjs';
import { displayParks } from './parks-builder.mjs';

// --- HELPER FUNCTIONS FOR LOCAL STORAGE ---
function getFavorites() {
    const favoritesString = localStorage.getItem('favoriteParks');
    return favoritesString ? JSON.parse(favoritesString) : [];
}

// Saves the list of favorites to Local Storage.
// Expects an array of park codes.
function saveFavorites(favoritesArray) {
    localStorage.setItem('favoriteParks', JSON.stringify(favoritesArray));
}


document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('#park-dialog');
    const parksGrid = document.querySelector('#parks-grid');

    if (parksGrid) {
        let allParksData = [];
        (async () => {
            const currentFavorites = getFavorites();

            allParksData = await fetchParks();

            displayParks(allParksData, currentFavorites, parksGrid);
        })();

        // --- EVENT LISTENER FOR BOTH MODAL AND FAVORITE BUTTONS ---
        parksGrid.addEventListener('click', event => {
            const target = event.target;

            // --- Handle Modal Button Clicks ---
            const modalButton = target.closest('.modal-btn');
            if (modalButton) {
                const parkCode = modalButton.dataset.parkcode;
                const parkData = allParksData.find(p => p.parkCode === parkCode);
                if (parkData) {
                    populateAndShowDialog(parkData);
                }
                return;
            }

            // --- Handle Favorite Button Clicks ---
            const favoriteButton = target.closest('.favorite-btn');
            if (favoriteButton) {
                const parkCode = favoriteButton.dataset.parkcode;
                let currentFavorites = getFavorites();

                if (currentFavorites.includes(parkCode)) {
                    currentFavorites = currentFavorites.filter(code => code !== parkCode);
                } else {
                    currentFavorites.push(parkCode);
                }

                saveFavorites(currentFavorites);
                favoriteButton.classList.toggle('favorited');
            }
        });
    }

    if (dialog) {
        dialog.addEventListener("click", e => {
            const dialogDimensions = dialog.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                dialog.close();
            }
        });
    }
});

function populateAndShowDialog(park) {
    const dialog = document.querySelector('#park-dialog');
    const dialogImage = document.querySelector('#dialog-image');
    const dialogTitle = document.querySelector('#dialog-title');
    const dialogDescription = document.querySelector('#dialog-description');
    const dialogFees = document.querySelector('#dialog-fees');
    const dialogDirections = document.querySelector('#dialog-directions');

    dialogTitle.textContent = park.fullName;
    dialogDescription.textContent = park.description;
    dialogDirections.textContent = park.directionsInfo || 'No directions available.';
    dialogImage.src = park.images.length > 0 ? park.images[0].url : 'images/default-park.jpg';
    dialogImage.alt = park.images.length > 0 ? park.images[0].altText : `A view of ${park.fullName}`;
    const feeInfo = park.entranceFees.length > 0 ? `$${park.entranceFees[0].cost} - ${park.entranceFees[0].description}` : 'Information not available.';
    dialogFees.textContent = feeInfo;
    dialog.showModal();
}