const musica = document.getElementById("audioClaire");
const boton = document.getElementById("BotonMusica");
// Selecciona el elemento P que muestra el estado de la música
const estadoMusica = document.getElementById("estadoMusica"); 
let estaSonando = false;

function alternarMusica() {
    if (estaSonando) {
        musica.pause();
        boton.textContent = "Reproducir.";
        // Actualiza el texto de estado
        estadoMusica.textContent = "Música: Detenida."; 
        estaSonando = false;
    } else {
        musica
            .play()
            .then(() => {
                boton.textContent = "Detener.";
                // Actualiza el texto de estado
                estadoMusica.textContent = "Música: Reproduciendo..."; 
                estaSonando = true;
            })
            .catch((error) => {
                // Muestra el mensaje de error en el elemento de la página
                estadoMusica.textContent = "Música: Error. Haz clic de nuevo para habilitar la reproducción.";
                boton.textContent = "Reproducir.";
                estaSonando = false;
                console.error("Error al reproducir el audio:", error);
            });
    }
}
