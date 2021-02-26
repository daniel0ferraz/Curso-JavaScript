class Alunos {
    constructor(nome, sexo, curso, endereco, telefone) {
        this.nome = nome;
        this.sexo = sexo;
        this.curso = curso;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

const aluno1 = new Alunos("Daniel Ferraz", "Masculino", "Ciência da Computação", "Mq de Barbacena", 21999250152);
const aluno2  = new Alunos("Maria Tereza", "Feminino", "Pedagogia", "Hel fonseca", 7399542211);
console.log(aluno1, aluno2)