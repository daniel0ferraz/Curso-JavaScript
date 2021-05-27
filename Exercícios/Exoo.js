const pessoa = {
  nome: 'Daniel Ferraz',
  idade: 12,
  altura: 1.7,

  endereco: {
    logradouro: 'Rua marques de barbaceba',
    numero: 81,
    bairro: 'Centro',
    complemento: 'casa',
    estado: 'Bahia',
  },
  
  moradores: [
    {
      nome: 'Sidelvan',
      idade: 60,
      grau: 'Pai',
    },
    {
      nome: 'ketilla',
      idade: 30,
      grau: 'irmã',
    },
    {
      nome: 'taynan',
      idade: 33,
      grau: 'irmã',
    },
    {
      nome: 'Lúcia',
      idade: 60,
      grau: 'Mãe',
    },
    {
      nome: 'Isac',
      idade: '20',
      grau: 'irmão',
    },
  ],
};
console.log(pessoa.moradores.length);
console.log(pessoa.moradores);
console.log(pessoa.moradores);


// Produto = {
//   nome: 'Toner',
//   valor: 20.00,
//   quantidade: 6
// }

// console.log(Produto.valor * Produto.quantidade)

