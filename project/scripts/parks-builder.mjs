export function displayParks(parks, favorites = [], containerElement) {
    let parksHTML = "";
    parks.forEach(park => {
        const imageUrl = park.images.length > 0 ? park.images[0].url : 'images/default-park.jpg';
        const imageAlt = park.images.length > 0 ? park.images[0].altText : 'A scenic view of a national park.';

        // Check if the current park's code is in our favorites array
        const isFavorited = favorites.includes(park.parkCode);
        
        // If it is favorited, add the 'favorited' class for styling
        const favoritedClass = isFavorited ? 'favorited' : '';

        parksHTML += `
            <div class="park-card">
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
                <div class="card-content">
                    <h3>${park.fullName}</h3>
                    <p><strong>Location:</strong> ${park.states}</p>
                    <p>${park.description.substring(0, 100)}...</p> 
                    <div class="card-buttons">
                        <button class="modal-btn" data-parkcode="${park.parkCode}">Learn More</button>
                        
                        <button class="favorite-btn ${favoritedClass}" data-parkcode="${park.parkCode}" aria-label="Favorite">
                            ☆
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    containerElement.innerHTML = parksHTML;
}