//Dado o array abaixo, desestruture-o para obter as variáveis nome, idade e cidade:



// const pessoa = ["Ana", 25, "São Paulo"];

// const [nome] = pessoa
// console.log(nome)

// const [, idade] = pessoa
// console.log(idade)

// const [, , cidade] = pessoa
// console.log(cidade)


/*                     EXERCÍCIO 2   */
//Desestruture o array abaixo para obter somente o segundo e o quarto elemento:
const numeros = [10, 20, 30, 40, 50];

const [,segundo, ,quarto] = numeros
console.log(segundo,quarto)


/*                     EXERCÍCIO 3   */
//Utilize a desestruturação para trocar os valores das variáveis a e b:


let a = 5;
let b = 10;

let [num1,num2] = [b,a]
console.log(num1,num2)