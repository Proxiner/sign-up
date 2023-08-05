function signUp(event) {

    event.preventDefault();

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm-password");

    if (fullname === ""){
        alert("please full your fullname")
    } else if (email === ""){
        alert("please full your email")
    } else if (password === ""){
        alert("please full your password")
    } else if (confirm_password === ""){
        alert("please enter your password")
    }else if (password.length >= 8){  
        alert(`your password lower than 8`) 
    }else if (confirm_password !== password){  
        alert(`your confirm password isn't true`) 
    }else {
        alert("your information set in sass servers")
    }
}