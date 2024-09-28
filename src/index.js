import updateClassBasedOnWidth from "./js/media.mjs";
import handleSwipe from "./js/swipe.mjs";
import setTimer from "./js/timer.mjs";
import parallax from "./js/parallax.mjs";

// carousel
const carousel = document.querySelector("#carouselExampleIndicators");
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});
carousel.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe(touchStartX, touchEndX);
});

window.addEventListener("load", () => {
  updateClassBasedOnWidth();
  setTimer();
  parallax();
});

// @media
window.addEventListener("resize", () => {updateClassBasedOnWidth});
window.addEventListener("orientationchange", updateClassBasedOnWidth);