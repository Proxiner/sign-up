
export function savedata(key,value) {
    // const information = {
    //     localfullname : document.querySelector("#fullname").value,
    //     localemail : document.querySelector("#email").value,
    //     localpassword : document.querySelector("#password").value,
    //     localconfirmpassword : document.querySelector("#confirmPassword").value
    // }
    localStorage.setItem(key , value);
    // localStorage.setItem("email" , `${email}`);
    // localStorage.setItem("password" , `${password}`);
    // localStorage.setItem("confirm password" , `${confirmpassword}`);
} ;

