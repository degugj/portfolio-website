// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
    
var navbar = document.getElementById("sidenav");
var sticky = navbar.offsetTop;

function myFunction() {
  document.getElementById("demo").innerHTML = window.pageYOffset;
  document.getElementById("demo2").innerHTML = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}