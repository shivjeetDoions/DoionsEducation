const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// courses offered script

$(document).ready(function () {
  $("#show_one").click(function () {
    $(".menu_one").toggle("slide");
  });
});

$(document).ready(function () {
  $("#show_two").click(function () {
    $(".menu_two").toggle("slide");
  });
});

$(document).ready(function () {
  $("#show_three").click(function () {
    $(".menu_three").toggle("slide");
  });
});
