//Dobre os números

const numeros = [5, 10, 80, 40, 56, 78, 90]

const numerosEmDobro = numeros.map(num => num * 2)
// console.log(numerosEmDobro)


const pessoas = [
    { nome: "Luiz", idade: 50 },
    { nome: "Ana", idade: 5 },
    { nome: "Edu", idade: 12 },
    { nome: "Jorge", idade: 18 },
    { nome: "Maria", idade: 90 },
    { nome: "Tereza", idade: 55 }
]

const pessoasRetornadasEmString = pessoas.map(valor => valor.nome)

console.log(pessoasRetornadasEmString)

// const pessoasDeletadas = pessoas.map(function(obj){
//     delete obj.nome
//     return obj
// })

//ou

const pessoasDeletadas = pessoas.map(function (obj) {
    return { idade: obj.idade }
})

// console.log(pessoasDeletadas)


constComIds = pessoas.map(function (obj, indice) {
    obj.id = indice;

    return obj
})

console.log(constComIds)


