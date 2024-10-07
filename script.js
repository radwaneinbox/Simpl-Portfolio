// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Text animation on homepage
let spanText = document.querySelector('.animated-span');
let textArray = ["", "Front-end developer", "Radioane@Khoubbane"];
let textIndex = 0;
let charIndex = 0;
let delay = 150;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        spanText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, delay);
    } else {
        setTimeout(deleteText, 2000); // Wait before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        spanText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, delay);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, delay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, delay);
});

// Scroll reveal animations
const scrollElements = document.querySelectorAll(".about-content, .product-card, .review-card");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
