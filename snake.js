import { CellsSet } from './CellsSet.js';

const moveRight = ([top, left]) => [top, left + 1];
const moveLeft = ([top, left]) => [top, left - 1];
const moveUp = ([top, left]) => [top - 1, left];
const moveDown = ([top, left]) => [top + 1, left];

class Snake {
  constructor(initCells) {
    this.initCells = initCells;
    this.cells = [...initCells];
    this.cellsSet = new CellsSet();
    this.currentDirection = moveRight;
  }

  move = () => {
    const head = this.head;
    const newHead = this.currentDirection(head);
    const tail = this.cells.shift();

    this.cellsSet.delete(tail);

    if (this.cellsSet.has(newHead)) {
      throw new Error('Snake crossed itself');
    }

    this.cellsSet.add(newHead);
    this.cells.push(newHead);
  };

  changeDirection = (direction) => {
    let newDirection;

    switch (direction) {
      case 'left':
        newDirection = moveLeft;
        break;
      case 'right':
        newDirection = moveRight;
        break;
      case 'up':
        newDirection = moveUp;
        break;
      case 'down':
        newDirection = moveDown;
        break;
    }

    if (!this.__areOppositeDirections(this.currentDirection, newDirection)) {
      this.currentDirection = newDirection;

      return true;
    }

    return false;
  };

  get head() {
    return this.cells[this.cells.length - 1];
  };

  enlarge = () => {
    this.cells.push(this.head);
  }

  reset = () => {
    this.cells = [...this.initCells];
    this.cellsSet.clear();
    this.currentDirection = moveRight;
  }

  __areOppositeDirections(direction1, direction2) {
    if (direction1 === moveLeft && direction2 === moveRight) {
      return true;
    }

    if (direction1 === moveRight && direction2 === moveLeft) {
      return true;
    }

    if (direction1 === moveUp && direction2 === moveDown) {
      return true;
    }

    if (direction1 === moveDown && direction2 === moveUp) {
      return true;
    }

    return false;
  };
}

export const snake = new Snake([
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
]);
