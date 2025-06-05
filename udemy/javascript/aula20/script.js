function meuEscopo() {
  const form = document.querySelector(".form");

//   form.onsubmit = function (evento) {
//     evento.preventDefault();
//   };

    function recebeEventoForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        console.log(nome.value,sobrenome,peso,altura)
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
