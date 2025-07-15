function Livro(titulo, autor, ano, lido = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;

    this.marcarComoLido = function () {
        this.lido = true
    },

        this.detalhes() = function () {
            return `${titulo} de ${autor} ( ${ano} )`
        }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("1984", "George Orwell", 1949);

console.log(livro1.detalhes());
livro1.marcarComoLido();
console.log(livro1.detalhes());
