// ACTUALIZAR MANUALMENTE - Nombre de canciones
const listaCanciones = [
    "Clair-de-Lune.mp3",
    "Amazing-Grace.mp3",
    "Berceuse.mp3",
    "Chill-beats-to-play-chess.mp3",
    "Dance-Of-The-Damselflies.mp3",
    "Eleanor-Rigby.mp3",
    "Help.mp3",
    "Hotline-Piano.mp3",
    "I-Vow-To-Thee-My-Country.mp3",
    "I'm-Not-In-Love.mp3",
    "Life-On-Mars.mp3",
    "Morning-Has-Broken.mp3",
    "Peaceful-Day.mp3",
    "Space-Oddity.mp3",
    "Stairway-To-Heaven.mp3",
    "Summertime.mp3",
    "Swan-Lake.mp3",
    "Wonderous-Stories.mp3"
];

// Ruta donde tienes los archivos (ajusta según tu estructura)
const directorioMusica = "./playlist/";

// Contenedor donde se creará el reproductor
const contenedorPlaylist = document.getElementById("playlist");

function crearReproductor() {
    listaCanciones.forEach(nombreArchivo => {
        // Crea el elemento para la canción
        const cancionDiv = document.createElement('div');
        cancionDiv.classList.add('cancion-item');

        // Agrega el título de la canción
        const titulo = document.createElement('p');
        titulo.textContent = nombreArchivo.replace('.mp3', '');
        titulo.textContent = nombreArchivo.replace('-', ' ');
        // Muestra el nombre sin la extensión
        cancionDiv.appendChild(titulo);

        // Crea el elemento de audio HTML5
        const audio = document.createElement('audio');
        audio.controls = true; // Muestra los controles de reproducción
        audio.src = directorioMusica + nombreArchivo; // Establece la ruta del archivo

        cancionDiv.appendChild(audio);
        contenedorPlaylist.appendChild(cancionDiv);
    });
}

// Llama a la función al cargar la página
window.onload = crearReproductor();

