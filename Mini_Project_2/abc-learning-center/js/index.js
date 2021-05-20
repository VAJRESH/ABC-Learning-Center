// inserts header and footer in every single page
// const header = document.getElementById('header');
// const footer = document.getElementById('footer');

// header.innerHTML = getComponent('header');
// footer.innerHTML = getComponent('footer');

// // returns a string of html from given path
// function getComponent(component) {
//     const ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open("GET", `./components/${component}.html`, false);
//     ajaxRequest.send();
//     return ajaxRequest.responseText;
// }



// explore button hover effect
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownList = document.getElementById('dropdown-list');
const handler = (e) => {
    dropdownList.classList.toggle('list');
    if(!dropdownList.classList.contains('list')){
        setTimeout(handler, 3000);
    }
};

dropdownBtn.addEventListener('click', handler);






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
const root = document.documentElement;

// checks weather dark mode is activated or not
darkMode();

// dark mode activation and deactivation
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.value === "dark-theme"){
        localStorage.setItem('darkTheme', true);
        darkTheme();
    }
    if(document.body.classList.value === ""){
        localStorage.clear();
        lightTheme();
    }
});

function darkMode() {
    if(localStorage.getItem('darkTheme')){
        darkModeSwitch.checked = 'true';
        document.body.classList.toggle('dark-theme');
        darkTheme();
    } else{
        lightTheme();
    }
}

function darkTheme(){
    root.style.setProperty('--bg-color', 'rgb(120, 120, 120)');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--nav-box-shadow', '0px 2px 1px rgb(228, 228, 228)');
    root.style.setProperty('--light-bg-color', 'rgb(40, 40, 40)');
    root.style.setProperty('--instructor-font-color', 'rgb(230, 211, 211)');
    root.style.setProperty('--light-gray', 'rgb(78, 76, 76)');
    root.style.setProperty('--instructor-card', 'rgb(80, 86, 86)');
    root.style.setProperty('--border-color', 'rgb(226, 226, 226)');
}

function lightTheme(){
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--bg-color', '#fff'); 
    root.style.setProperty('--light-bg-color', 'rgb(236, 236, 236)');
    root.style.setProperty('--nav-box-shadow', '0px 5px 5px rgb(173, 173, 173)');
    root.style.setProperty('--instructor-font-color', 'rgb(104, 96, 96)');
    root.style.setProperty('--instructor-card', '#b1dfaf');
    root.style.setProperty('--border-color', 'rgb(94, 54, 54)');
    root.style.setProperty('--light-gray', 'rgb(226, 226, 226)');
}




// enable users to go back in same order they navigated across the pages
const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', () => {
    console.log('a');
    history.back();
});