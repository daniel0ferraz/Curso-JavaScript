// usando a notação literal

const obj1 = {};
console.log(obj1);

// Object em js
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// funcoes construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto('Caneca', 7.0, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função factory
function criarFuncionario(nome, salariobase, faltas) {
  return {
    nome,
    salariobase,
    faltas,
    getSalario() {
      return (salariobase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario('Daniel', 7980, 2);
//console.log(f1)
console.log(f1.getSalario());

// Objetc.create
const filha = Object.create(null);
filha.nome = 'amanda';
console.log(filha);
