const gameArea = document.getElementById("game-area");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const timerEl = document.getElementById("timer");
const music = document.getElementById("music");

let score = 0;
let lives = 3;
let timeLeft = 60;
let interval;
let speed = 1000;
let currentTarget = null;
let tuxedoTimeouts = [];

function startGame() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  // ESTA ES LA LÍNEA AÑADIDA QUE INICIA LA MÚSICA CON EL CLIC
  music.play().catch(error => {
    console.log("No se pudo iniciar la reproducción:", error);
  });

  speed = parseInt(document.getElementById("difficulty").value);
  score = 0;
  lives = 3;
  timeLeft = 60;
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  timerEl.textContent = timeLeft;

  generateGrid();
  spawnTarget();
  interval = setInterval(updateTimer, 1000);
}

function generateGrid() {
  gameArea.innerHTML = '';
  for (let i = 0; i < 36; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
      if (cell !== currentTarget) loseLife();
    });
    gameArea.appendChild(cell);
  }
}

function spawnTarget() {
  if (lives <= 0 || timeLeft <= 0) return;

  if (currentTarget) currentTarget.innerHTML = "";

  const cells = document.querySelectorAll(".cell");
  const index = Math.floor(Math.random() * cells.length);
  const cell = cells[index];

  const img = document.createElement("img");
  img.src = "Sailor.jpg";
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    score++;
    scoreEl.textContent = score;
    spawnTarget();
  });

  const wrapper = document.createElement("div");
  wrapper.classList.add("target");
  wrapper.appendChild(img);
  cell.innerHTML = "";
  cell.appendChild(wrapper);
  currentTarget = cell;

  spawnTuxedos();
}

function spawnTuxedos() {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const tuxedoTypes = [
    { src: "TuxedoBeryl.png", effect: "life" },
    { src: "TuxedoSailor.png", effect: "damage" }
  ];

  tuxedoTypes.forEach(({ src, effect }) => {
    if (Math.random() < 0.25) {
      const index = Math.floor(Math.random() * cells.length);
      const tuxedo = document.createElement("img");
      tuxedo.src = src;
      tuxedo.classList.add("tuxedo");

      tuxedo.addEventListener("click", (e) => {
        e.stopPropagation();
        if (effect === "life") {
          lives++;
        } else {
          lives--;
        }
        livesEl.textContent = lives;
        tuxedo.remove();
      });

      cells[index].appendChild(tuxedo);

      const timeout = setTimeout(() => {
        tuxedo.remove();
      }, 3000);

      tuxedoTimeouts.push(timeout);
    }
  });
}

function loseLife() {
  lives--;
  livesEl.textContent = lives;
  if (lives <= 0) endGame(false);
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame(score >= 100);
  }
}

function endGame(won) {
  clearInterval(interval);
  tuxedoTimeouts.forEach(clearTimeout);
  document.getElementById("game").classList.add("hidden");
  document.getElementById("end").classList.remove("hidden");
  document.getElementById("endMessage").textContent = won
    ? "¡La seductora y siniestra reina Beryl se ha salido con la suya! Has obtenido el cristal de plata. VICTORIA."
    : "¡La tierna y valerosa guerrera lunar, Sailor Moon, ha castigado a la malvada reina Beryl, en el nombre de la luna! DERROTA.";
}

function restartGame() {
  document.getElementById("end").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}
