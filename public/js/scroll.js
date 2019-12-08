const smoothScroll = function smoothScroll(target, duration) {
  let selectSec = target;
  selectSec = document.querySelector(selectSec);
  const targetPosition = selectSec.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const ease = function ease(t, beginning, change, totalTime) {
    let time = t;
    time /= totalTime / 2;
    if (time < 1) return change / 2 * time * time + beginning;
    time -= 1;
    return -change / 2 * (time * (time - 2) - 1) + beginning;
  };

  const animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

about.addEventListener('click', () => {
  smoothScroll('.scrollAbout', 1000);
});

projects.addEventListener('click', () => {
  smoothScroll('.scrollProjects', 1000);
});

contact.addEventListener('click', () => {
  smoothScroll('.scrollContact', 1000);
});

const scrollAppear = function scrollAppear() {
  const introText = document.querySelector('.intro-text');
  const introPosition = introText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    introText.classList.add('intro-appear');
  }
};
window.addEventListener('scroll', scrollAppear);
