// object.preventExtensions -> evita add novos atributos 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:',  Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

//object.seal -> selar não consegue add, delete, mas cosegue modificar valores dos atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = "Ferraz"
delete pessoa.nome
pessoa.idade = 21
console.log(pessoa)

// possibilidades para evitar modificações de objetos, passando ser mais estáticos

