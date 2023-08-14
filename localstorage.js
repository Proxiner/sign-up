

function signUp(event) {

    event.preventDefault();

    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirm-password").value;

    if (fullname == "") {
        alert("error fullname")
    } else if (email == "") {
        alert("error email")
    } else if (password == "") {
        alert("error password")
    } else if (confirmpassword == "") {
        alert("error confirmpassword ")
    } else {
        localStorage.setItem('fullname', fullname)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('confirmpassword', confirmpassword)
    }
}
