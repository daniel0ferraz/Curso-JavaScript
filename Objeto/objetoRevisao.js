//coleção dinamica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "generica";
produto.preco = 220;

console.log(produto);

// deletar dinamicamente
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  propietario: {
    nome: "Daniel",
    idade: 21,
    endereco: {
      logradouro: "Rua 123",
      numero: 81,
      bairro: "Centro",
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],

  calcularValorSeguro: function () {
    //...
  },
};

carro.propietario.endereco.numero = 1000;
console.log(carro);

//delete carro.condutores
delete carro.propietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);

console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
