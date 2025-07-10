function criaPessoa(nome,sobrenome) {
    return {
        nome,sobrenome,
        fala: function (assunto) {
            return `${nome} está falando ${assunto}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')