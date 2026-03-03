// document objects
const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-links a');

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
const scrollThreshold = 50; // Adjust this value as needed
let lockScroll = false;


// event listeners
navButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        lockScroll = true;
        navbar.classList.remove('scrolled');
        lastScrollY = window.scrollY;
    } else {
        setTimeout(() => {
            lockScroll = false;
            lastScrollY = window.scrollY;
        }, 200); // Delay to allow the mobile nav to close before re-enabling scroll
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');

        lockScroll = true;
        navbar.classList.remove('scrolled');
        lastScrollY = window.scrollY;

        setTimeout(() => {
            lockScroll = false;
            lastScrollY = window.scrollY;
        }, 200); // Delay to allow the mobile nav to close before re-enabling scroll
    });
});

window.addEventListener('scroll', () => {
    if (lockScroll) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});
