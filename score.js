class Score {
  constructor() {
    this.__element = document.getElementById('score');
    this.value = 0;
  }

  set = (value) => {
    this.value = value;
  }

  clear = () => {
    this.value = 0;
  }

  get value() {
    return this.__value;
  }

  set value(newValue) {
    this.__value = newValue;
    this.__element.innerText = newValue;
  }
}

export const score = new Score();
