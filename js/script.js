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
    $("#logo").attr("src", "assets/images/logo.png");
  } else {
    $("#nav").css("background-color", "black");
    $("#logo").attr("src", "assets/images/logo2.png");
  }
}
detect();
$(document).on("scroll", detect);
