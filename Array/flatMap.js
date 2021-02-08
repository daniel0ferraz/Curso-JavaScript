const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Gustavo',
    nota: 8.1
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]
// extraindo nota do aluno
const getNotaDoAluno = a => a.nota
// extrair notas da turma
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// 
Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)