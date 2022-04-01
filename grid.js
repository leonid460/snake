import { COLUMNS_AMOUNT, ROWS_AMOUNT, CELL_SIZE } from './constants.js';

class Grid {
  constructor() {
    this.__canvas = document.getElementById('canvas');
    this.__cellsMap = new Map();

    for (let top = 0; top < ROWS_AMOUNT; top++) {
      for (let left = 0; left < COLUMNS_AMOUNT; left++) {
        const cell = document.createElement('div');

        cell.style.position = 'absolute';
        cell.style.left = `${left * CELL_SIZE}px`;
        cell.style.top = `${top * CELL_SIZE}px`;
        cell.style.width = `${CELL_SIZE}px`;
        cell.style.height = `${CELL_SIZE}px`;

        this.__cellsMap.set(this.__toCellsMapKey([top, left]), cell);
        this.__canvas.appendChild(cell);
      }
    }
  }

  paintCell = ([top, left], color) => {
    const cell = this.__getCellByCoords([top, left]);

    if (cell) {
      cell.style.background = color;
    }
  }

  clearGrid = () => {
    for (let top = 0; top < ROWS_AMOUNT; top++) {
      for (let left = 0; left < COLUMNS_AMOUNT; left++) {
        const cell = this.__getCellByCoords([top, left]);

        cell.style.background  = 'white';
      }
    }
  }

  isPointInsideGrid = ([top, left]) => {
    if (top < 0 || left < 0) {
      return false;
    }

    if (top >= ROWS_AMOUNT || left >= COLUMNS_AMOUNT) {
      return false;
    }

    return true;
  };

  enableBlinking = () => {
    this.__canvas.classList.add('blinking');
  };

  disableBlinking = () => {
    this.__canvas.classList.remove('blinking');
  };

  __getCellByCoords = ([top, left]) => {
    const cellKey = this.__toCellsMapKey([top, left]);
    return this.__cellsMap.get(cellKey);
  }

  __toCellsMapKey = ([top, left]) => {
    return `${top}_${left}`;
  };
}

export const grid = new Grid();
