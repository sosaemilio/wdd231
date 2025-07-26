function menuToggle(x) {
    x.classList.toggle("change");
}

/* Set the width of the side navigation to 250px */
function openNav(x) {
    document.querySelector(".nav-menu").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
    menuToggle(x)
}

/* Set the width of the side navigation to 0 */
function closeNav(x) {
    //document.querySelector(".nav-menu").style.width = "0";
    document.querySelector(".nav-menu").style.display = "none";
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