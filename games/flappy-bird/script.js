const canvas = document.getElementById('gameCanvas');
if (!canvas) {
    console.error("Canvas element not found.");
}
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const BASE_GRAVITY = 0.7;
const JUMP_VELOCITY = -10;
const INITIAL_PIPE_SPEED = 1.5;
const MAX_PIPE_SPEED = 4.0;
const PIPE_WIDTH = 50;
const PIPE_GAP = 150;

const BIRD_IMAGE = new Image();
BIRD_IMAGE.src ='assets/Bird1-1.png';
const PIPE_TOP_IMAGE = new Image(); 
PIPE_TOP_IMAGE.src = 'assets/topPipe.png';
const PIPE_BOTTOM_IMAGE = new Image(); 
PIPE_BOTTOM_IMAGE.src = 'assets/botPipe.png';

const BIRD_WIDTH = 34;
const BIRD_HEIGHT =24
const BIRD_RADIUS = 8;
const COLLISION_RADIUS_X = BIRD_WIDTH / 2;
const COLLISION_RADIUS_Y = BIRD_HEIGHT / 2; 

let birdX = 50;
let birdY = 150;
let birdVelocity = 0;
let score = 0;
let pipes = []; 
let currentPipeSpeed = INITIAL_PIPE_SPEED; 


function flap(event) {
    if (event.code === 'Space' || event.type === 'mousedown') {
        birdVelocity = JUMP_VELOCITY;
    }
}
document.addEventListener('keydown', flap);
document.addEventListener('mousedown', flap);


function generatePipe() {
    const topHeight = Math.random() * (HEIGHT - (PIPE_GAP + 200)) + 100;
    const bottomY = topHeight + PIPE_GAP;

    pipes.push({
        x: WIDTH, 
        y_top: topHeight,
        y_bottom: bottomY,
        scored: false
    });
}

function checkCollision() {
    for (let p of pipes) {
        if (birdX + BIRD_RADIUS > p.x && birdX - BIRD_RADIUS < p.x + PIPE_WIDTH) {

            const hitsTopPipe = birdY - BIRD_RADIUS < p.y_top;
            const hitsBottomPipe = birdY + BIRD_RADIUS > p.y_bottom;

            if (hitsTopPipe || hitsBottomPipe) {
                return true;
            }
        }
    }

    if (birdY > HEIGHT - BIRD_RADIUS || birdY < 0) {
        return true;
    }

    return false;
}


function gameLoop() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    birdVelocity += BASE_GRAVITY; 
    birdY += birdVelocity;        

    ctx.drawImage( BIRD_IMAGE, birdX - COLLISION_RADIUS_X,
birdY - COLLISION_RADIUS_Y,
BIRD_WIDTH,
BIRD_HEIGHT
);

    for (let i = pipes.length - 1; i >= 0; i--) {
        let p = pipes[i];

        p.x -= currentPipeSpeed; 

        ctx.drawImage(PIPE_TOP_IMAGE, 
                      p.x, 
                      0, 
                      PIPE_WIDTH, 
                      p.y_top
        );

        ctx.drawImage(PIPE_BOTTOM_IMAGE, 
                      p.x, 
                      p.y_bottom, 
                      PIPE_WIDTH, 
                      HEIGHT - p.y_bottom
        );

        if (p.x + PIPE_WIDTH < birdX && !p.scored) {
            score++;
            p.scored = true;
        }

        if (p.x < -PIPE_WIDTH) {
            pipes.splice(i, 1);
        }
    }

    if (pipes.length === 0 || pipes[pipes.length - 1].x < WIDTH - 200) {
        generatePipe();
    }

    const difficultyMultiplier = Math.floor(score / 5);
    const newSpeed = INITIAL_PIPE_SPEED + difficultyMultiplier * 0.15; 

    currentPipeSpeed = Math.min(newSpeed, MAX_PIPE_SPEED); 

    if (checkCollision()) {
        gameOver();
        return;
    }

    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 10, 30);

    requestAnimationFrame(gameLoop);
}


function gameOver() {
    alert('Tu puntuación final es: ' + score);

    birdY = 150;
    birdVelocity = 0;
    score = 0;
    pipes = [];
    currentPipeSpeed = INITIAL_PIPE_SPEED; 

    gameLoop();
}

gameLoop();
