const valores =  [7.7, 8.7, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

// Adicionando um valor(10) ao indice 4
valores[4] = 10
console.log(valores)
// Quantos elementos tem meu array
console.log(valores.length)
// Adicionar novos elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// vai pegar o ultimo valor e retirar 
console.log(valores.pop())
delete valores[0]
console.log(valores) 

console.log(typeof valores)