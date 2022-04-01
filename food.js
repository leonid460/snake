function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Food {
  constructor() {
    this.cell = undefined;
  }

  get isPresent() {
    return !!this.cell;
  }

  generateRandom([maxTop, maxLeft], excludedCellSet) {
    let foodCell

    do {
      const randomTop = generateRandomInt(0, maxTop);
      const randomLeft = generateRandomInt(0, maxLeft);

      foodCell = [randomTop, randomLeft];
    } while (excludedCellSet.has(foodCell));

    this.cell = foodCell;
  }

  delete = () => {
    this.cell = undefined;
  }
}

export const food = new Food();

