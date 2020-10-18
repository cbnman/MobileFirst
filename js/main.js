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

//Display services
var services = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < services.length; i++) {
  services[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// //Menu Shrink with scroll
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     //document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     //document.getElementById("logo").style.fontSize = "35px";
//   }
// }
