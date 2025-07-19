const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", (e) => {
    // Pick menu and display
    const menuSelector = document.querySelector(".menu");
    if (menuIcon.src.includes("images/menu.svg")) {
        // Displays the menu
        menuSelector.style.display = "flex";
        // Update the src image to the close button
        menuIcon.src = "../images/close.svg"
    } else {
        // Hides the menu
        menuSelector.style.display = "none";
        // Update the src image to the menu button
        menuIcon.src = "../images/menu.svg"
    }
})