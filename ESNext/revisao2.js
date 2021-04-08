// arrow function 
const soma = (a, b) => a + b
console.log(soma(3, 2))


// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5))
