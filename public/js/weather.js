// Anytime the weather page is opened, these documents will be loaded
window.addEventListener('load', () => {
  const temperatureDescription = document.querySelector('.temperature-description');
  const temperatureDegree = document.querySelector('.temperature-degree');
  const locationTimezone = document.querySelector('.location-timezone');
  const temperatureSection = document.querySelector('.temperature-section');
  const temperatureSpan = document.querySelector('.temperature-section span');
  let long;
  let lat;

  const setIcons = function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: 'white' });
    const currentIcon = icon.replace(/-/g, '_').toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/eb05915ba092cbea656075200c43d29f/${lat},${long}`;

      fetch(api)
        .then(response => response.json())
        .then((data) => {
          const { temperature, summary, icon } = data.currently;
          // setting dom elements from API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          // formula for Celsius
          const celsius = (temperature - 32) * (5 / 9);

          // settting svg icon
          setIcons(icon, document.querySelector('.icon'));

          // Adding a button click to html canvas to change the temperature from F to C
          temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent === 'F') {
              temperatureSpan.textContent = 'C';
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = 'F';
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }
});
