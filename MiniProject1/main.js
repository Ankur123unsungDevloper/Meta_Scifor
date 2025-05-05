let Login = document.querySelector(".form-login");
let Signin = document.querySelector(".form-signin");
let line = document.querySelector(".line");

function login() {
  Login.style.transform = "translateX(0)";
  Signin.style.transform = "translateX(0)";
  line.style.transform = "translateX(0)";
}
function signin() {
  Signin.style.transform = "translateX(-335px)";
  Login.style.transform = "translateX(-335px)";
  line.style.transform = "translateX(110px)";
}

function screen() {
  if (window.innerWidth <= 1080) {
    function login() {
      Login.style.transform = "translateX(0)";
      Signin.style.transform = "translateX(0)";
      line.style.transform = "translateX(0)";
    }
    function signin() {
      Signin.style.transform = "translateX(-200px)";
      Login.style.transform = "translateX(-200px)";
      line.style.transform = "translateX(100px)";
    }
  }
}

screen();
// nav
let navUl = document.querySelector("#ul");
let navMenu = document.querySelector(".nav-menu");
let navIcon = document.querySelector("#bars");

navMenu.onclick = function () {
  if (
    navUl.style.left == "-70pc" ||
    navIcon.className == "fa-solid fa-bars-staggered"
  ) {
    navUl.style.left = "0px";
    navIcon.className = "fa-solid fa-xmark";
  } else {
    navUl.style.left = "-70pc";
    navIcon.className = "fa-solid fa-bars-staggered";
  }
};
//img
let proImg = document.querySelector("#product-img");

function galleryImg(img) {
  proImg.src = img;
}
