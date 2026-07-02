// ================================
// Welcome Message
// ================================
window.addEventListener("load", () => {
    console.log("Welcome to Pappu Srilatha's Portfolio!");
});

// ================================
// Smooth Scroll for Navigation
// ================================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================================
// Active Navigation Link
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Fade-in Animation on Scroll
// ================================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);

});

// ================================
// Contact Form
// ================================
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been submitted successfully.");

    form.reset();

});