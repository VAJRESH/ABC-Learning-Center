// inserts header and footer in every single page
const header = document.getElementById('header');
const footer = document.getElementById('footer');

header.innerHTML = getComponent('header');
footer.innerHTML = getComponent('footer');

// returns a string of html from given path
function getComponent(component) {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open("GET", `./components/${component}.html`, false);
    ajaxRequest.send();
    return ajaxRequest.responseText;
}



// explore button hover effect
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownList = document.getElementById('dropdown-list');

dropdownList.addEventListener('mouseleave', () => {
    dropdownList.classList.toggle('list');
});

dropdownBtn.addEventListener('mouseenter', () => {
    dropdownList.classList.toggle('list');
});






// menu button in small screens
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if(navLinks.classList.contains('active')){
        menuBtn.innerHTML = "<i class='fas fa-times' />";
    } else{
        menuBtn.innerHTML = "<i class='fas fa-bars' />";
    }
});







// dark mode switch
const darkModeSwitch = document.getElementById('dark-mode-toggle');

// checks weather dark mode is activated or not
darkMode();

// dark mode activation and deactivation
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.value === "dark-theme"){
        localStorage.setItem('darkTheme', true);
    }
    if(document.body.classList.value === ""){
        localStorage.clear();
    }
});

function darkMode() {
    if(localStorage.getItem('darkTheme')){
        darkModeSwitch.checked = 'true';
        document.body.classList.toggle('dark-theme');
    }
}





// enable users to go back in same order they navigated across the pages
const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('onclick', () => {
    history.back();
});