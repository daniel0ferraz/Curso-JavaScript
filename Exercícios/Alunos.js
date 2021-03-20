class Alunos {
    constructor(nome, sexo, curso, endereco, telefone) {
        this.nome = nome;
        this.sexo = sexo;
        this.curso = curso;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    setNome = () => {

    }
    setMaticula = () => {

    }
    getNome = () => {
        return this.nome;
    }
    getMatricula = () => {
        return this.nome;
    }
}


const aluno1 = new Alunos("Maria Tereza", "Feminino", "Pedagogia", "ABC", 7399542211);
console.log(aluno1)