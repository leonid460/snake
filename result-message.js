class ResultMessage {
  constructor() {
    this.element = document.getElementById('result-msg');
  }

  show = (score) => {
    this.element.innerText = `Game over!\nYour score:\n${score}`;
    this.element.style.display = 'block';
  };

  hide = () => {
    this.element.style.display = 'none';
  }
}

export const resultMessage = new ResultMessage();
