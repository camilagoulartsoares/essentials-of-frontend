//filter - vai SEMPRE retornar um array com a mesma quantidade de elementos ou menos

const numeros = [5, 7, 20, 4, 500, 35, 36, 78]

const numerosFiltrados = numeros.filter((num) => num > 10)
// console.log(numerosFiltrados)


// Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo o nome termina com A

const pessoas = [
    {
        nome: 'Ana', idade: 65
    },
    {
        nome: 'Ana Nara', idade: 45
    },
    {
        nome: 'Eduarda', idade: 15
    },
    {
        nome: 'Maria', idade: 13
    },
    {
        nome: 'Otavio Miranda', idade: 95
    },
    {
        nome: 'Luiz', idade: 45
    }
]

const pessoasComNomeGrande = pessoas.filter(function (objeto) {
    return objeto.nome.length >= 5
})

// console.log(pessoasComNomeGrande)

const pessoasComIdadeMaiorQueSecenta = pessoas.filter(function(objeto) {
    return objeto.idade > 60
})

console.log(pessoasComIdadeMaiorQueSecenta)