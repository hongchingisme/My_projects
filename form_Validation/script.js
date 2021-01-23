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

//checkpassword
function checkpassword (input1 , input2){
    if(input1.value !== input2.value){
        showError(input2,'password is not match');
    }else if(input1.value == input2.value){
        showSuccess(password2);
    }
}

//submit even
form.addEventListener('submit',function(e){
    e.preventDefault();
    
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
    
});

//keyup even
//check length

form.addEventListener('keyup',function(e){
    e.preventDefault()
    
    if(username.value.length > 0){
        if(username.value.length<3){
            showError(username,'must be at least '+3+ ' characters');
        }else if (username.value.length>15){
            showError(username,'must be less then '+15+ ' characters');
        }else if (username.value.length>=3){
            showSuccess(username);
        }

    }

    if(email.value.length > 0){
        if(email.value === '' ){
            showError(email,'email is required');
        }else if (!isValidEmail(email.value)){
            showError(email,'Email is not valid');
        }else{
            showSuccess(email);
        }
    }

    if(password.value.length > 0){
        if(password.value.length<3){
            showError(password,'must be at least '+8+ ' characters');
        }else if (password.value.length>16){
            showError(password,'must be less then '+16+ ' characters');
        }else if (password.value.length>=8){
            showSuccess(password);
        }

    }

    if(password2.value.length > 0){
        checkpassword (password , password2);
    }

})