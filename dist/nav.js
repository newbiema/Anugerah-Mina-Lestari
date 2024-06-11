document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar-default');
    const navItems = document.querySelectorAll('.nav-item');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Close the navbar
            navbar.classList.add('hidden');
        });
    });
});
