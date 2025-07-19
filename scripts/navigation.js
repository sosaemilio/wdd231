const menubutton = document.querySelector("#menu-icon");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	if (menubutton.src.includes("images/menu.svg")) {
		menuitems.forEach((item) => item.classList.toggle("menu-item"));
		menubutton.src = "images/close-icon.svg";
	} else {
		menuitems.forEach((item) => item.classList.toggle("menu-item"));
		menubutton.src = "images/menu.svg"
	}
});