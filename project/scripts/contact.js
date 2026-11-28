// Contact page: painting list and form fields by reason.
// The form is sent with method GET to thankyou.html, which counts the messages.
import { artworks } from "./artworks.js";
import { formatPrice } from "./cards.js";

const contactForm = document.querySelector("#contact-form");
const artworkSelect = document.querySelector("#artwork");
const artworkField = document.querySelector("#artwork-field");
const reasonInputs = contactForm.querySelectorAll('input[name="reason"]');

function fillArtworkOptions() {
  const fragment = document.createDocumentFragment();

  artworks.forEach((artwork) => {
    fragment.appendChild(new Option(`${artwork.title} (${formatPrice(artwork)})`, artwork.title));
  });

  artworkSelect.appendChild(fragment);
}

function updateArtworkField() {
  const reason = contactForm.elements.reason.value;
  const isArtwork = reason === "artwork";
  artworkField.hidden = !isArtwork;
  artworkSelect.required = isArtwork;
}

reasonInputs.forEach((input) => {
  input.addEventListener("change", updateArtworkField);
});

fillArtworkOptions();
updateArtworkField();
