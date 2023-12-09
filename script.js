//Loading screen
document.addEventListener("DOMContentLoaded", function() {
            gsap.to("#loadingScreen", {
                duration: 2,
                opacity: 0.1,
              x:10,
             
                onComplete: function() {
                    
                    document.getElementById("loadingScreen").style.display = "none";
                    document.getElementById("portfolioContent").style.display = "block";
                    
                    
                }
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
});
//type text
document.addEventListener('DOMContentLoaded', function () {
    const textElement1 = document.getElementById('text-line1');

    const cursorElement = document.getElementById('cursor');

    const text1 = "Creating websites and Capturing memories..";

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
document.querySelectorAll(".live-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
const imgs = document.querySelectorAll("section img")
document.querySelectorAll(".live-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

scrolling()
window.onscroll = scrolling
//scroll
function scrolling() {
    const viewportHeight = window.innerHeight
    imgs.forEach(img => {
        if (img.getBoundingClientRect().top < viewportHeight) {
            img.style.animationPlayState = "running"
        }
    })
}
