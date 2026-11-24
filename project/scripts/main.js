// Code shared by every page: mobile menu and footer dates.

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", `${isOpen}`);
});

const currentYear = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `${currentYear}`;
document.querySelector("#last-modified").textContent = `Last modified: ${document.lastModified}`;
