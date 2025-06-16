const pessoa = {
    nome: 'Camila',
    idade: 25,
    endereco: {
        rua: 'Av Florisval',
        numero: 320
    }
}

const { nome,...restoInfos } = pessoa;
// const { idade } = pessoa;
// const { endereco: { rua } } = pessoa
console.log(nome)

//pegando resto de informacoes
console.log(restoInfos)