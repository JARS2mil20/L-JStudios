// Array con info de los libros, como se ve a continuación:
// url_lectura puede ser un PDF o visor hmtl/Iframe para leer online
// url_descarga puede ser PDF, EPUB o MOBI para descargarlo directamente
const libros = [
  {
    titulo: "",
    autor: "",
    sinopsis: "",
    imagen: "",
    url_lectura: "",
    url_descarga: ""
  },
  {
    titulo: "",
    autor: "",
    sinopsis: "",
    imagen: "",
    url_lectura: "",
    url_descarga: ""
  }
]

const container = document.getElementById('libros-container');
const visorOverlay = document.getElementById('visor-overlay');
const visorIframe = document.getElementById('visor-iframe');
const cerrarBoton = document.getElementById('cerrar-visor');
// Generar Tarjetas
libros.forEach(libro => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-libro');

    tarjeta.innerHTML = `
        <img src="${libro.imagen}" alt="Tapa del libro ${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <p>Autor: **${libro.autor}**</p>
        <p class="sinopsis">${libro.sinopsis}</p>
        <div class="botones-accion">
            <button class="boton-leer" data-url="${libro.url_lectura}">
                Leer Online
            </button>
            <a href="${libro.url_descarga}" class="boton-descargar" download>
                Descargar
            </a>
        </div>
    `;
    container.appendChild(tarjeta);
});
// Abrir Visor Online
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('boton-leer')) {
        const url = event.target.dataset.url;
        visorIframe.src = url;
        visorOverlay.classList.remove('oculto');
    }
});
// Cerrar Visor Online
cerrarBoton.addEventListener('click', () => {
    visorOverlay.classList.add('oculto');
    visorIframe.src = ""; 
});
