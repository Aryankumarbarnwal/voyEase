
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .images');
const dots = document.querySelectorAll('.slider .dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

// Initialize the slider
showSlide(currentSlide);



// Form Section
