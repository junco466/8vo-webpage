let currentSlide = 1;
const totalSlides = 6;
let editor = null; // ← importante

function showSlide(n) {

    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

    if (n > totalSlides) currentSlide = 1;
    else if (n < 1) currentSlide = totalSlides;
    else currentSlide = n;

    const activeSlide = document.getElementById(`slide-${currentSlide}`);
    activeSlide.classList.add('active');

    // 👇 SOLO si es el slide del editor
    if (activeSlide.querySelector("#htmlEditor") && !editor) {

        setTimeout(() => {

            editor = CodeMirror.fromTextArea(
                document.getElementById("htmlEditor"),
                {
                    mode: "htmlmixed",
                    theme: "material-darker",
                    lineNumbers: true,
                    autoCloseTags: true,
                    lineWrapping: true
                }
            );

            editor.setValue(
`<body>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_YlJ27qWvSO-n4_0YqHG3BvstovcXo-CYw&s" alt="ROPA de VERANO">
            </article>
        </section>
    </main>
</body>`);

            const preview = document.getElementById("previewFrame");

            function updatePreview() {
                preview.srcdoc = editor.getValue();
            }

            editor.on("change", updatePreview);
            updatePreview();

        }, 100);
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializar primera slide
showSlide(currentSlide);
