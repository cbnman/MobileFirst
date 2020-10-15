//const $=require('jquery');

function menuMobile(){
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
  }, 900
);
});
