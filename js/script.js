document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflow = "unset";
  }
};
$(".autoplay").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
});
$(".share").on("mouseenter", (e) => {
  $(".hidden-buttons").addClass("d-flex");
});
$(".buttons").on("mouseleave", (e) => {
  $(".hidden-buttons").removeClass("d-flex");
});
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
    
    $("#nav").attr('style', 'background-color: transparent');
    $(".nav-item a").removeClass("text-dark");
    $("#buttonSmall").removeClass("border-dark").addClass('border-light');
    let startLogo = $("#logo").attr("top-logo");
    $("#logo").attr("src", startLogo);
    $("#logo").css("max-width", "100%");
    $("#arrowUp").addClass("d-none");
    $("#nav").addClass("position-sticky").removeClass("position-fixed");
  } else {
    
    $("#nav").attr('style', 'background-color: white !important');
    $(".nav-item a").addClass("text-dark");
    $("#buttonSmall").removeClass("border-light").addClass('border-dark');
    let scrollLogo = $("#logo").attr("scroll-logo");
    $("#logo").attr("src", scrollLogo);
    $("#logo").css("max-width", "50%");
    $("#arrowUp").removeClass("d-none");
    $("#nav").removeClass("position-sticky").addClass("position-fixed");
  }
}
detect();
$(document).on("scroll", detect);
$(document).on("touchmove", ()=>{
  $(".navbar-collapse").removeClass("show");
  $(".hidden-buttons").removeClass("d-flex");
});
$(document).on("click", (e) => {
  $(".navbar-collapse").removeClass("show");
});
$('.nav-link').on("click", (e) => {
  $('.nav-link').removeClass('active');
  $(e.target).addClass("active");
});