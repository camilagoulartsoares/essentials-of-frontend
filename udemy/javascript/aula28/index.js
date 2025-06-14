
// console.log(data)

//Objeto date

// const dataPassada = new Date(0)
// console.log(dataPassada)


// console.log('DIA',data.getDate());
// console.log('Mês',data.getMonth());
// console.log('Ano',data.getFullYear());
// console.log('HORA',data.getHours())
// console.log('Dia de hoje',Date.now())


function formataData(data){
    const dia = data.getDate()
    const mes =  data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const seg = data.getSeconds()

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`
}


const data = new Date()
formataData(data)

console.log(formataData(data))
