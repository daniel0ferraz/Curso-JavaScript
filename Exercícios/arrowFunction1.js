let dobro = function (a) {
  return 2 * a 
}

// com arrow function
dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

// Exemplo 2

let ola = function() {
  return 'Ok arrow Function'
}

ola = () => 'Ok arrow Function'
console.log(ola())


