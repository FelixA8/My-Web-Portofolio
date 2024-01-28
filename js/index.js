//Make movile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
console.log(btnNav);
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});