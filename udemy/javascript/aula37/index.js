const nome = 'Luiz Otavio'

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

for (let valor of nome) {
    console.log(valor)
}


//FOR ESPECÍFICO PARA OBJETOS ITERÁVEIS

const nomes = ['Luiz','Ana']

for (let name of nomes){

    console.log(name)
}