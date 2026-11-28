// Home page: featured artwork cards and new work alerts.
import { artworks } from "./artworks.js";
import { createCard } from "./cards.js";

const featuredContainer = document.querySelector("#featured-artworks");
const notifyForm = document.querySelector("#notify-form");
const notifyMessage = document.querySelector("#notify-message");
const STORAGE_KEY = "arteClaudiaNotify";

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
