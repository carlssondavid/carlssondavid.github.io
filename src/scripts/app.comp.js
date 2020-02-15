const smoothScroll = (a, b) => {
    function c(a, e, b, c) {
      return ((a /= c / 2), 1 > a)
        ? (b / 2) * a * a + e
        : (a--, (-b / 2) * (a * (a - 2) - 1) + e);
    }
    const d = document.querySelector(a),
      e = d.getBoundingClientRect().top,
      f = window.pageYOffset;
    let g = null;
    const h = a => {
      null === g && (g = a);
      const d = a - g,
        i = c(d, f, e - f, b);
      window.scrollTo(0, i), d < b && requestAnimationFrame(h);
    };
    requestAnimationFrame(h);
  },
  contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => smoothScroll(".contact", 500));
const goToTopBtn = document.querySelector(".scroll-top"),
  showBtn = () => {
    goToTopBtn.style.display =
      700 < document.body.scrollTop || 700 < document.documentElement.scrollTop
        ? "block"
        : "none";
  };
(window.onscroll = function() {
  showBtn();
}),
  goToTopBtn.addEventListener("click", () => smoothScroll(".container", 500)),
  console.log(document.body.scrollTop);
