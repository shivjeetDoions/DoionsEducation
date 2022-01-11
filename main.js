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
// function onlyOne(checkbox) {
//   var checkboxes = document.getElementsByName("check");
//   checkboxes.forEach((item) => {
//     if (item !== checkbox) item.checked = false;
//   });
// }
let result = document.querySelector("#result");
document.body.addEventListener("change", function (e) {
  let target = e.target;
  let message;
  switch (target.id) {
    case "pending":
      message = "The Pending radio button changed";
      break;
    case "resolved":
      message = "The Resolved radio button changed";
      break;
    case "rejected":
      message = "The Rejected radio button changed";
      break;
  }
  result.textContent = message;
});

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
  var inputName = document.getElementById("inputName");
  var inputDob = document.getElementById("inputDob");
  var inputPlace = document.getElementById("inputPlace");
  var inputAge = document.getElementById("inputAge");
  var inputSchool = document.getElementById("inputSchool");
  var inputContactNo = document.getElementById("inputContactNo");
  var inputEmail3 = document.getElementById("inputEmail3");
  var data = document.getElementById("data");
  var data = document.getElementById("data");
  var data = document.getElementById("data");
  var data = document.getElementById("data");
  var data = document.getElementById("data");
  var data = document.getElementById("data");

  console.log(inputName.value);
  console.log(inputDob.value);
  console.log(inputPlace.value);
  console.log(inputAge.value);
  console.log(inputSchool.value);
  console.log(inputEmail3.value);
  console.log(inputContactNo.value);
  console.log(data.checked);
  console.log(data.value);
  console.log(data.value);
  console.log(data.value);
  console.log(data.value);
  console.log(data.value);
}
// FROM DATA INFORMATION SCRIPT END HERE........
