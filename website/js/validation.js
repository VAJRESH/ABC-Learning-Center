const form = document.getElementsByTagName('form')[0];
const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

const viewPassword = document.querySelectorAll('.viewPasswordBtn');

viewPassword.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.className = 'viewPasswordBtn fas fa-eye';
        btn.parentElement.children[1].type = 'text';
    });
    btn.addEventListener('mouseout', () => {
        btn.className = 'viewPasswordBtn fas fa-eye-slash';
        btn.parentElement.children[1].type = 'password';
    });
})

function defaultSettings(){
    first_name.placeholder = 'John';
    last_name.placeholder = 'Doe';
    email.placeholder = 'johndoework@gmail.com';
    password.placeholder = 'JohnDoeComplexPassword!@';
    confirm_password.placeholder = 'JohnDoeComplexPassword!@';

    password.type = 'password';
    confirm_password.type = 'password';
}
defaultSettings();


let errorMessage;
function generateErrorBox(parentBox){
    const div = document.createElement('div');
    div.textContent = errorMessage;
    div.className = 'error';
    parentBox.append(div);
}
function removeErrorBox(){
    const errorElement = document.getElementsByClassName('error')[0];
    if(errorElement){
        errorElement.remove();
    }
}

first_name.onchange = () => {
    if(first_name.value === ''){
        first_name.style.backgroundColor = 'red';
    } else if(first_name.value.match(/[0-9]/g)){
        first_name.style.backgroundColor = 'red';
        errorMessage = 'Don\'t Enter Numbers in Name!';
        generateErrorBox(first_name.parentNode);
    } else{
        first_name.style.backgroundColor = 'white';
        removeErrorBox();
    }
}
last_name.onchange = () => {
    if(last_name.value === ''){
        last_name.style.backgroundColor = 'red';
    } else if(last_name.value.match(/[0-9]/g)){
        last_name.style.backgroundColor = 'red';
        errorMessage = 'Don\'t Enter Numbers in Name!'
        generateErrorBox(last_name.parentNode);
    } else {
        last_name.style.backgroundColor = 'white';
        removeErrorBox();
    }
}
email.onchange = () => {
    if(email.value === ''){
        email.style.backgroundColor = 'red';
    } else if(!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g)){
        email.style.backgroundColor = 'red';
        errorMessage = 'Enter correct email!';
        generateErrorBox(email.parentNode);
    } else{
        email.style.backgroundColor = 'white';
        removeErrorBox();
    }
}
password.onchange = () => {
    if(password.value === ''){
        password.style.backgroundColor = 'red';
    } else if(password.value.length < 6){
        password.style.backgroundColor = 'red';
        errorMessage = 'Password must contain at least 6 characters!';
        generateErrorBox(password.parentNode);
    } else if(
        !password.value.match(/[!@#$%^&*<>/?\\{}\[\]*()]/g) &&
        !password.value.match(/[0-9]/g)
    ){
        password.style.backgroundColor = 'red';
        errorMessage = 'Password must contain at least 1 numeric character and 1 special character!';
        generateErrorBox(password.parentNode);
    } else {
        password.style.backgroundColor = 'white';
        removeErrorBox();
    } 
}
confirm_password.onchange = () => {
    if(confirm_password.value === ''){
        confirm_password.style.backgroundColor = 'red';
    } else if(password.value !== confirm_password.value){
        confirm_password.style.backgroundColor = 'red';
        errorMessage = 'Passwords should match!';
        generateErrorBox(confirm_password.parentNode);
    } else {
        errorMessage = null;
        removeErrorBox();
        confirm_password.style.backgroundColor = 'white';
    }
}

form.onsubmit = e => {
    e.preventDefault();
    if(errorMessage === null){
        window.location.href = '/thank-you.html';
    } else {
        checkEmptyValues();
    }
}

function checkEmptyValues(){
    if(first_name.value === ''){
        first_name.style.backgroundColor = 'red';
    } else{
        first_name.style.backgroundColor = 'white';
    }
    if(last_name.value === ''){
        last_name.style.backgroundColor = 'red';
    } else{
        last_name.style.backgroundColor = 'white';
    }
    if(email.value === ''){
        email.style.backgroundColor = 'red';
    } else{
        email.style.backgroundColor = 'white';
    }
    if(password.value === ''){
        password.style.backgroundColor = 'red';
    } else{
        password.style.backgroundColor = 'white';
    }
    if(confirm_password.value === ''){
        confirm_password.style.backgroundColor = 'red';
    } else{
        confirm_password.style.backgroundColor = 'white';
    }
}