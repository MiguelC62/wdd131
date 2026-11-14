// Valores estáticos del clima (deben coincidir con los mostrados en el HTML)
const temperature = 9; // °C
const windSpeed = 10; // km/h

// Metric formula (°C and km/h), on a single line
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  );
}

// Only calculates if the conditions are viable: temp <= 10 °C and wind > 4.8 km/h
function getWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return `${calculateWindChill(temp, speed).toFixed(1)} °C`;
  }
  return 'N/A';
}

// Show the wind chill when the page loads
document.getElementById('windchill').textContent = getWindChill(
  temperature,
  windSpeed,
);

// Footer: real year and last modification
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
  `Last Modification: ${document.lastModified}`;
