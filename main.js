// document objects
const logo = document.querySelector('.nav-logo');
const mobileNav = document.querySelector('.mobile-nav');

logo.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});