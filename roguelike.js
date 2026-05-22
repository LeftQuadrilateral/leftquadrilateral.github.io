
//board
var blockSize = 30;
var rows = 13;
var cols = 21;
var board;
var context;

//player
var playerX = blockSize * 8;
var playerY = blockSize * 4;

var moveX = 0;
var moveY = 0;

var moveSpeed = 1;
var playerImage = new Image();
playerImage.src = "playerRight.png";


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    document.addEventListener("keydown", changeDirection);
    document.addEventListener("keyup", releaseKey);
    setInterval(update, 5);
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);
    drawTileArray(brick, walls);

    playerX += moveX * moveSpeed;
    if (collisionCheck()) {
        playerX -= moveX * moveSpeed;
    }
    playerY += moveY * moveSpeed;
    if (collisionCheck()) {
        playerY -= moveY * moveSpeed;
    }

    drawTile(playerImage, playerX, playerY);
}

function releaseKey() {
    moveX = 0;
    moveY = 0;
}

function collisionCheck() {
    for (let i = 0; i < walls.length; i++) {
       if(Math.abs(walls[i][0]-playerX) < blockSize && Math.abs(walls[i][1]-playerY) < blockSize) {
            return true;
       }
    }
    return false;
}

function changeDirection(e) {
    if (e.code == "ArrowUp") {
        moveX = 0;
        moveY = -1;
        playerImage = playerUp;
    } else if (e.code == "ArrowDown") {
        moveX = 0;
        moveY = 1;
        playerImage = playerDown;
    } else if (e.code == "ArrowLeft") {
        moveX = -1;
        moveY = 0;
        playerImage = playerLeft;
    } else if (e.code == "ArrowRight") {
        moveX = 1;
        moveY = 0;
        playerImage = playerRight;
    } else {
        moveX = 0;
        moveY = 0;
    }
}