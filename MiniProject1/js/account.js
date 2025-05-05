let Login = document.querySelector(".form-login");
let Signin = document.querySelector(".form-signin");
let Loginbtn = document.querySelector("#login");
let Signinbtn = document.querySelector("#signin");
let line = document.querySelector(".line");

Loginbtn.onclick = function () {
  Login.style.transform = "translateX(0)";
  Signin.style.transform = "translateX(0)";
  line.style.transform = "translateX(0)";
}
Signinbtn.onclick = function () {
  Signin.style.transform = "translateX(-335px)";
  Login.style.transform = "translateX(-335px)";
  line.style.transform = "translateX(110px)";
}