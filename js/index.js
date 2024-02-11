//Make movile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
console.log(btnNav);
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

$(".num").ready(function () {
  var lines = 15;
  var textLength = 40;

  for (var i = 0; i < lines; i++) {
    $(".num").first().clone().insertAfter($(".num").last());
  }

  setInterval(function () {
    $(".num").each(function () {
      if ($(this).text().length < textLength) {
        $(this).text($(this).text() + Math.round(Math.random()));
      } else {
        $(this).text(
          Math.round(Math.random()) +
            $(this)
              .text()
              .substring(0, $(this).text().length - 1)
        );
      }
    });
  }, 95);
});

$("main").hide();
$("header").hide();
$("footer").hide();

const btnAbout = document.querySelector(".aboutme-button");
console.log(btnNav);
const showAbout = document.querySelector(".header");
const showCode = document.querySelector(".loading-screen");

btnAbout.addEventListener("click", function () {
  showAbout.classList.add("fixed");
  $("main").show();
  $("header").show();
  $("footer").show();
  $(".loading-screen").hide("slow", function () {
    $(".loading-screen").remove();
  });
});
