// This is your original function that opens/closes the menu when clicking the hamburger icon
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

// NEW: This listens for clicks anywhere on the entire screen
window.addEventListener("click", function (event) {
  const menu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  if (
    menu.classList.contains("active") &&
    !menu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    menu.classList.remove("active");
  }
});
