for (letra of "Cod3er") { // opera em cima de valores
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promisse']

for (let i in assuntosEcma) {
  console.log(i)
}

for (let assunto of assuntosEcma) {
  console.log(assunto)
}
const assuntoMap = new Map([
  ['Map', { abordando: true}]
  ['Set', { abordando: true}]
  ['Promisse', { abordando: false}]
])

for (let assunto of assuntoMap) {
  console.log(assunto)
}