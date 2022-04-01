class MoveInputController {
  constructor() {
    this.__inputsQueue = [];

    window.addEventListener('keydown', event => {
      const newDirectionName = this.__keyCodeToDirectionName(event.key);

      if (newDirectionName) {
        this.__inputsQueue.push(newDirectionName);
      }
    });
  }

  get isThereNewMove() {
    return !!this.__inputsQueue.length;
  }

  extractMove = () => {
    return this.__inputsQueue.shift();
  }

  __keyCodeToDirectionName = (keyCode) => {
    switch (keyCode) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        return 'left';
      case 'ArrowRight':
      case 'd':
      case 'D':
        return 'right';
      case 'ArrowDown':
      case 's':
      case 'S':
        return 'down';
      case 'ArrowUp':
      case 'w':
      case 'W':
        return 'up';
    }
  }
}

export const moveInputController = new MoveInputController();
