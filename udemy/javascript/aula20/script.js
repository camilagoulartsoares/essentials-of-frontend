function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  let pessoas = [];

  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //   };

  function recebeEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const altura = form.querySelector(".altura");
    const peso = form.querySelector(".peso");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
