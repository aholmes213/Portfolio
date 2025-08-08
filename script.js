// JavaScript Document

// ********** Menu Actions **********
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

