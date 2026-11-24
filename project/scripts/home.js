// Home page: featured artwork cards and new work alerts.
import { artworks } from "./artworks.js";

const featuredContainer = document.querySelector("#featured-artworks");
const notifyForm = document.querySelector("#notify-form");
const notifyMessage = document.querySelector("#notify-message");
const STORAGE_KEY = "arteClaudiaNotify";

function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}

function formatSize(artwork) {
  const widthCm = Math.round(artwork.width * 2.54);
  const heightCm = Math.round(artwork.height * 2.54);
  return `${artwork.width} × ${artwork.height} in (${widthCm} × ${heightCm} cm)`;
}

function createCard(artwork) {
  return `
    <article class="card">
      <img src="${artwork.image}" alt="${artwork.alt}" width="480" height="360" loading="lazy">
      <div class="card-body">
        <h3>${artwork.title}</h3>
        <p>${artwork.technique}</p>
        <p>${formatSize(artwork)}</p>
        <p class="price">${formatPrice(artwork.price)}</p>
      </div>
    </article>`;
}

function displayFeatured() {
  const featured = artworks.filter((artwork) => artwork.featured);
  featuredContainer.innerHTML = featured.map(createCard).join("");
}

function showSubscription() {
  const savedEmail = localStorage.getItem(STORAGE_KEY);
  if (savedEmail) {
    notifyMessage.textContent = `Thank you! We will write to ${savedEmail} only when there is new work or an auction.`;
  }
}

notifyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = notifyForm.email.value.trim();
  localStorage.setItem(STORAGE_KEY, email);
  notifyForm.reset();
  showSubscription();
});

displayFeatured();
showSubscription();
