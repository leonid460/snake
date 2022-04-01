import { COLUMNS_AMOUNT, ROWS_AMOUNT } from './constants.js';
import { grid } from './grid.js';
import { snake } from './snake.js';
import { moveInputController } from './move-input-controller.js';
import { gameLoop } from './game-loop.js';
import { score } from './score.js'
import { food } from './food.js';
import { resultMessage } from './result-message.js';

function drawSnake() {
  for (let cellCoords of snake.cells) {
    grid.paintCell(cellCoords, 'black');
  }
}

function onKeyDownOnce(callback) {
  window.addEventListener('keydown', () => {
    window.removeEventListener('keydown', callback);
    callback();
  });
}

function stopGame() {
  grid.enableBlinking();
  gameLoop.stopLoop();

  const gameElement = document.getElementById('game');

  const showScore = () => {
    grid.disableBlinking();
    gameElement.style.display = 'none';
    resultMessage.show(score.value);
  }

  onKeyDownOnce(showScore);
}

function step() {
  while (moveInputController.isThereNewMove) {
    const newDirection = moveInputController.extractMove();

    if (snake.changeDirection(newDirection)) {
      break;
    }
  }

  try {
    snake.move();
  } catch (error) {
    return stopGame();
  }

  if (!grid.isPointInsideGrid(snake.head)) {
    return stopGame();
  }

  if (food.isPresent && snake.cellsSet.has(food.cell)) {
    score.set(score.value + 8);
    snake.enlarge();
    gameLoop.increaseSpeed();
    food.delete();
  }

  if (!food.isPresent) {
    food.generateRandom([ROWS_AMOUNT - 1, COLUMNS_AMOUNT - 1], snake.cellsSet);
  }

  grid.clearGrid();
  drawSnake();
  grid.paintCell(food.cell, 'black');
}

gameLoop.startLoop(step);
