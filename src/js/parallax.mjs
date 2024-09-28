export default function parallax() {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;

    const pattern = document.querySelector(".pattern");
    if (pattern) {
      pattern.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }

    const pattern1 = document.querySelector(".pattern-1");
    if (pattern1) {
      pattern1.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
  });
}
