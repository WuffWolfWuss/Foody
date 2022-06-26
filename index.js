$(window).scroll(function() {
    $("header").toggleClass("sticky", $(this).scrollTop()>0);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function toggleMenu(){
  $(".menuToggle").toggleClass("active");
  $(".nav").toggleClass("active")
}
