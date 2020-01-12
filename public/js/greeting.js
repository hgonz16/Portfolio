// Adds a welcome greeting depending on the hour.
const myGreeting = function indexPageGreeting() {
  const today = new Date();
  const hourNow = today.getHours();
  let greeting;
  if (hourNow > 18) {
    greeting = 'Good Evening';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon';
  } else if (hourNow > 0) {
    greeting = 'Good Morning';
  } else {
    greeting = 'Welcome';
  }
  document.getElementById('greeting').innerHTML = greeting;
};
myGreeting();
