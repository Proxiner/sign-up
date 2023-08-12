function signUp() {
    const information = {
        localfullname : document.querySelector("#fullname").value,
        localemail : document.querySelector("#email").value,
        localpassword : document.querySelector("#password").value,
        localconfirmpassword : document.querySelector("#confirmPassword").value
    }
    localStorage.setItem("fullname" , `${information.localfullname}`);
    localStorage.setItem("email" , `${information.localemail}`);
    localStorage.setItem("password" , `${information.localpassword}`);
    localStorage.setItem("confirm password" , `${information.localconfirmpassword}`);
} ;