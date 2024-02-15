
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
  const textElement2 = document.getElementById('text-line2');

  const text1 = "Hello!";
  const text2 = "I am ...";
  let charIndex1 = 0;
  let charIndex2 = 0;
  let isTyping1 = true; // Track typing state for line 1
  let isTyping2 = false; // Track typing state for line 2

  const typingSpeed = 60; // Adjust for desired speed (milliseconds)
  const backspaceSpeed = 20; // Adjust for desired backspace speed (milliseconds)
  const pauseDuration = 500; // Adjust for desired pause duration (milliseconds)

  function typeText() {
    if (isTyping1 && charIndex1 < text1.length) {
      textElement1.textContent += text1.charAt(charIndex1);
      charIndex1++;
      setTimeout(typeText, typingSpeed);
    } else if (isTyping2 && charIndex2 < text2.length) {
      textElement2.textContent += text2.charAt(charIndex2);
      charIndex2++;
      setTimeout(typeText, typingSpeed);
    } **else if (isTyping1) {** // Start typing line 2 after finishing line 1
      isTyping1 = false;
      setTimeout(function () {
        isTyping2 = true;
        typeText();
      }, pauseDuration);
    } else if (isTyping2) { // Start backspacing line 2 after finishing it
      if (charIndex2 > 0) {
        textElement2.textContent = textElement2.textContent.slice(0, -1);
        charIndex2--;
        setTimeout(typeText, backspaceSpeed);
      } else { // Start typing line 1 again after backspacing line 2
        isTyping2 = false;
        setTimeout(function () {
          isTyping1 = true;
          typeText();
        }, pauseDuration);
      }
    }
  }

  typeText();
});

//About Me
window.onload = function() {
  var aboutMe = document.querySelector('.about-me');
  aboutMe.style.opacity = '0';
  fadeIn(aboutMe);
};

function fadeIn(element) {
  var opacity = 0;
  var timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}


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
