const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Manual slide change on click
document.getElementById('slideshow').addEventListener('click', nextSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        slide.querySelector('p').style.opacity = 1; // Show h2 of active slide
        slide.querySelector('p').style.transform = 'translateY(0);' // Show h2 of active slide
      } else {
        slide.classList.remove('active');
        slide.querySelector('p').style.opacity = 0; // Hide h2 of inactive slides
        slide.querySelector('p').style.transform = 'translateY(40px);' // Hide h2 of inactive slides
      }
    });
  }
  