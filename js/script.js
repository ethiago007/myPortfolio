$(document).ready(function(){
  window.setTimeout('fadeout();', 3000);
  $(".wholebody").hide();
  $('.hamburger').click(function(){
    $('ul').toggleClass('show')
    $("#mobileview").toggle();
  })
})



function fadeout(){
  const preloader = document.querySelector('#app-preloader')
preloader.style.opacity = '0'
preloader.style.visibility = 'hidden'
$(".wholebody").show();
}

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function () {
  $(this).animate({
    "width": $(this).parent().attr("data-bar") + "%"
  }, 1000);
  $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function () {
  $(".skills .skill .skill-bar span b").animate({ "opacity": "1" }, 1000);
}, 2000);

$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
});


let textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

let textWrappersMobile = document.querySelector('.ml5 .letters');
textWrappersMobile.innerHTML = textWrappersMobile.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml5 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml5',
    opacity: 1,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1500
  });

let textWrappers = document.querySelector('.ml6 .letters');
textWrappers.innerHTML = textWrappers.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1500
  });

function myFunction(x) {
  if (x.matches) { // If media query matches
    $("#mobileview").show();
    $("#desktopview").hide();
  } else {
    $("#mobileview").hide();
    $("#desktopview").show();
  }
}
function myFunction2(y) {
  if (y.matches) { // If media query matches
    $(".space").html("<br><br><br><br><br><br>");
    
  } 
}
var y = window.matchMedia("(min-width: 1000px) and (max-width:1024px)")
var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes