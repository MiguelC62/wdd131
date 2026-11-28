// Artwork data shared by the home page, the gallery page and the contact form.
// Titles, images and techniques are Claudia's real paintings.
// Sizes: 50 × 70 cm (19.7 × 27.6 in) for most works; Bosque de otoño is 20 × 16 in.
// Sold works have sold: true: they get no price and show "Sold".
// thumbnail is the small card image (400 px); image is the large one (800 px) for sharp screens.
// width and height are in inches.

// Price per square inch in dollars: change this one number to update every price
export const PRICE_PER_SQUARE_INCH = 1.5;

// Price = width × height × price per square inch, rounded to $10
function calculatePrice(width, height) {
  return Math.round((width * height * PRICE_PER_SQUARE_INCH) / 10) * 10;
}

const paintings = [
  {
    id: 1,
    title: "La tranquera",
    category: "Landscapes",
    technique: "Oil on canvas",
    width: 27.6,
    height: 19.7,
    year: 2025,
    sold: false,
    image: "images/artworks/la-tranquera.webp",
    thumbnail: "images/artworks/la-tranquera-small.webp",
    alt: "Painting of blue Andean peaks above brown hills, poplar trees and a wooden ranch gate",
    featured: true
  },
  {
    id: 2,
    title: "El puente",
    category: "Landscapes",
    technique: "Oil on canvas",
    width: 19.7,
    height: 27.6,
    year: 2025,
    sold: false,
    image: "images/artworks/el-puente.webp",
    thumbnail: "images/artworks/el-puente-small.webp",
    alt: "Painting of two men walking on a wooden bridge over a blue lake toward green hills",
    featured: true
  },
  {
    id: 3,
    title: "La calle",
    category: "Landscapes",
    technique: "Oil on canvas",
    width: 19.7,
    height: 27.6,
    year: 2024,
    sold: true,
    image: "images/artworks/la-calle.webp",
    thumbnail: "images/artworks/la-calle-small.webp",
    alt: "Painting of a cobblestone street with white colonial houses and snowy mountains behind",
    featured: false
  },
  {
    id: 4,
    title: "Bosque de otoño",
    category: "Landscapes",
    technique: "Oil on canvas",
    width: 20,
    height: 16,
    year: 2026,
    sold: false,
    image: "images/hero-small.webp",
    thumbnail: "images/artworks/bosque-de-otono-small.webp",
    alt: "Painting of an autumn forest with yellow and green trees above a small blue pond",
    featured: false
  },
  {
    id: 5,
    title: "Los cactus",
    category: "Still Life",
    technique: "Oil on canvas",
    width: 19.7,
    height: 27.6,
    year: 2025,
    sold: false,
    image: "images/artworks/los-cactus.webp",
    thumbnail: "images/artworks/los-cactus-small.webp",
    alt: "Painting of cacti and succulents growing in an orange clay pot on a green background",
    featured: true
  },
  {
    id: 6,
    title: "El té de la tarde",
    category: "Still Life",
    technique: "Oil on canvas",
    width: 27.6,
    height: 19.7,
    year: 2024,
    sold: true,
    image: "images/artworks/te-de-la-tarde.webp",
    thumbnail: "images/artworks/te-de-la-tarde-small.webp",
    alt: "Still life painting of a teacup, a green teapot, a honey pot and sweets on a red cloth",
    featured: false
  },
  {
    id: 7,
    title: "El jarrón",
    category: "Still Life",
    technique: "Oil on canvas",
    width: 19.7,
    height: 27.6,
    year: 2024,
    sold: false,
    image: "images/artworks/el-jarron.webp",
    thumbnail: "images/artworks/el-jarron-small.webp",
    alt: "Still life painting of clay jars and a blue vase on a wooden shelf beside a brick wall",
    featured: false
  },
  {
    id: 8,
    title: "El gaucho",
    category: "Abstract",
    technique: "Oil on canvas",
    width: 19.7,
    height: 27.6,
    year: 2025,
    sold: true,
    image: "images/artworks/el-gaucho.webp",
    thumbnail: "images/artworks/el-gaucho-small.webp",
    alt: "Cubist painting of a gaucho in a wide hat drinking mate, built from angular shapes in pink, ochre and cream",
    featured: false
  }
];

// Each painting gets its price from its size; sold works have no price
export const artworks = paintings.map((painting) => ({
  ...painting,
  price: painting.sold ? null : calculatePrice(painting.width, painting.height)
}));
