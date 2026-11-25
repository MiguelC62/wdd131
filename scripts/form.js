const products = [
  { id: 'fc-1888', name: 'flux capacitor', averagerating: 4.5 },
  { id: 'fc-2050', name: 'power laces', averagerating: 4.7 },
  { id: 'fs-1987', name: 'time circuits', averagerating: 3.5 },
  { id: 'ac-2000', name: 'low voltage reactor', averagerating: 3.9 },
  { id: 'jj-1969', name: 'warp equalizer', averagerating: 5.0 },
];

// Poblar el select de productos
const productSelect = document.querySelector('#productName');

if (productSelect) {
  const fragment = document.createDocumentFragment();

  products.forEach(({ id, name }) => {
    fragment.appendChild(new Option(name, id));
  });

  productSelect.appendChild(fragment);
}

// No permitir fechas de instalación futuras
const installDate = document.querySelector('#installDate');

if (installDate) {
  installDate.max = new Date().toLocaleDateString('en-CA'); // formato YYYY-MM-DD
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = `Last Modification: ${document.lastModified}`;
}
