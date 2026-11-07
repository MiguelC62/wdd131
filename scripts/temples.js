// Output current year
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Output last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Menu hamburger toggle
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');

  menuButton.innerHTML = navigation.classList.contains('open')
    ? '&#10006;'
    : '&#9776;';
});
