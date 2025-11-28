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
    descripcion: "Bajo el sello de la Reina Beryl, te alzas en una oscura cacería. Tu misión es desatar la venganza en 1 minuto para reclamar el Cristal de Plata y sellar el destino de la Luna. La obsesión de Beryl por Endymion define tu suerte: su imagen junto a la Reina te otorga favor; su amor junto a Sailor Moon invoca castigo...",
    url: "./queen-beryls-revenge/index.html",
    imagen: ""
  },
  {
    nombre: "Flappy Bird",
    descripcion: "Un clásico. La misión es simple: esquivar las tuberías verdes. Un solo toque lo decide todo. El juego es pura y simple frustración de altos puntajes.",
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
