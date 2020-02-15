const smoothScroll = (target, duration) => {
  const scrollTarget = document.querySelector(target);
  const scrollTargetPosition = scrollTarget.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = scrollTargetPosition - startPosition;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => smoothScroll(".contact", 500));

const goToTopBtn = document.querySelector(".scroll-top");

const showBtn = () => {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

window.onscroll = function() {
  showBtn();
};

goToTopBtn.addEventListener("click", () => smoothScroll(".container", 500));

console.log(document.body.scrollTop);
