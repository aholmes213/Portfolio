// JavaScript Document

// ********** Menu Actions **********
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const mediaItems = [
  '<img src="./assets/cfetpShot1.jpg" alt="Screenshot 1">',
  '<img src="./assets/cfetpShot2.png" alt="Screenshot 2">',
  '<video autoplay muted controls><source src="./assets/cfetpShot3.mp4" type="video/mp4"></video>'
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightboxContent').innerHTML = mediaItems[index];
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lightboxContent').innerHTML = '';
}

function nextItem() {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  openLightbox(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  openLightbox(currentIndex);
}
