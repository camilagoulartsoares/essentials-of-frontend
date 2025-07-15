// Função construtora retorna objetos
// Função fábrica fabrica objetos

function Pessoa(nome,sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Luiz','Otavio')
console.log(p1)