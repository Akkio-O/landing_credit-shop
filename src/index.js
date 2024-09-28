import updateClassBasedOnWidth from "./js/media.mjs";
import carousel from "./js/carousel/carousel.mjs";
import setTimer from "./js/timer.mjs";
import parallax from "./js/parallax.mjs";

// carousel

window.addEventListener("DOMContentLoaded ", () => {
  updateClassBasedOnWidth();
  setTimer();
});

window.addEventListener("load", () => {
  parallax();
  carousel();
});

// @media
window.addEventListener("resize", () => {
  updateClassBasedOnWidth();
});
window.addEventListener("orientationchange", updateClassBasedOnWidth);
