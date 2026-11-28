// Card helpers shared by the home page and the gallery page.

// Sold works have no price
export function formatPrice(artwork) {
  return artwork.sold ? "Sold" : `$${artwork.price.toLocaleString("en-US")}`;
}

export function formatSize(artwork) {
  const widthCm = Math.round(artwork.width * 2.54);
  const heightCm = Math.round(artwork.height * 2.54);
  return `${artwork.width} × ${artwork.height} in (${widthCm} × ${heightCm} cm)`;
}

export function createCard(artwork) {
  return `
    <article class="card">
      <img src="${artwork.thumbnail}" srcset="${artwork.thumbnail} 1x, ${artwork.image} 2x" alt="${artwork.alt}" width="400" height="400" loading="lazy">
      <div class="card-body">
        <h3 lang="es">${artwork.title}</h3>
        <p>${artwork.category} · ${artwork.year}</p>
        <p>${artwork.technique}</p>
        <p>${formatSize(artwork)}</p>
        <p class="${artwork.sold ? "sold" : "price"}">${formatPrice(artwork)}</p>
      </div>
    </article>`;
}
