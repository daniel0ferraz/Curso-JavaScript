// Clousure é o escopo criado quando uma função é declarado
// Esse escopo permit a funcao acessar as variaveis externas á função

// contexto lexico

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())