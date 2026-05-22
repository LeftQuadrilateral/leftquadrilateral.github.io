var brick = new Image();
brick.src = "brick.png";

var playerRight = new Image();
playerRight.src = "playerRight.png";
var playerLeft = new Image()
playerLeft.src = "playerLeft.png";
var playerUp = new Image()
playerUp.src = "playerUp.png";
var playerDown = new Image()
playerDown.src = "playerDown.png";


function drawTile(tile, x, y) {
    context.drawImage(tile, x, y);
    //context.fillStyle=color;
    //context.fillRect(x, y, blockSize, blockSize);
}

function drawTileArray(tile, tiles) {
    for (let i = 0; i < tiles.length; i++) {
        drawTile(tile, tiles[i][0], tiles[i][1]);
    }
}

var walls = [];
for (let i = 0; i < cols; i++) {
    walls.push([i * blockSize, 0]);
}
for (let i = 0; i < cols; i++) {
    walls.push([i * blockSize, (rows -1) * blockSize]);
}
for (let i = 0; i < rows; i++) {
    walls.push([0, i * blockSize]);
}
for (let i = 0; i < rows; i++) {
    walls.push([(cols -1) * blockSize, i * blockSize]);
}
walls.push([4*blockSize, 6*blockSize]);