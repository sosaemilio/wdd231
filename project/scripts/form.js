// Display forms details on the thank you page
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("name").textContent = urlParams.get("name");
document.getElementById("email").textContent = urlParams.get("email");
document.getElementById("purpose").textContent = urlParams.get("purpose");