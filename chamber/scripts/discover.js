const discoverGalleryBody = document.getElementById('discover-gallery');

// Function to create a gallery item
function createGalleryItem(imageSrc, title, description) {
    const card = document.createElement('div');
    card.classList.add('discover-card');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);

    return card;
}
// Function to load gallery items