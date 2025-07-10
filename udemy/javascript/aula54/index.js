function criaPessoa(nome,sobrenome) {
    return {
        nome,sobrenome,
        fala: function (assunto) {
            return `${nome} está falando ${assunto}`
        },
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')