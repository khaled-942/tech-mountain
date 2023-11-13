$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false
});
$(".share").on("mouseenter", (e) => {
  $(".hidden-buttons").addClass('d-flex')
})
$(".buttons").on("mouseleave", (e) => {
  $(".hidden-buttons").removeClass('d-flex')
})
$(".forLinkC").on("click", (e) => {
  $(e.target).addClass("active");
  Array.from($(e.target).siblings()).map((e) => {
    $(e).removeClass("active");
  });
  let x = Number($(e.target).attr("data-bs-slide-to"));
  $("#carouselExampleCaptions3").carousel(x);
});
function detect() {
  if (window.scrollY == 0) {
    $("#nav").css("background-color", "transparent");
    $("#logo").attr("src", "assets/images/logo.png")
    $("#logoImage").css('transform','scale(1)');
    $('#arrowUp').addClass('d-none');
    $('#nav').addClass('position-sticky').removeClass('position-fixed');
  } else {
    $("#nav").css("background-color", "black");
    $("#logo").attr("src", "assets/images/logo2.png");
    $("#logoImage").css('transform','scale(0.7)');
    $('#arrowUp').removeClass('d-none');
    $('#nav').removeClass('position-sticky').addClass('position-fixed');
  }
}
detect();
$(document).on("scroll", detect);
