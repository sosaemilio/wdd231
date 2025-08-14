function menuToggle(x) {
    x.classList.toggle("change");
}

/* Set the width of the side navigation to 250px */
function openNav(x) {
    document.querySelector(".navigation-menu").style.display = "flex";
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