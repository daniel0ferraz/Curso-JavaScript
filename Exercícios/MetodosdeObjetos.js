// manipulando objetos 
const  destino = { a: 1, b: 2};
const origem = {b: 4, c: 5};

const denstinoRetornado = Object.assign(destino, origem)

console.log(denstinoRetornado, destino)
