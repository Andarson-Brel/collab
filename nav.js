const navMenu = document.querySelector(".nav-menu");
const menu = document.querySelector(".menu");
// Add a click event listener to the menu element
menu.addEventListener("click", () => {
  // Toggle the display style of the navMenu element
  const navMenuStyle = window.getComputedStyle(navMenu).display;
  if (navMenuStyle === "none" || navMenuStyle === "hidden") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});
