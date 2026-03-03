// document objects
const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});