function signUp(event) {

    event.preventDefault();

    const information = {
        fullname : document.querySelector("#fullname"),
        email : document.querySelector("#email"),
        password : document.querySelector("#password"),
        confirmpassword : document.querySelector("#confirmPassword")
    }

    let result;
    
    if (information.fullname.value === "") {
        result = "please enter your username"
    } else if (information.email.value == "") {
        result = "please enter your email"
    } else if (information.password.value == "") {
        result = "please enter your password"
    } else if (information.password.length > 8) {
        result = "Your password should be more than 8 character"
    } else if (information.confirmpassword == "") {
        result = "please enter your confirmpassword"
    } else if (information.confirmpassword.value !== information.password.value) {
        result = "The passwords do not match"
    } else {
        result = "Thanks for your Signup"
        console.log(demo)
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

export {information}
