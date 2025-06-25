function recebeNumeros (min,max) {
    // if(max > min){
    //     return console.log(max)
    // } 
    // return console.log(min)

    //se o numero max for maior que min retorna max,se nao retorna o min. Esses dois blocos de códigos são a mesma coisa
    if(max > min) return console.log(max);
    return console.log(min)
    
}

recebeNumeros(5,10)


//outro modo

const max2 = (x,y) => {
    return x > y ? x : y;
}