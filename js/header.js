document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active'); // Toggle the "active" class
});

let lastScrollPosition = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        // Scrolling down: Hide the header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up: Show the header
        header.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScrollPosition;
});