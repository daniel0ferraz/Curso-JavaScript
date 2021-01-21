const nums = [1, 2, 3, 4, 5]
// map gera um novo array
// for com proposito retorna o dobro dos elementos do array num[]
let resulado = nums.map(function(e) {
    return e * 2
})

console.log(resulado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resulado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resulado)