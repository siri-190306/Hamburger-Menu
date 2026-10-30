const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
function toggleMenu() {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    const menuIsOpen = navMenu.classList.contains("active");
    hamburger.setAttribute("aria-expanded", menuIsOpen);
    hamburger.setAttribute(
        "aria-label",
        menuIsOpen ? "Close menu" : "Open menu"
    );
}
hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open menu");

    });
});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open menu");

    }});