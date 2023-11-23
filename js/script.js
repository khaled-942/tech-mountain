document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflow = "unset";
  }
};
$(".autoplay").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
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
    $("#nav").css("background-color", "transparent");
    $(".nav-item a").removeClass("text-dark");
    $("#logo").css("max-width", "100%");
    $("#arrowUp").addClass("d-none");
    $("#nav").addClass("position-sticky").removeClass("position-fixed");
  } else {
    $("#nav").css("background-color", "white");
    $(".nav-item a").addClass("text-dark");
    // $(".navbar-collapse").removeClass("show");
    $("#logo").css("max-width", "50%");
    $("#arrowUp").removeClass("d-none");
    $("#nav").removeClass("position-sticky").addClass("position-fixed");
  }
}
detect();
$(document).on("scroll", detect);
$(document).on("click", (e) => {
  $(".navbar-collapse").removeClass("show");
});
$('.nav-link').on("click", (e) => {
  $('.nav-link').removeClass('active');
  $(e.target).addClass("active");
});


// change Lang
let langIcon = [...document.querySelectorAll(".languages")];
let navsLinks = [...document.querySelectorAll(".switchLang")];
let imagesSwitch = [...document.querySelectorAll(".switchImageLang")];
let getFlag = localStorage.getItem("flag");
if (getFlag == null) {
  localStorage.setItem("flag", 0);
  getFlag = localStorage.getItem("flag");
} else {
  getFlag = localStorage.getItem("flag");
}

function checkLang(getFlag) {
  navsLinks.map((e) => {
    let thisId = e.getAttribute("id");
    e.innerHTML = swithLangArObject[thisId][getFlag];
  });
  if (getFlag == 1) {
    $('.languages').attr("title", "English");
  } else if (getFlag == 0) {

    $('.languages').attr("title", "Arabic");
  }
}
$('.languages').on("click", ()=>{
  checkLang(getFlag);
  if (getFlag == 1) {
    localStorage.setItem("flag", 0);
  } else if (getFlag == 0) {
    localStorage.setItem("flag", 1);
  }
  location.reload();
});
checkLang(getFlag);

// end lang