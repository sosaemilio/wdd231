const dateField = document.getElementById('date');
dateField.value = new Date().toISOString().slice(0, 16); // Set the current date and time in the input field

// Display the membership modals

const nonprofitButton = document.querySelector('.nonprofit-button');
const bronzeButton = document.querySelector('.bronze-button');
const silverButton = document.querySelector('.silver-button');
const goldButton = document.querySelector('.gold-button');

const modal = document.getElementById('membership-benefits-box');
const closeModal = document.getElementById('closeModal');

nonprofitButton.addEventListener('click', () => {
  modal.innerHTML = `
    <h2>Non Profit Membership Benefits</h2>
    <button id="closeModal">Close</button>
  `;
  modal.showModal(); // display the modal dialog right away.
});

// Usually you will want to wait for a user action to show the modal dialog
closeModal.addEventListener('click', () => {
modal.close();
});