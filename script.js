
const scrollToTop = document.querySelector("#scroll-to-top a");
scrollToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//Navbar
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navbar-toggle");
    const menu = document.getElementById("navbar-menu");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggleButton.classList.toggle("active");
    });
    const navItems = document.querySelectorAll(".navbar-menu a");

    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menu.classList.remove("active");
            toggleButton.classList.remove("active");
        });
    });
});
//type text
document.addEventListener('DOMContentLoaded', function () {
    const textElement1 = document.getElementById('text-line1');

    const cursorElement = document.getElementById('cursor');

    const text1 = "Hello! I am Kavya..";

    let charIndex1 = 0;
    let charIndex2 = 0;

    function typeText() {
        if (charIndex1 < text1.length) {
            textElement1.textContent += text1.charAt(charIndex1);
            charIndex1++;
            setTimeout(typeText, 35);
        } else if (charIndex2 < text2.length) {
            textElement2.textContent += text2.charAt(charIndex2);
            charIndex2++;
            setTimeout(typeText, 35);
        }
    }

    typeText();
});


// scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// menu-toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


window.addEventListener("load", typeText);
projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a');
        if (link) {
            window.open(link.getAttribute('href'), '_blank');
        }
    });
});

// project card 
// Get all project cards
const projectCards = document.querySelectorAll('.project-card');


function addAnimationClass(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}

// Create an IntersectionObserver
const cardObserver = new IntersectionObserver(addAnimationClass, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, 
});

// Observe each project card
projectCards.forEach(card => {
    cardObserver.observe(card);
});
document.addEventListener("DOMContentLoaded", function () {
    const photoGrid = document.querySelector(".photo-grid");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    photoGrid.addEventListener("click", function (event) {
        const clickedPhoto = event.target.closest(".photo");
        if (clickedPhoto) {
            const imageUrl = clickedPhoto.getAttribute("data-src");
            modalImg.src = imageUrl;
            modal.style.display = "flex";
        }
    });

    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

//scroll
function scrolling() {
    const viewportHeight = window.innerHeight
    imgs.forEach(img => {
        if (img.getBoundingClientRect().top < viewportHeight) {
            img.style.animationPlayState = "running"
        }
    })
}
