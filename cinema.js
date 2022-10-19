const catalogo = require('./database/catalogo.json')

const alterarStatusEmCartaz = (codigo) => {
    let filme = catalogo.find((filme) => filme.codigo == codigo)
    console.log(filme)
}

console.log(alterarStatusEmCartaz(2))

//listar filmes com mais de 2 horas
const listarFilmesComLongaDuracao = () => catalogo.filter((filme) => filme.duracao > '2')  

console.log(listarFilmesComLongaDuracao())
