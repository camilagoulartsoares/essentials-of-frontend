function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
}

const g1 = geradora1()
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())