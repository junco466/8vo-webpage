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

//SCRIPT PARA EL TEXTCODE
//EDITOR DE CODIGO CON CODEMIRROR
const editor = CodeMirror.fromTextArea(
    document.getElementById("htmlEditor"), 
    {
        mode: "htmlmixed",
        theme: "material-darker",
        lineNumbers: true,
        autoCloseTags: true,
        lineWrapping: true
    }
);

function activateSlide(slideElement) {
    slideElement.classList.add("active");

    setTimeout(() => {
        editor.refresh();
    }, 50);
}


editor.setValue(
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>SHEIN</h1>
        <h2>Compra ropa barata</h2>
        <img src="https://cdn.milenio.com/uploads/media/2023/05/24/tienda-de-shein-en-mexico.jpg" alt="">
    </header>

    <main>
        <section>
            <article>
                <h2>Nuevos Lanzamientos</h2>
                <p>
                    Estos son los nuevos lanzamientos de verano<br><br>

                    Aqui sigo mi linea
                </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcmRuwmwWDdqO738fdz0e_CjCZ5Jz5irVcg&s"
                    alt="ROPA de VERANO">
            </article>
            <article>
                <h2>Ropa de Invierno</h2>
                <p>
                    Estos son los nuevos lanzamientos de invierno<br><br>

                    Aqui sigo mi linea
                </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_YlJ27qWvSO-n4_0YqHG3BvstovcXo-CYw&s" alt="hola">
                    alt="ROPA de VERANO">
            </article>
        </section>
    </main>
</body>

</html>`
);

const preview = document.getElementById("previewFrame");

function updatePreview() {
    preview.srcdoc = editor.getValue();
}

editor.on("change", updatePreview);

// Cargar inicial
updatePreview();



//-------------CODIGO SENCILLO PARA UN EDITOR DE CODIGO--------------
// const textarea = document.getElementById("code");
// const output = document.getElementById("output");

// function updatePreview() {
//     output.srcdoc = textarea.value;
// }

// textarea.addEventListener("input", updatePreview);

// // Cargar contenido inicial
// updatePreview();