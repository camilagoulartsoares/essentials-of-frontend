const numeros = [3, 4, 56, 78, 234, 12]

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0)

//Somar todos os numeros (reduce)

// console.log(total)


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Ana', idade: 20 },
    { nome: 'Edu', idade: 30 },
    { nome: 'Joao', idade: 560 },
    { nome: 'Jose', idade: 78 },
    { nome: 'Vitor', idade: 21 }
]

const maisVelha = pessoas.reduce(function(acumulador,valor) {
    if (acumulador.idade > valor.idade) return acumulador
})