const countElement = document.querySelector('#reviewCount');

try {
  let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

  // Contar solo si la página llega desde el formulario (GET con parámetros)
  if (window.location.search) {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Quitar los parámetros para que un refresh no vuelva a contar
    history.replaceState(null, '', window.location.pathname);
  }

  if (countElement) {
    countElement.textContent = reviewCount;
  }
} catch (error) {
  console.error('Review counter unavailable:', error);
}
