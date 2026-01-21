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

// Lógica de Votación (Rompehielos)
function vote(type) {
    if(type === 'easy') {
        alert("¡Genial! Será un buen viaje.");
    } else {
        alert("Tranquilo, aquí vamos paso a paso.");
    }
}

// Lógica de los Checkbox (EULA)
// Escuchamos cambios para dar feedback
const checks = document.querySelectorAll('#slide-4 input[type="checkbox"]');

checks.forEach(check => {
    check.addEventListener('change', () => {
        const allChecked = Array.from(checks).every(c => c.checked);
        const agreementBox = document.getElementById('agreement-msg');

        if (allChecked) {
            agreementBox.classList.remove('hidden');
        } else {
            agreementBox.classList.add('hidden');
        }
    });
});


// Lógica de Actividad "Debugging" (DOM Manipulation)
function addNote(type) {
    const input = document.getElementById('noteInput');
    const text = input.value;
    const board = document.getElementById('board');

    if (text.trim() === "") return;

    // Crear elemento visualmente (Manipulación del DOM)
    const note = document.createElement('div');
    note.classList.add('sticky-note');
    note.innerText = text;

    if (type === 'bug') {
        note.style.backgroundColor = '#ff7b72'; // Rojo para Bugs
    } else {
        note.style.backgroundColor = '#58a6ff'; // Azul para Features
    }

    // Agregar al tablero
    board.appendChild(note);
    
    // Limpiar input
    input.value = "";
    
    // Scroll automático al fondo del tablero
    board.scrollTop = board.scrollHeight;
}