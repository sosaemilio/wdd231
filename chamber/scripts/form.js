const dateField = document.getElementById('date');
dateField.value = new Date().toISOString().slice(0, 16); // Set the current date and time in the input field