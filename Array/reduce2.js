const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
 ]
 

// Desafia 1: todos os alunos são bolsista?
const Todosbolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(Todosbolsistas))

// Algum aluno é bolsista? 
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))