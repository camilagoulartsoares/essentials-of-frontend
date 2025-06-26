try {
   console.log(existe) 
} catch(error) {
    console.log('nao existe')
    // console.log(error)
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ("X e Y precisam ser numeros");
    }

    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('1',2))
} catch(error) {
    console.log(error)
}

