// Array con info de los libros, como se ve a continuación: (idealmente utilizar formato pdf, en minúscula, si no, ser consciente de las consecuencias)
// url_lectura puede ser un PDF o visor hmtl/Iframe para leer online
// url_descarga puede ser PDF, EPUB o MOBI para descargarlo directamente
const libros = [
  {
    titulo: "Un Ida y Vuelta",
    autor: "JARS",
    sinopsis: "Una guerra silenciosa que se libra en las sombras de la sociedad moderna, las máscaras de seres superiores están a punto de caer y con ello el inicio de una nueva era. &quot;Un Ida y Vuelta&quot; es una odisea de fantasía urbana y ciencia ficción donde la libertad es una ilusion y el destino, una estrategia.\nEnvuelto en sueños, simulaciones e historias queda a tu elección que es Verdad y que No...",
    imagen: "./portrait/IyV.jpg",
    url_lectura: "./pdf/Un-ida-y-vuelta.pdf",
    url_descarga: "./pdf/Un-ida-y-vuelta.pdf"
  },
  {
    titulo: "Harry Potter - Saga Completa",
    autor: "J.K. Rowling",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Harry-Potter-saga-completa-JK-Rowling.pdf",
    url_descarga: "./pdf/Harry-Potter-saga-completa-JK-Rowling.pdf"
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Orgullo-y-prejuicio-Jane-Austen.pdf",
    url_descarga: "./pdf/Orgullo-y-prejuicio-Jane-Austen.pdf"
  },
  {
    titulo: "Persuasión",
    autor: "Jane Austen",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Persuasion-Jane-Austen.pdf",
    url_descarga: "./pdf/Persuasion-Jane-Austen.pdf"
  },
  {
    titulo: "Sentido y sensibilidad",
    autor: "Jane Austen",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Sentido-sensibilidad-Jane-Austen.pdf",
    url_descarga: "./pdf/Sentido-sensibilidad-Jane-Austen.pdf"
  },
  {
    titulo: "Una corte de alas y ruina",
    autor: "Sarah J. Maas",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Una-corte-de-alas-y-ruina-Sarah-J-Maas.pdf",
    url_descarga: "./pdf/Una-corte-de-alas-y-ruina-Sarah-J-Maas.pdf"
  },
  {
    titulo: "Una corte de hielo y estrellas",
    autor: "Sarah J. Maas",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Una-corte-de-hielo-y-estrellas-Sarah-J-Maas.pdf",
    url_descarga: "./pdf/Una-corte-de-hielo-y-estrellas-Sarah-J-Maas.pdf"
  },
  {
    titulo: "Una corte de llamas plateadas",
    autor: "Sarah J. Maas",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Una-corte-de-llamas-plateadas-Sarah-J-Maas.pdf",
    url_descarga: "./pdf/Una-corte-de-llamas-plateadas-Sarah-J-Maas.pdf"
  },
  {
    titulo: "Una corte de niebla y furia",
    autor: "Sarah J. Maas",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Una-corte-de-niebla-y-furia-Sarah-J-Maas.pdf",
    url_descarga: "./pdf/Una-corte-de-niebla-y-furia-Sarah-J-Maas.pdf"
  },
  {
    titulo: "Una corte de rosas y espinas",
    autor: "Sarah J. Maas",
    sinopsis: "",
    imagen: "",
    url_lectura: "./pdf/Una-corte-de-rosas-y-espinas-Sarah-J-Maas.pdf",
    url_descarga: "./pdf/Una-corte-de-rosas-y-espinas-Sarah-J-Maas.pdf"
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
        <p>Autor: <strong>${libro.autor}</strong></p>
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
