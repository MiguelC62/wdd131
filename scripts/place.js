// Valores estáticos del clima (deben coincidir con los mostrados en el HTML)
const temperature = 9; // °C
const windSpeed = 10; // km/h

// Fórmula métrica (°C y km/h), en una sola línea
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  );
}

// Solo calcula si las condiciones son viables: temp <= 10 °C y viento > 4.8 km/h
function getWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return `${calculateWindChill(temp, speed).toFixed(1)} °C`;
  }
  return 'N/A';
}

// Mostrar el wind chill al cargar la página
document.getElementById('windchill').textContent = getWindChill(
  temperature,
  windSpeed,
);

// Footer: año actual y última modificación
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
  `Last Modification: ${document.lastModified}`;
