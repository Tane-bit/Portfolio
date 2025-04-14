// Header Shrink on Scroll
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Header Shrink Effekt bei Scrollen
    if (window.scrollY > 150) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }

    // Scroll-to-Top Button sichtbar machen
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.visibility = "visible";
        scrollToTopBtn.style.opacity = "1";
    } else {
        scrollToTopBtn.style.visibility = "hidden";
        scrollToTopBtn.style.opacity = "0";
    }
});

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scrollen mit einer sanften Animation
    });
});
