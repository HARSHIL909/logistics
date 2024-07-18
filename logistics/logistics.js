const slides = document.querySelectorAll('.background-slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('show');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('show');
}

setInterval(changeSlide, 3000); // Change image every 3 seconds
