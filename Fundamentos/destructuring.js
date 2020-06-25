// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const{ nome, idade} = pessoa
console.log(nome,idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {somebrenome, bemHumorada = true} = pessoa
console.log(somebrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

