//const $=require('jquery');

function menuMobile() {
  var x = document.getElementById("myMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Smooth scrolling
$(".linker").on('click', function() {
  const hash = this.hash;

  const linkto = $(hash).position().top;

  $('html, body').animate({
    scrollTop: linkto
  }, 900);
});

var services = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < services.length; i++) {
  services[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// //Menu Shrink with scroll
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("topnav").style.padding = "30px 10px";
//     //document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("topnav").style.padding = "80px 10px";
//     //document.getElementById("logo").style.fontSize = "35px";
//   }
// }
