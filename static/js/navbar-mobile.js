// Hamburger menu for mobile navigation

document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.querySelector('.navbar-container');
    const navbarLinks = document.querySelector('.navbar-links');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'navbar-hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navbarContainer.insertBefore(hamburger, navbarLinks);

    // Toggle nav links on click
    hamburger.addEventListener('click', function() {
        navbarLinks.classList.toggle('navbar-links-open');
        hamburger.classList.toggle('open');
    });

    // Hide hamburger on desktop
    function handleResize() {
        if (window.innerWidth <= 700) {
            hamburger.style.display = 'inline-flex';
            navbarLinks.classList.add('navbar-mobile');
        } else {
            hamburger.style.display = 'none';
            navbarLinks.classList.remove('navbar-mobile');
            navbarLinks.classList.remove('navbar-links-open');
            hamburger.classList.remove('open');
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
});
