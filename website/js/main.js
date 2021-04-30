// dark mode switch
const darkModeSwitch = document.getElementById('dark-mode-toggle');

// checks weather dark mode is activated or not
darkMode();

// dark mode activation and deactivation
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.value === "dark"){
        localStorage.setItem('darkMode', true);
    }
    if(document.body.classList.value === ""){
        localStorage.clear();
    }
})
    

// responsive navbar buttons
const navbar = document.getElementById('navbarSupportedContent');
const navLogo = document.getElementById('nav-logo');
const navButton = document.getElementById('navbar-button');

// navButton.addEventListener(
//     'click', 
//     () => {
//         navLogo.classList.toggle('hideComponent');
//         navbar.classList.toggle('collapse');
//     }
// );


function darkMode() {
    if(localStorage.getItem('darkMode')){
        darkModeSwitch.checked = 'true';
        document.body.classList.toggle('dark');
    }
}


const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownList = document.getElementById('dropdown-list');

dropdownList.addEventListener('mouseleave', () => {
    dropdownList.classList.toggle('list');
})
dropdownBtn.onmouseenter = () => {
    dropdownList.classList.toggle('list');
}