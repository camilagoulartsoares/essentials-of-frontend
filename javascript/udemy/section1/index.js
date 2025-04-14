/* // console.log(Math.random())
function saudacao(name){
    console.log(`Olá, ${name}`)
    return 123
}


const variavel = saudacao("Camila")

console.log(variavel) */
/* 
function soma(x,y) {
    return x+ y
} 

console.log(soma(3,4)) */


//DECLARANDO FUNÇÃO DENTRO DE VARIÁVEL - FUNÇÃO ANÔNIMA

/* const raiz = function (n) {
    return n ** 0.5
}

console.log(raiz(9)) */

// const alunos = n =>  n ** 0.5



// function saudacao(name) {
//     console.log(`Bom dia ${name}`)
// }

// saudacao('Camila')

// objetos

// const pessoa1 = {
//     name: 'Camila',
//     age: 22,
//     student: 'yes'
// }

// console.log(pessoa1.name)

// const pessoa1 = {
//     name: 'Camila',
//     age: 24,
//     profession: 'Programadora',

//     helloWorld(){
//         const nameStudent = `Oi ${this.name},você tem ${this.age} anos e tem como profissão ${this.profession}`
//       return nameStudent
//     }
// }

// console.log(pessoa1.helloWorld())

function criaPessoa(nome,sobrenome,idade){
    return {
        nome,sobrenome,idade
    }
}

console.log(criaPessoa("Camila","Soares",23))