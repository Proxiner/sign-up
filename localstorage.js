function signUp(event) {


  event.preventDefault();

  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

      localStorage.setItem(`fullname` , `${fullname}`)
      localStorage.setItem(`email` , `${email}`)
      localStorage.setItem(`password` , `${password}`)
}
