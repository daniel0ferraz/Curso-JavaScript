// pessoa -> 123 -> {...} pessoa aponta para o endereço de memória de forma constante definir uma constante pessoa
const pessoa = { nome: "Daniel" };
pessoa.nome = "Ferraz";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// congela o objeto pessoa e nao é possivel atribuir nunhum valor e altera-lo.
// torna o objeto em si é constante
Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua 112";
console.log(pessoa.nome);
console.log(pessoa);

// criar objeto constante para nunca ser mudado.
const pessoaConstante = Object.freeze({ nome: "Daniel" });
pessoaConstante.nome = "Julia";
console.log(pessoaConstante);
