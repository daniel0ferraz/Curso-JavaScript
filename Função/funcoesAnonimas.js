const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(3, 4));
};
imprimirResultado(5, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});

// Arrow function
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar: function () {
        console.log("opa")
    }
}

pessoa.falar()
