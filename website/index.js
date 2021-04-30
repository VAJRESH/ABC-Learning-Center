// root element to insert all pages
// it has navbar, header and footer
const indexPage = document.getElementById('root');

// redirects to index page if wrong page loaded
if(!indexPage) window.location.pathname = 'index.html'

// saves  history of user location for back button
const locationHistory = [];

// inserts the home page in the root at first render
goToNewPage('home');

// navigation links to insert different pages
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        
        console.log(e.target.ariaLabel);
        goToNewPage(e.target.ariaLabel);
    });
});


function goToNewPage(page){
    if(!page) return

    window.scroll(0, 0);

    console.log(locationHistory[locationHistory.length - 1], page);
    indexPage.innerHTML = loadPage(page);
    console.log(locationHistory);

    if(locationHistory[locationHistory.length - 1] === page) return;
    locationHistory.push(page);

    console.log(window.location);
}

// gets a html page from the source folder and returns it
function loadPage(page) {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open("GET", `./pages/${page}/${page}.html#${page}`, false);
    ajaxRequest.send();
    return ajaxRequest.responseText;
}


const backBtn = document.getElementById('back-btn');
console.log(backBtn);
backBtn.addEventListener('click', () => {
    if(locationHistory.length === 1) return;

    locationHistory.pop();
    console.log(locationHistory);
    goToNewPage(locationHistory[locationHistory.length - 1]);
})