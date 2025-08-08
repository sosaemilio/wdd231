const dateField = document.getElementById('date');
dateField.value = new Date().toISOString().slice(0, 16); // Set the current date and time in the input field

// Display the membership modals

const nonprofitButton = document.querySelector('.nonprofit-button');
const bronzeButton = document.querySelector('.bronze-button');
const silverButton = document.querySelector('.silver-button');
const goldButton = document.querySelector('.gold-button');

const modal = document.getElementById('membership-benefits-box');
const closeModal = document.getElementById('closeModal');
const textContainer = document.getElementById('benefits-modal');

nonprofitButton.addEventListener('click', () => {
  textContainer.innerHTML = `
    <h2>Non Profit Membership Benefits</h2>
    <p>No Fee</p>
    <p>Only available for non profits organization in the metropolitan area</p> `;
  modal.showModal(); // display the modal dialog right away.
});

bronzeButton.addEventListener('click', () => {
  textContainer.innerHTML = `
    <h2>Bronze Membership Benefits</h2>
    <p>$30 / Month</p>
    <p>A good startpoint for small business and companies looking to see the perks of the chamber, our offer: </p>
    <ul>
        <li>Events Discounts</li>
        <li>Access to all the special Events</li>
    </ul> `;
  modal.showModal(); // display the modal dialog right away.
});

silverButton.addEventListener('click', () => {
  textContainer.innerHTML = `
    <h2>Silver Membership Benefits</h2>
    <p>$40 / Month </p>
    <p>The best choice for almost all business looking to expand and be part of the dynamic ecomony of the city.</p>
    <ul>
        <li>All Bronze Benefits</li>
        <li>Oficial Listing on the Website</li>
        <li>Advertising</li>
        <li>Include the business logo into the banner and fliers of the Chamber</li>
        <li>Spotlight Position</li>
    </ul>`;
        modal.showModal(); // display the modal dialog right away.
    });

goldButton.addEventListener('click', () => {
  textContainer.innerHTML = `
    <h2>Gold Membership Benefits</h2>
    <p>$60 / Month</p>
    <p>For those looking to become partner and meeting the best of the industry</p>
    <ul>
        <li>All Bronze & Silver Benefits</li>
        <li>VIP Passes to all the events</li>
        <li>Chamber Partner</li>
        <li>Inhouse and Online Training</li>
        <li>Discount in POS and accounting Softwares</li>
        <li>Business Consulting</li>
    </ul>`;
    modal.showModal(); // display the modal dialog right away.
});

    // Close the modal dialog when the close button is clicked
// This is just an example of how to close the modal dialog
closeModal.addEventListener('click', () => {
    modal.close();
});
