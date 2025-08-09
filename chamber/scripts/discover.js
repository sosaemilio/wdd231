const discoverGalleryBody = document.getElementById('discover-gallery');
const discoverUrl = "https://sosaemilio.github.io/wdd231/chamber/data/places.json";

let placesJson = [];

async function getMembers(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        placesJson = data;
    } else {
        console.error("Failed to fetch member data");
    }
}

function displayPlaces(placesJson) {
    placesJson.forEach(place => {
        const sectionHTML = `<section class="discover-card">
                <h2>${place.name}</h2>
                <figure>
                    <img src="${place.photo}" alt="${place.name}" loading="lazy">
                </figure>

                <address>
                    ${place.address}
                </address>

                <p>${place.description}</p>

                <button>Learn More</button>
            </section>`;
        document.querySelector("#discover-gallery").insertAdjacentHTML("beforeend", sectionHTML);
    });
    
}

getMembers(discoverUrl).then(() => {
    displayPlaces(placesJson);
});