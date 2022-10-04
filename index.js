// state
let state;

let snake = {
  body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
  nextDirection: [1, 0]
}

let gameState = {
  apple: [11, 8],
  snake: snake // from above
}

const difficulty = {
  easy: 0, //maintain speed of snake
  medium: 0, //poison apples introduced
  hard: 0, //poison apples and speed increased each time the snake eats an apple
}

let scoreBoard = {
  now: 0, //score resets each time the snake dies
  best: 0, //score is saved each time it is increased by 1
}
console.log(gameState.snake.body)


// function buildInitialState() {
//  function createGrid(){
//   //need to create 20 rows and 40 cells
//   //snake needs to be present on screen as well
//  }
// }

// // render
// function renderState() {
//  //after play is pressed, snake will begin to move on screen
// }

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
// function onBoardClick() {
//   // update state, maybe with another dozen or so helper functions...
// //when up, down, right, or left arrow is pressed the snake will need to move in the desired direction
//   renderState() // show the user the new state
// }
// const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc
// // add to above
// function tick() {
//   // this is an incremental change that happens to the state every time you update...
// //tail removed every time the game ticks 
// //however if it is eating an apple, you wont remove the tail when the snake grows,youll simply add the new head without doing that
//   renderState()
// }

// setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible

// // now you might have things like
// document.addEventListener('keydown', function (event) {
//   // here you might read which key was pressed and update the state accordingly
// })