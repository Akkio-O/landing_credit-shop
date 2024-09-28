export default function handleSwipe(touchStartX, touchEndX) {
  if (touchEndX < touchStartX) {
    bootstrap.Carousel.getInstance(carousel).next();
  }
  if (touchEndX > touchStartX) {
    bootstrap.Carousel.getInstance(carousel).prev();
  }
}
