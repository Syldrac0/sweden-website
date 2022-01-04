
let button = document.querySelector('div.dropbtn');
let menu = document.querySelector('div.dropdown-content');
let dropdown = document.querySelector('div.dropdown')

const onHover = () => {
    menu.style.visibility = "visible";
};

const offHover = () => {
    menu.style.visibility = "hidden";
};

button.addEventListener("mouseover", onHover);
dropdown.addEventListener("mouseleave", offHover)