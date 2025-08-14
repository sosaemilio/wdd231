export function displayParks(parks, favorites = [], containerElement) {
    let parksHTML = "";
    parks.forEach(park => {
        const imageUrl = park.images.length > 0 ? park.images[0].url : 'images/default-park.jpg';
        const imageAlt = park.images.length > 0 ? park.images[0].altText : 'A scenic view of a national park.';

        const isFavorited = favorites.includes(park.parkCode);
        const favoritedClass = isFavorited ? 'favorited' : '';

        parksHTML += `
            <div class="park-card">
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
                <div class="card-content">
                    <h2>${park.fullName}</h2>
                    <p><strong>Location:</strong> ${park.states}</p>
                    <p>${park.description.substring(0, 100)}...</p> 
                    <div class="card-buttons">
                        <button class="modal-btn" data-parkcode="${park.parkCode}">Learn More</button>
                        
                        <button class="favorite-btn ${favoritedClass}" data-parkcode="${park.parkCode}" aria-label="Favorite">
                            
                            <svg class="star-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>

                            <svg class="star-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    containerElement.innerHTML = parksHTML;
}