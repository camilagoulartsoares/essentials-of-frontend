//Criando e acessando objeto
const user = {
    name: 'Camila',
    message(){
        console.log(`Ola ${user.name}`)
        console.log(`Ola, ${this.name}`)
    }
}

//user.message()

/** ************************************************************ */
//Atualizando um objeto

const product = {
    name: 'Potato',
    quantity: 100
}
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)