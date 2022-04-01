export class CellsSet {
  constructor() {
    this.set = new Set();
  }

  add = ([top, left]) => {
    return this.set.add(this.__toSetKey([top, left]));
  };

  has = ([top, left]) => {
    return this.set.has(this.__toSetKey([top, left]));
  };

  delete = ([top, left]) => {
    return this.set.delete(this.__toSetKey([top, left]));
  };

  clear = () => {
    this.set.clear();
  };

  __toSetKey = ([top, left]) => {
    return `${top}_${left}`;
  };
}