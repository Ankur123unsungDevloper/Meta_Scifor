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
