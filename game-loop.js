class GameLoop2 {
  constructor() {
    this.intervalId = undefined;
    this.lastTimeStamp = 0;
    this.delay = 80;
  }

  startLoop = (callback) => {
    const step = (timeStamp = 0) => {
      this.intervalId = window.requestAnimationFrame(step);
      const millisecondsPassed = (timeStamp - this.lastTimeStamp);

      if (millisecondsPassed >= this.delay) {
        this.lastTimeStamp = timeStamp;
        callback();
      }
    }

    step();
  };

  stopLoop = () => {
    window.cancelAnimationFrame(this.intervalId);
  };

  increaseSpeed = () => {
    this.delay--;
  };
}

export const gameLoop = new GameLoop2();
