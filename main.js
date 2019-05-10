let canvas = document.getElementById('main');
let c = canvas.getContext('2d');


canvas.width = 1280;
canvas.height = 700;

let bullets = [];
let bulletCOUNT = 50;
let bulletsUSED = 0;
let enemiesKilled = 0;
let player;
let enemies = [];
var keyPress = {
    left: false,
    right: false,
    up: false
};

let colors = [
    '#7AB262',
    '#4C7F35',
    '#2F790F',
    '#7F8351',
    '#3C6214'
];


function randomColor(){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateEnemy(){
    let x = Math.random() * canvas.width;
    let y = canvas.height/2;
    let color = randomColor();
    let speed = Math.random();
    let health = Math.floor(Math.random() * 10)
    enemies.push(new Enemy(x,y,20,color,speed,health));
}


function init() {
    player = new Player(canvas.width/2,canvas.height/2);
    generateEnemy();
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    c.fillStyle = 'white';
    c.lineWidth = 1;
    c.font = "20px Arial";
    c.fillText("Bullets Left: " + bulletCOUNT, 70, 15);
    c.fillText("Enemies Killed: " + enemiesKilled, canvas.width - 85, 15);

    enemies[0].draw(c);

    if(keyPress.left){
        player.x -= 5;
    }

    if(keyPress.right){
        player.x += 5;
    }
    for(let j = 0; j < enemies.length; j++){
        for(let k = 0; k < bullets.length; k++){
            if(bullets[k].dist(enemies[j]) <= enemies[j].radius){
                enemies[j].health--;
                bullets.splice(k,1);
                k--;
            }
        }
        if(enemies[j].health <= 0){
            enemies.splice(j,1);
            generateEnemy();
            enemiesKilled ++;
        }
        if(enemies[j].radius >= 300){
            alert("You Lose!\nEnemies Killed: " + enemiesKilled);
            enemies.splice(j,1);
        }
        enemies[j].update();
    }
    for(let i = 0; i < bullets.length; i++){
        bullets[i].update(player);
        bullets[i].draw(c);

        if(bullets[i].y <= player.y){
            bullets.splice(i,1);
            i--;
        }
    }
    player.draw(c);

    if(enemiesKilled == 5 || enemiesKilled == 10 || enemiesKilled == 15){
        bulletCOUNT = 50;
    }
    requestAnimationFrame(update);

}


window.addEventListener('load', () => {
    init();
});

window.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft') {
        keyPress.left = true;
    }
    if(event.key === 'ArrowRight') {
        keyPress.right = true;
    }
    if(event.key === 'ArrowUp') {
        if(bulletCOUNT > 0){
            bullets.push(new Bullet(900,700,5,20));
            bulletCOUNT--;
        }
    }
});

window.addEventListener('keyup', function(event){
    if(event.key === 'ArrowLeft') {
        keyPress.left = false;
    }
    if(event.key === 'ArrowRight') {
        keyPress.right = false;
    }
    // up stays true when pressed once
})
