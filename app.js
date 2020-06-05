let slideshow = document.getElementById("slideshow");
// slideshow.addEventListener("click", function () {
//   console.log("this is working");
// });
let slides = slideshow.getElementsByTagName("img");
let index = 0;

let _leftArrow = document.getElementById("leftArrow");
_leftArrow.addEventListener("click", prevSlide);
let _rightArrow = document.getElementById("rightArrow");
_rightArrow.addEventListener("click", nextSlide);

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

let slideshowText = document.getElementById("slideshowText");
let slideText = slideshowText.getElementsByTagName("div");
let i = 0;

_leftArrow.addEventListener("click", nextSlideText);
_rightArrow.addEventListener("click", prevSlideText);
function nextSlideText() {
  slideText[i].classList.remove("active");
  i = (i + 1) % slideText.length;
  slideText[i].classList.add("active");
}

function prevSlideText() {
  slideText[i].classList.remove("active");
  i = (i - 1 + slideText.length) % slideText.length;
  slideText[i].classList.add("active");
}

let menuIcon = document.querySelector(".menuIcon");
menuIcon.addEventListener("click", menuToggle);
function menuToggle() {
  let nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
