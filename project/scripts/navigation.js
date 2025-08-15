function menuToggle(x) {
    x.classList.toggle("change");
}

/* Set the width of the side navigation to 250px */
function openNav(x) {
    document.querySelector(".navigation-menu").style.display = "flex";
    // If website is the homepage applies color
    if (window.location.pathname === '/wdd231/project/index.html' || window.location.pathname === '/wdd231/project/' || window.location.pathname === '/project/' || window.location.pathname === '/project/index.html') {
        document.querySelector("header").style.backgroundColor = "var(--secondary-color)";
    }
    menuToggle(x)
}

/* Set the width of the side navigation to 0 */
function closeNav(x) {
    document.querySelector(".navigation-menu").style.display = "none";
    menuToggle(x);
}

function menu(x) {
    menuName = document.querySelector("#menu");

    if (menuName.className === 'menu') {
        openNav(x);
    } else if (menuName.className === 'menu change') {
        closeNav(x);
    }
}