// In js/ui-builder.js
export function displayParks(parks, containerElement) {
    let parksHTML = "";
    parks.forEach(park => {
        // Defensive check: Ensure the park has at least one image.
        const imageUrl = park.images.length > 0 ? park.images[0].url : 'images/default-park.jpg';
        const imageAlt = park.images.length > 0 ? park.images[0].altText : 'A scenic view of a national park.';

        parksHTML += `
            <div class="park-card">
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
                <div class="card-content">
                    <h3>${park.fullName}</h3>
                    <p><strong>Location:</strong> ${park.states}</p>
                    <p>${park.description.substring(0, 100)}...</p> 
                    <button class="modal-btn" data-parkcode="${park.parkCode}">Learn More</button>
                </div>
            </div>
        `;
    });
    containerElement.innerHTML = parksHTML;
}