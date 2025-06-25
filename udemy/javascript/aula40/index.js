const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros){

    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue; //Continue continua para a próxima iteração
    }

    if(numero === 7) {
        console.log("7 encontrado,saindo...")
        break; //Quando encontra o break ele para o laço, sai do laço
    }

    console.log(numero)
}

