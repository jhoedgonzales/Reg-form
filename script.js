let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let address = document.getElementById("address");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");

let error_input = document.getElementsByClassName("error_input");

function register() {
    let error = 0;
    //reset error on inputs
    document.getElementsByClassName("email-error")[0].innerText = ""
    document.getElementsByClassName("password-error")[0].innerText = ""
    document.getElementsByClassName("message")[0].innerText = ""
    removeError(first_name)
    removeError(last_name)
    removeError(address)
    removeError(gender)
    removeError(email)
    removeError(password)
    removeError(cpassword)
    //reset error on inputs


    if(first_name.value.trim() == ""){
        first_name.classList.add("error-input");
        error = 1
    }
    if(last_name.value.trim() == ""){
        last_name.classList.add("error-input");
        error = 1
    }
    if(address.value.trim() == ""){
        address.classList.add("error-input");
        error = 1
    }
    if(gender.value.trim() == ""){
        gender.classList.add("error-input");
        error = 1
    }
    if(email.value.trim() == ""){
        email.classList.add("error-input");
        error = 1
    }
    else if(ValidateEmail(email.value.trim()) == false){
        email.classList.add("error-input");
        document.getElementsByClassName("email-error")[0].innerText = "Email is not valid!";
        error = 1
    }
    if(password.value.trim() == ""){
        password.classList.add("error-input");
        error = 1
    }
    else if(password.value.trim() != cpassword.value.trim()){
        password.classList.add("error-input");
        cpassword.classList.add("error-input");
        document.getElementsByClassName("password-error")[0].innerText = "Password not match!";
        return false
    }
    if(error == 1){
        return false
    }
    document.getElementsByClassName("message")[0].innerText = "Registration Successful!"
}

function ValidateEmail(mail) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(mail)) {
        return true
    }
        return false
}

function removeError (input){
    input.classList.remove("error-input");
}
