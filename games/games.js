// Array de juegos, que incluye nombre, descripción, url (dirección) e imagen (si tiene); puesto entre llaves, por juego, clases y juegos separados por coma (excepto último)
// Revisar las descriciones (soy muy malo)
const juegos = [
  {
    nombre: "A Click A Scientia",
    descripcion: "Juego edúcativo",
    url: "https://jars2mil20.itch.io/tp-1-recursosdigitaleseducativos",
    imagen: "./icon/L&JStudios.png"
  },
  {
    nombre: "Ecoinnovaciones Tecnológicas",
    descripcion: "Juego educativo",
    url: "https://jars2mil20.itch.io/tp-2-ecoinnvaciones-tecnolgicas",
    imagen: "./icon/L&JStudios.png"
  },
  {
    nombre: "Queen Beryl´s Revenge",
    descripcion: "No sé...",
    url: "./queen-beryls-revenge/index.html",
    imagen: ""
  },
  {
    nombre: "Flappy Bird",
    descripcion: "Un clásico",
    url: "./flappy-bird/index.html",
    imagen: ""
  }
];

const container = document.getElementById("container");

juegos.forEach(juego => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-juego');

    tarjeta.innerHTML = `
        <img src="${juego.imagen}" alt="Imagen del juego ${juego.nombre}">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <a href="${juego.url}" class="boton-jugar" target="_blank">
            ¡JUGAR AHORA!
        </a>
    `;

    container.appendChild(tarjeta);
});
