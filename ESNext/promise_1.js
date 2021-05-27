function PrimeiroElemento(array) {
    return array[0]
}

new Promise(function (resolve){
    resolve(['Agua', 'Telefone', 'Gás'])
}) 

    .then(PrimeiroElemento)
    .then(console.log)


// Promisse com Array
let pessoas = new Promise(function (exibirPessoas) {
    exibirPessoas(['Daniel', 'Pedro', 'José', 'Augusto'])
})

pessoas.then(function (exibir) {
    console.log(exibir)
})

