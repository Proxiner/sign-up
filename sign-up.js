import {localstorage} from "./localstorage.js";

function signUp(event) {

    event.preventDefault();
  
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
  
    if (fullname === ""){
        alert("please full your fullname")
    } else if (email === ""){
        alert("please full your email")
    } else if (password === ""){
        alert("please full your password")
    } else if (confirm_password === ""){
        alert("please enter your password")
    }else if (password.length <= 8){  
        alert(`your password lower than 8`) 
    }else if (confirm_password !== password){  
        alert(`your confirm password isn't true`) 
    }else {
      localstorage(`fullname`, fullname)
    }
}

const password = document.getElementById("password"),
showBtn = document.getElementById("show-eye");

showBtn.addEventListener('click', () => {
  if(password.type === "password"){
    password.type = "text"
  }else {
    password.type = "password"
  }
})


const confirm_password = document.getElementById("confirm-password"),
showBtn2 = document.getElementById("show-eye-2");

showBtn2.addEventListener('click', () => {
  if(confirm_password.type === "password"){
    confirm_password.type = "text"
  }else {
    confirm_password.type = "password"
  }
})

let form = document.getElementById("form");
form.addEventListener("onsubmit" , signUp)