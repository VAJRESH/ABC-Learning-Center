// responsive navbar buttons
const navbar = document.getElementById('navbarSupportedContent');
const navLogo = document.getElementById('nav-logo');
const navButton = document.getElementById('navbar-button');

navButton.addEventListener(
    'click', 
    () => {
        navLogo.classList.toggle('hideComponent');
        navbar.classList.toggle('collapse');
    }
);


// dark mode switch
const darkModeSwitch = document.getElementById('dark-mode-toggle');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})