// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    console.log("hoi")
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    var deNav = event.target.closest("nav");
    console.log(event.target);
    deNav.classList.toggle("toonMenu");
}