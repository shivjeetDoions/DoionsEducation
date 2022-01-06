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
// courses offered script start here

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

// courses offered script end here
// modal script start here
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
// modal script end here
// modal check box script start here.......
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
// -------------
function onlytwo(checkbox) {
  var checkboxes = document.getElementsByName("check_t");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
// modal check box script end here.......
// from data information script start here......
function sConsole(event) {
  event.preventDefault();
  var data = document.getElementById("data");
  console.log(data.value);
}
// FROM DATA INFORMATION SCRIPT END HERE........
