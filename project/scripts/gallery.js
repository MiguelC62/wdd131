// Gallery page: all artwork cards, filtered by category and sorted.
import { artworks } from "./artworks.js";
import { createCard } from "./cards.js";

const galleryContainer = document.querySelector("#gallery-artworks");
const filterButtons = document.querySelectorAll(".filter-button");
const sortSelect = document.querySelector("#sort");
const resultsMessage = document.querySelector("#results-message");
const STORAGE_KEY = "arteClaudiaCategory";

const categories = [...filterButtons].map((button) => button.dataset.category);
const savedCategory = localStorage.getItem(STORAGE_KEY);

// A saved category may no longer exist (the filters changed), so fall back to "All"
let currentCategory = categories.includes(savedCategory) ? savedCategory : "All";

// Sold works have no price, so the price orders show them last
function comparePrice(a, b, direction) {
  if (a.sold !== b.sold) {
    return a.sold ? 1 : -1;
  }
  if (a.sold) {
    return b.year - a.year;
  }
  return (a.price - b.price) * direction;
}

function sortArtworks(list, order) {
  const sorted = [...list];
  if (order === "price-low") {
    sorted.sort((a, b) => comparePrice(a, b, 1));
  } else if (order === "price-high") {
    sorted.sort((a, b) => comparePrice(a, b, -1));
  } else {
    sorted.sort((a, b) => b.year - a.year);
  }
  return sorted;
}

function displayGallery() {
  const filtered = currentCategory === "All"
    ? artworks
    : artworks.filter((artwork) => artwork.category === currentCategory);
  const sorted = sortArtworks(filtered, sortSelect.value);

  galleryContainer.innerHTML = sorted.map(createCard).join("");

  const label = currentCategory === "All" ? "all categories" : currentCategory;
  const word = sorted.length === 1 ? "painting" : "paintings";
  resultsMessage.textContent = `Showing ${sorted.length} ${word} in ${label}.`;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.category === currentCategory;
    button.setAttribute("aria-pressed", `${isActive}`);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    localStorage.setItem(STORAGE_KEY, currentCategory);
    displayGallery();
  });
});

sortSelect.addEventListener("change", displayGallery);

displayGallery();
