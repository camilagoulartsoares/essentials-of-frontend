let i = 0;
//WHILE é para quando nao sabemos ate quando ai acontecer o laço. Ele checa a condição e executa o laço
while (i <= 10) {
    console.log(i)
    i++
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)
console.log(rand)

while (rand !== 10) {
    rand = random(min, max)
    // console.log(rand)
}


//o DO WHILE executa a função e depois checa
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)