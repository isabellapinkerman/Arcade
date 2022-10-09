const tileSize = 25
let rows = 20
let columns = 20
let board;
let context;

let snakeX = tileSize * 5;
let snakeY = tileSize * 5;
let snake = []

let appleX;
let appleY;

let speed = 7;
let directionX = 0;
let directionY = 0;

let score = [0]
let bestScore = [0]

board = document.getElementById('board');
board.height = rows * tileSize
board.width = columns * tileSize
context = board.getContext('2d')


let gameOver = false



function startGame(){
  location.reload(true)
}



function drawScore(){
  context.fillText(`Score: ${score[0]}`, 10,15)
}

function drawBestScore(){
  context.fillText(`Best Score: ${bestScore[0]}`, 10,25)
}




placeApple()
document.addEventListener('keyup', keyup)
  setInterval(update, 1000/speed)




function update() {
  if(gameOver){
    return;
  }
  context.fillStyle='black'
  context.fillRect(0,0, board.width, board.height)

  context.fillStyle='red'
  context.fillRect(appleX, appleY, tileSize, tileSize)

  drawScore()
  drawBestScore()

if(snakeX === appleX && snakeY === appleY){
  snake.push([appleX, appleY]);
  score[0] += 1
  bestScore[0] = score[0]
  placeApple();
  
}


for(let i = snake.length-1;i>0;i--){
  snake[i]=snake[i-1];
}
if(snake.length){
  snake[0]= [snakeX, snakeY]
}

if(score>4){
  removeTail()
}

  context.fillStyle='white'
  snakeX += directionX * tileSize
  snakeY += directionY * tileSize
  context.fillRect(snakeX, snakeY, tileSize, tileSize)
  for(let i=0;i<snake.length;i++){
    context.fillRect(snake[i][0],snake[i][1], tileSize, tileSize)
  }

  if(snakeX < 0 || snakeX > columns*tileSize || snakeY < 0 || snakeY > rows*tileSize){
    gameOver = true
    alert("GAME OVER")
    location.reload(true)
  }

  for(let s=0;s<snake.length;s++){
    if(snakeX === snake[s][0]&& snakeY === snake[s][1]){
      gameOver = true
      alert("GAME OVER")
      location.reload(true)
    }
  }

}



function placeApple(){

  appleX = Math.floor(Math.random()* columns)* tileSize
  appleY = Math.floor(Math.random()* rows)* tileSize
}

function removeTail(){
  setInterval(1000/10)
  snake[-1,1].splice
}


function keyup(event){
 if(event.code == 'ArrowUp' && directionY !== 1){
 directionX = 0;
 directionY = -1;
}
 else if(event.code == 'ArrowDown' && directionY !== -1){
  directionX = 0;
  directionY = 1;
}
else if(event.code == 'ArrowLeft' && directionX !== 1){
  directionX = -1;
  directionY = 0;
  
}
else if(event.code == 'ArrowRight' && directionX !== -1){
  directionX = 1;
  directionY = 0;
}
}