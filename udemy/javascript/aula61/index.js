//              0      1      2                
const names = ['Edu', 'Ana', 'Caique'];
names[2] = 'João';

//Se fir deletar com delete,fica um buraco no índice
// delete names[2]

const novo = [...names]
console.log(names)
console.log(novo)