const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error
function showError(input , massage){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = massage;
}
//Success
function showSuccess(input){
const formControl = input.parentElement;
formControl.className = 'form-control success';
}