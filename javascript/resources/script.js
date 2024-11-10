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
//console.log(product.quantity)
product.quantity = 90
//console.log(product.quantity)


/** *********************COALESCÊNCIA NULA************************************** */
//Operador lógico que retorna o seu operando do lado direito quando o operador do lado esquerdo é null ou undefined. Caso contrário,ele retorna o lado esquerdo

let content = null;
//console.log(content ?? 'Conteudo padrão')

const userSchool = {
    name: 'Camila',
    picture: 'null'
}

//console.log(userSchool.picture ?? 'Nao possui foto ainda')


/** *********************FUNÇÃO CONSTRUTORA ************************************** */
function createProduct(name) {
    const products = {}

    products.name = name
    console.log(products)
}

createProduct('Banana')

