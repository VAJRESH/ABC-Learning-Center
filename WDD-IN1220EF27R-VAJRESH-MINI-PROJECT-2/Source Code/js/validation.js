const form = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const phoneNumber = document.getElementById('phone-number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const viewPassword = document.querySelectorAll('.viewPasswordBtn');
let isError = [];
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
    firstName.placeholder = 'John';
    lastName.placeholder = 'Doe';
    address.placeholder = 'Hudson House, Bandra Street, 401221';
    phoneNumber.placeholder = 8558558855;
    email.placeholder = 'johndoework@gmail.com';
    password.placeholder = 'JohnDoeComplexPassword!@';
    confirmPassword.placeholder = 'JohnDoeComplexPassword!@';

    password.type = 'password';
    confirmPassword.type = 'password';
}
defaultSettings();


let errorMessage;
function generateErrorBox(parentBox){
    const errorBox = document.getElementsByClassName('error')[0];
    if(errorBox) removeErrorBox();
    
    const div = document.createElement('div');
    div.className = 'error';
    div.textContent = errorMessage;
    parentBox.append(div);
}

function removeErrorBox(){
    const errorElement = document.getElementsByClassName('error')[0];
    if(errorElement){
        errorElement.remove();
    }
}

firstName.onchange = () => {
    if(firstName.value === ''){
        firstName.style.border = '2px solid red';
    } else if(firstName.value.match(/[0-9]/g)){
        firstName.style.border = '2px solid red';
        errorMessage = 'Don\'t Enter Numbers in Name!';
        generateErrorBox(firstName.parentNode);
    } else{
        firstName.style.border = '';
        removeErrorBox();
    }
}
lastName.onchange = () => {
    if(lastName.value === ''){
        lastName.style.border = '2px solid red';
    } else if(lastName.value.match(/[0-9]/g)){
        lastName.style.border = '2px solid red';
        errorMessage = 'Don\'t Enter Numbers in Name!'
        generateErrorBox(lastName.parentNode);
    } else {
        lastName.style.border = '';
        removeErrorBox();
    }
}
address.onchange = () => {
    if(address.value === ''){
        address.style.border = '2px solid red';
    } else{
        address.style.border = '';
    }
}
dob.onchange = () => {
    if(dob.value === ''){
        dob.style.border = '2px solid red';
    } else{
        dob.style.border = '';
    }
}
phoneNumber.onchange = () => {
    if (phoneNumber.value.length === 10) {
        phoneNumber.style.border = '';
    } else {
        phoneNumber.style.border = '2px solid red';
    }
}
email.onchange = () => {
    if(email.value === ''){
        email.style.border = '2px solid red';
    } else if(!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g)){
        email.style.border = '2px solid red';
        errorMessage = 'Enter correct email!';
        generateErrorBox(email.parentNode);
    } else{
        email.style.border = '';
        removeErrorBox();
    }
}
password.onchange = () => {
    if(password.value === ''){
        password.style.border = '2px solid red';
    } else if(password.value.length < 6){
        password.style.border = '2px solid red';
        errorMessage = 'Password must contain at least 6 characters!';
        generateErrorBox(password.parentNode);
    } else if(
        !password.value.match(/[!@#$%^&*<>/?\\{}\[\]*()]/g) &&
        !password.value.match(/[0-9]/g)
    ){
        password.style.border = '2px solid red';
        errorMessage = 'Password must contain at least 1 numeric character and 1 special character!';
        generateErrorBox(password.parentNode);
    } else {
        password.style.border = '';
        removeErrorBox();
    } 
}
confirmPassword.onchange = () => {
    if(confirmPassword.value === ''){
        confirmPassword.style.border = '2px solid red';
    } else if(password.value !== confirmPassword.value){
        confirmPassword.style.border = '2px solid red';
        errorMessage = 'Passwords should match!';
        generateErrorBox(confirmPassword.parentNode);
    } else {
        errorMessage = null;
        removeErrorBox();
        confirmPassword.style.border = '';
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    isError.length = 0;
    checkEmptyValues();
    console.log(isError.includes(true), errorMessage);
    if (errorMessage === null && !isError.includes(true)) {
        const formData = { ...e.target };
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("demo").innerHTML = this.responseText;
            }
          };
          xhttp.open("POST", "ajax_info.txt", true);
          xhttp.send(formData);
        window.location.href = './thank-you.html';
    } else {
        console.log('no submission');
    }
}

function checkEmptyValues() {
    if(firstName.value === ''){
        firstName.style.border = '2px solid red';
        isError.push(true);
    } else{
        firstName.style.border = '';
    }
    if(lastName.value === ''){
        isError.push(true);
        lastName.style.border = '2px solid red';
    } else{
        lastName.style.border = '';
    }
    if(dob.value === ''){
        isError.push(true);
        dob.style.border = '2px solid red';
    } else{
        dob.style.border = '';
    }
    if(address.value === ''){
        address.style.border = '2px solid red';
        isError.push(true);
    } else{
        address.style.border = '';
    }
    if(phoneNumber.value === ''){
        isError.push(true);
        phoneNumber.style.border = '2px solid red';
    } else{
        phoneNumber.style.border = '';
    }
    if(email.value === ''){
        isError.push(true);
        email.style.border = '2px solid red';
    } else{
        email.style.border = '';
    }
    if(password.value === ''){
        isError.push(true);
        password.style.border = '2px solid red';
    } else{
        password.style.border = '';
    }
    if(confirmPassword.value === ''){
        isError.push(true);
        confirmPassword.style.border = '2px solid red';
    } else{
        confirmPassword.style.border = '';
    }
}