const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};
//Pega todas as chaves do objeto
console.log(Object.keys(pessoa));
//todos dos valores do objeto
console.log(Object.values(pessoa));
// retorna array com todos os elementos > subarray com chaves e elementos!
console.log(Object.entries(pessoa));

// pegar reistros do objerto ->

// percorrer
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

//Definir propiedade de um objeto pode ou nao ser alterado
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019',
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assing concatena varios obj em um (ES5 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)