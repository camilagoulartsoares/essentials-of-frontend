const pessoa = {
    nome: 'Camila',
    idade: 25,
    endereco: {
        rua: 'Av Florisval',
        numero: 320
    }
}

const {nome: teste= ''} = pessoa;
const {idade} = pessoa;
console.log(teste)
console.log(idade)