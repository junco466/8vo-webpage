document.addEventListener('DOMContentLoaded', () => {
    const starters = {
        1: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primera estructura</title>
</head>
<body>
  <!-- Completa: crea un header con un h1 -->
  

  <!-- Completa: crea un nav con una lista ul y dos enlaces internos -->
  

  <main>
    <!-- Completa: crea una section con id="aprendizaje" -->
    
      <!-- Completa: crea un article con class="tarjeta" -->
      
        <h2>Lo que aprenderé</h2>
        <!-- Completa: agrega una lista ordenada ol con tres li -->
        
      
    
  </main>
</body>
</html>`,

        2: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contenido HTML</title>
</head>
<body>
  <header id="arriba" class="encabezado">
    <!-- Completa: agrega un h1 -->
    
    <!-- Completa: agrega un párrafo p -->
    
  </header>

  <nav>
    <a href="#galeria">Ir a galería</a>
    <!-- Completa: agrega un enlace externo hacia https://developer.mozilla.org/ -->
    
  </nav>

  <section id="galeria" class="seccion">
    <!-- Completa: agrega un h2 -->
    
    <!-- Completa: agrega una imagen con src, alt, width y class="foto" -->
    
    <article class="nota">
      <!-- Completa: agrega un h3 y un p -->
      
      
      <!-- Completa: agrega una lista ul con dos li -->
      
    </article>
  </section>

  <footer>
    <a href="#arriba">Volver arriba</a>
  </footer>
</body>
</html>`,

        3: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSS básico</title>
  <!-- Completa: escribe la etiqueta link para conectar styles.css -->
  
  <style>
    /* Selector de etiqueta: cambia el fondo, color y tamaño del texto del body */
    body {
      
    }

    /* Selector de etiqueta: centra los títulos h1 */
    h1 {
      
    }

    /* Selector de clase: diseña .tarjeta con margen, padding, borde, ancho y alto */
    .tarjeta {
      
    }

    /* Selector de clase: quita la decoración del enlace */
    .boton {
      
    }

    /* Selector de etiqueta: cambia el estilo de la lista */
    ul {
      
    }
  </style>
</head>
<body>
  <header>
    <h1>Mi tarjeta con CSS</h1>
  </header>

  <section class="tarjeta">
    <h2>Practicando selectores</h2>
    <p>CSS permite cambiar el diseño visual de una página HTML.</p>
    <ul>
      <li>Color</li>
      <li>Espaciado</li>
      <li>Bordes</li>
    </ul>
    <a class="boton" href="https://developer.mozilla.org/" target="_blank">Aprender más</a>
  </section>
</body>
</html>`,

        4: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Display y Flex</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f8fafc;
    }

    /* Completa: convierte .menu en un contenedor flexible y separa sus elementos */
    .menu {
      
    }

    /* Completa: muestra los enlaces del menú como inline */
    .menu a {
      
      padding: 8px 10px;
      background-color: #dbeafe;
      border-radius: 8px;
      text-decoration: none;
    }

    /* Completa: muestra cada tarjeta como block con margen, padding y borde */
    .card {
      
    }

    /* Completa: organiza las tarjetas con display flex y justify-content */
    .contenedor {
      
    }
  </style>
</head>
<body>
  <header>
    <h1>Display en CSS</h1>
    <nav class="menu">
      <a href="#uno">Uno</a>
      <a href="#dos">Dos</a>
      <a href="#tres">Tres</a>
    </nav>
  </header>

  <section class="contenedor">
    <article class="card" id="uno">
      <h2>Block</h2>
      <p>Ocupa una línea completa.</p>
    </article>
    <article class="card" id="dos">
      <h2>Inline</h2>
      <p>Se ubica en la misma línea.</p>
    </article>
    <article class="card" id="tres">
      <h2>Flex</h2>
      <p>Distribuye elementos con facilidad.</p>
    </article>
  </section>
</body>
</html>`
    };

    const checklists = {
        1: [
            '<html', '<head', '<body', '<header', '<nav', '<section', '<article', '<ul', '<ol', '<li',
            'id="aprendizaje"', 'class="tarjeta"'
        ],
        2: [
            '<h1', '<h2', '<h3', '<p', '<ul', '<li', '<img', 'src=', 'alt=', '<a', 'href=',
            'id="arriba"', 'class="foto"', 'https://developer.mozilla.org', 'href="#galeria"'
        ],
        3: [
            '<link', 'rel="stylesheet"', 'href="styles.css"', 'background-color', 'color:', 'font-size',
            'margin', 'padding', 'border', 'width', 'height', 'text-align', 'text-decoration', 'list-style',
            '.tarjeta', '.boton'
        ],
        4: [
            'display: flex', 'justify-content', 'display: inline', 'display: block', 'margin', 'padding', 'border'
        ]
    };

    function normalize(code) {
        return code.toLowerCase().replace(/\s+/g, ' ').replace(/'/g, '"');
    }

    function getElement(id) {
        return document.getElementById(id);
    }

    function runPreview(codeId, frameId) {
        const textarea = getElement(codeId);
        const frame = getElement(frameId);

        if (!textarea || !frame) {
            console.warn(`No se encontró ${codeId} o ${frameId}.`);
            return;
        }

        frame.srcdoc = textarea.value;
    }

    function setFeedback(number, type, messages) {
        const feedback = getElement(`feedback${number}`);
        if (!feedback) return;

        feedback.className = `feedback ${type}`.trim();
        feedback.innerHTML = messages.join('<br>');
    }

    function getMissingItems(number, code) {
        const list = checklists[number] || [];
        return list.filter((item) => !code.includes(item));
    }

    function checkChallenge(number) {
        const textarea = getElement(`code${number}`);
        if (!textarea) return;

        const code = normalize(textarea.value);
        const missing = getMissingItems(number, code);

        runPreview(`code${number}`, `preview${number}`);

        if (missing.length === 0) {
            setFeedback(number, 'ok', ['✅ ¡Excelente! El reto contiene los elementos principales solicitados.']);
            return;
        }

        if (missing.length <= 4) {
            setFeedback(number, 'warn', [
                '🟡 Vas muy bien. Revisa estos elementos que faltan:',
                `<strong>${missing.join(', ')}</strong>`
            ]);
            return;
        }

        setFeedback(number, 'bad', [
            '🔴 Aún faltan varios elementos importantes:',
            `<strong>${missing.join(', ')}</strong>`
        ]);
    }

    function resetChallenge(number) {
        const textarea = getElement(`code${number}`);
        if (!textarea || !starters[number]) return;

        textarea.value = starters[number];
        runPreview(`code${number}`, `preview${number}`);
        setFeedback(number, '', ['Completa el código y presiona “Revisar”.']);
    }

    async function copyCode(codeId, button) {
        const textarea = getElement(codeId);
        if (!textarea) return;

        try {
            await navigator.clipboard.writeText(textarea.value);
        } catch (error) {
            textarea.select();
            document.execCommand('copy');
        }

        const originalText = button.textContent;
        button.textContent = 'Copiado';
        setTimeout(() => {
            button.textContent = originalText;
        }, 1200);
    }

    function initializeTextareas() {
        document.querySelectorAll('textarea[id^="code"]').forEach((textarea) => {
            const number = textarea.id.replace('code', '');

            if (starters[number]) {
                textarea.value = starters[number];
            }

            textarea.addEventListener('input', () => {
                runPreview(`code${number}`, `preview${number}`);
            });

            runPreview(`code${number}`, `preview${number}`);
        });
    }

    document.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.dataset.run && button.dataset.frame) {
            runPreview(button.dataset.run, button.dataset.frame);
        }

        if (button.dataset.check) {
            checkChallenge(button.dataset.check);
        }

        if (button.dataset.reset) {
            resetChallenge(button.dataset.reset);
        }

        if (button.dataset.copy) {
            copyCode(button.dataset.copy, button);
        }
    });

    initializeTextareas();
});
