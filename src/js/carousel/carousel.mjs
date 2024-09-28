import handleSwipe from "./swipe.mjs";

const carousel = document.querySelector("#carouselExampleIndicators");
let touchStartX = 0;
let touchEndX = 0;

export default function initializeCarousel() {
	carousel.addEventListener("touchstart", (event) => {
	  touchStartX = event.changedTouches[0].screenX;
	});
  
	carousel.addEventListener("touchend", (event) => {
	  touchEndX = event.changedTouches[0].screenX;
	  handleSwipe(touchStartX, touchEndX);
	});
  }