const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const homens = f => f.genero === 'M'
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)

  // mulher chinesa com menor salario?
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .filter(homens)
    .reduce(menorSalario)

  console.log(func)

})