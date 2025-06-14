const pegaDiv = document.querySelector("#data")

const dataAtual = new Date()
console.log(dataAtual)


const dia = dataAtual.getDay()
const mes = dataAtual.getMonth()
const ano = dataAtual.getFullYear()
const diaDeHoje = dataAtual.getDate()

const hora = dataAtual.getHours();
const minuto = dataAtual.getMinutes()

function formataHoras (minuto) {
    return minuto >= 10 ? '0' : '00'
}

const minFormatado = formataHoras(minuto)


function transformaNumeroEmDia(data) {
    switch (data) {
        case 0:
            return 'Segunda'
        case 1:
            return 'Terça feira'
        case 2:
            return 'Quarta feira'
        case 3:
            return 'Quinta feira'
        case 4:
            return 'sexta'
        case 5:
            return 'sabado'
        default:
            return 'Domingo'
    }
}

function transformaNumeroEmMes(data) {
    switch (data) {
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fev'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        default:
            return 'Julho'
    }
}
const transformaODia = transformaNumeroEmDia(mes)
const transformaNumEmMes = transformaNumeroEmMes(mes)
const mostraNaTela = pegaDiv.innerHTML = `<strong>${transformaODia}, ${diaDeHoje} de ${transformaNumEmMes} de ${ano} às ${hora}:${minuto}</strong>`