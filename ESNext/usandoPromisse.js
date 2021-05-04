// Com promisse
const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promisse((resolve, reject) => {
    get(url, (res) => {
      let resultado = '';

      res.on('data', (dados) => {
        resulto += dados;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch {
          reject(e);
        }
      });
    });
  });
};

// let nomes = [];
// getTurma('A').then((alunos) => {
//   nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
//   getTurma('B').then((alunos) => {
//     nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
//     console.log(nomes);
//     getTurma('C').then((alunos) => {
//       nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
//       console.log(nomes);
//     });
//   });
// });

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]);
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
