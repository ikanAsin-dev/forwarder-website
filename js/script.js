// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('nav ul');
    const toggle = document.createElement('div');
    toggle.className = 'menu-toggle';
    toggle.innerHTML = '☰';
    document.querySelector('nav').append(toggle);

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.main-nav a');

    // Add click event listener to each navigation link to close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});
