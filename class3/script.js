// Lógica de Navegación (Slideshow)
let currentSlide = 1;
const totalSlides = 6;

function showSlide(n) {
    // Ocultar todos
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    
    // Validar límites
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    // Mostrar actual
    document.getElementById(`slide-${currentSlide}`).classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}