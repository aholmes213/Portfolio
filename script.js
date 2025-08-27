// JavaScript Document

// ********** Menu Actions **********
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ********** Lightbox **********

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const items = document.querySelectorAll('.screenShot');
items.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    const type = item.dataset.type;
    const src = item.dataset.src || item.src;
    let content;

    if (type === 'video') {
      content = document.createElement('video');
      content.src = src;
      content.controls = true;
      content.autoplay = true;
      content.muted = true;
      content.playsInline = true;
    } else {
      content = document.createElement('img');
      content.src = src;
    }

    content.classList.add('lightbox-media');
    lightbox.appendChild(content);
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
  lightbox.innerHTML = '';
});
