function fadeMyDiv() {
  $('#preloader').fadeOut('slow');
}
$(document).ready(function() {
  window.setTimeout(fadeMyDiv, 2e3);
});
new WOW().init();

const banner = document.querySelector('.banner');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
// Scroll to top btn
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', function() {
  const bannerHeight = banner.clientHeight;
  if (window.scrollY >= bannerHeight - 200) {
    scrollToTopBtn.classList.add('show-btn');
  } else {
    scrollToTopBtn.classList.remove('show-btn');
  }
});

// counter up
const countersContainer = document.querySelector('.counter-section');
const counters = document.querySelectorAll('.counter-section .counter');
function isVisible(element) {
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (elementPosition < screenHeight / 1.1) return true;
  return false;
}
counters.forEach(counter => {
  counter.textContent = '0';
  const updateCounter = () => {
    const { target } = counter.dataset;
    const currentNumber = +counter.textContent;
    const increment = target / 5000;

    if (isVisible(countersContainer)) {
      if (currentNumber < target) {
        counter.textContent = `${Math.ceil(currentNumber + increment)}`;
        setTimeout(updateCounter, 10);
      }
    } else {
      counter.textContent = 0;
    }
  };
  window.addEventListener('scroll', updateCounter);
});
