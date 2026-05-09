const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", function () {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
});

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
});