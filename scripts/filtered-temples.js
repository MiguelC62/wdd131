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

const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Buenos Aires Argentina',
    location: 'Buenos Aires, Argentina',
    dedicated: '1986, January, 19',
    area: 30659,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2970.jpg',
  },
  {
    templeName: 'Córdoba Argentina',
    location: 'Córdoba, Argentina',
    dedicated: '2015, May, 17',
    area: 27000,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-15735.jpg',
  },
  {
    templeName: 'Salta Argentina',
    location: 'Salta, Argentina',
    dedicated: '2024, June, 16',
    area: 27000,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-10153-thumb.jpg',
  },
];

const heading = document.querySelector('main h1');
const navLinks = document.querySelectorAll('#navigation a');

// Mark the active link, change the title, and close the mobile menu
function setFilter(link, title) {
  navLinks.forEach((a) => a.classList.remove('active'));
  link.classList.add('active');
  heading.textContent = title;

  navigation.classList.remove('open');
  menuButton.classList.remove('open');
  menuButton.innerHTML = '&#9776;';
}

createTempleCard();

document.querySelector('#home').addEventListener('click', (e) => {
  e.preventDefault();
  setFilter(e.currentTarget, 'Home');
  createTempleCard();
});

document.querySelector('#old').addEventListener('click', (e) => {
  e.preventDefault();
  setFilter(e.currentTarget, 'Old');
  createTempleCard(temples.filter((t) => parseInt(t.dedicated) < 1900));
});

document.querySelector('#new').addEventListener('click', (e) => {
  e.preventDefault();
  setFilter(e.currentTarget, 'New');
  createTempleCard(temples.filter((t) => parseInt(t.dedicated) > 2000));
});

document.querySelector('#large').addEventListener('click', (e) => {
  e.preventDefault();
  setFilter(e.currentTarget, 'Large');
  createTempleCard(temples.filter((t) => t.area > 90000));
});

document.querySelector('#small').addEventListener('click', (e) => {
  e.preventDefault();
  setFilter(e.currentTarget, 'Small');
  createTempleCard(temples.filter((t) => t.area < 10000));
});

function createTempleCard(templeList = temples) {
  // Clear the gallery
  document.querySelector('.gallery').innerHTML = '';

  templeList.forEach((temple) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString("en-US")} sq ft`;

    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '400');
    img.setAttribute('height', '250');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.gallery').appendChild(card);
  });
}