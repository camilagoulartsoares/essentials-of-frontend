function Calculadora() {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;

      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
    })
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
  }

  this.inicia = () => {
    document.capturaCliques();
  }
}

const calculadora = new Calculadora()
calculadora.inicia()