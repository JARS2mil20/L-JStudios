// Archivo script-videos.js

// ACTUALIZAR MANUALMENTE
const listaVideos = [
 "API-Authentication-EXPLAINED-OAuth-vs-JWT-vs-API-Keys.mp4",
"Es-aburrido,-pero-10-min-te-ahorran-3-anos-programando.mp4",
"I-Built-a-Neural-Network-from-Scratch.mp4",
"It-took-me-10-years-to-realize-what-I’ll-tell-you-in-8-minutes.mp4",
"you-can-learn-assembly-in-10-minutes-try-it-RIGHT-NOW.mp4"

];

// Ruta
const directorioVideos = "./tutorial/";

// Contenedor donde se creará el reproductor
const contenedorPlaylist = document.getElementById("playlist-videos-container");

function crearReproductorVideos() {
    listaVideos.forEach(nombreArchivo => {
        // Crea el elemento contenedor para cada video
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-item');

        // Crea nombreLimpio, nombre del video que ve el usuario
       let nombreLimpio = nombreArchivo.replace('.mp4', '');
       nombreLimpio= nombreLimpio.replaceAll('-', ' ');

        // Agrega el título del video
        const titulo = document.createElement('h2');
        titulo.textContent = nombreLimpio;
        videoDiv.appendChild(titulo);

        const video = document.createElement('video');
        video.controls = true;
        video.src = directorioVideos + nombreArchivo; // Ruta
        video.poster = "placeholder.jpg"; // Opcional: una imagen de previsualización mientras carga

        videoDiv.appendChild(video);
        contenedorPlaylist.appendChild(videoDiv);
    });
}

window.onload = crearReproductorVideos();
