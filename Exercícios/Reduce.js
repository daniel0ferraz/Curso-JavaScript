// Reduz uma coleção em um unico elemento
const numbers = [0, 1, 2, 3, 4, 5, 6];
const total = numbers.reduce((total, numero) => total + numero, 0) 
console.log(total)