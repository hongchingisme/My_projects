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

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',function(e){
    
    
    if(username.value === '' ){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === '' ){
        showError(email,'email is required');
    }else if (!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }else{
        showSuccess(email);
    }

    if(password.value === '' ){
        showError(password,'password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === '' ){
        showError(password2,' Please confirm your password');
    }else{
        showSuccess(password2);
    }
    

})