function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};
// ideia de ter um link e ir pesquisando na cadeia de funções!

obj1.falar();

obj2.nome = "Daniel";
obj2.falar();

// obj3.__proto__ = MeuObjeto.prototype
// obj3.nome = 'Obj3'
// obj3.falar()

// Resumindo a loucura -> assertivas
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
