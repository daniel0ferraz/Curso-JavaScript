const NumerosPares = [2, 4, 6, 8]
const NumerosImpares =[1, 3, 5, 7]

const numeros = [...NumerosPares, ...NumerosImpares];

const [num1, num2] = [1, 2]
console.log(num1, num2)

const pessoa = {
  nome: 'Dan',
  idade: 21,
  profissao: 'Programador'
}

const pessoaComTelefone = {
  ...pessoa, telefone: '21999540152'
}

console.log( pessoaComTelefone)
const {idade} = pessoa;
console.log(idade)

// função

function imprimirDados({nome, idade, profissao}) {
  console.log(nome, idade, profissao);
}

imprimirDados(pessoa)
