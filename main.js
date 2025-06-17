const button = document.querySelector('[aria-controls="hamburger-menu"]');

button.addEventListener("click", () => {
  const isOpen = button.getAttribute("aria-expanded");
  console.log("Hamburger menu button clicked", isOpen);
  if (isOpen === "true") {
    button.setAttribute("aria-expanded", "false");
  } else {
    button.setAttribute("aria-expanded", "true");
  }
});
