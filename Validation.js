import { savedata } from "./localstorage.js";
let form = document.querySelector("#inputList");
form.addEventListener("onsubmit",signUp);

function signUp() {

      let fullname = document.querySelector("#fullname").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let confirmpassword = document.querySelector("#confirmPassword").value;


    let result;
    
    if (fullname === "") {
        result = "please enter your username"
    } else if (email == "") {
        result = "please enter your email"
    } else if (password == "") {
        result = "please enter your password"
    } else if (passwordlength > 8) {
        result = "Your password should be more than 8 character"
    } else if (confirmpassword == "") {
        result = "please enter your confirmpassword"
    } else if (confirmpassword !== password) {
        result = "The passwords do not match"
    } else {
        result = "Thanks for your Signup"
        console.log(demo)
        savedata("fullname",fullname)
    }
    document.getElementById("demo").innerHTML = result;
}

document.querySelector("form").addEventListener("submit", signUp);

const passField = document.querySelector("#password"),
  showBtn = document.querySelector("#eye1");

showBtn.addEventListener('click', () => {
  if (passField.type === 'password') {
    passField.type = 'text';
    showBtn.classList.add('hide');
  } else {
    passField.type = 'password';
    showBtn.classList.remove('hide');
  }
});


const passField2 = document.querySelector("#confirmPassword"),
  showBtn2 = document.querySelector("#eye2");

showBtn2.addEventListener('click', () => {
  if (passField2.type === 'password') {
    passField2.type = 'text';
    showBtn2.classList.add('hide');
  } else {
    passField2.type = 'password';
    showBtn2.classList.remove('hide');
  }
});