// document objects
const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
const scrollThreshold = 50; // Adjust this value as needed

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});