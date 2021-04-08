// operador ...rest(juntar) /spread(espalhar)

// usar spread com objeto
const funcionario = {
  nome: 'Maria',
  salario: 12345,
}

const clone = {
  ativo: true,
  ...funcionario
}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)