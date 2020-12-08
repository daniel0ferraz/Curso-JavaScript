const Sequencia = {
  _valor: 1, // convenção
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(Sequencia.valor, Sequencia.valor);
Sequencia.valor = 1000;
console.log(Sequencia.valor, Sequencia.valor)
Sequencia.valor = 900
console.log(Sequencia.valor, Sequencia.valor)
