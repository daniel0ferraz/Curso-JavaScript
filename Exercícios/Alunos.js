class Alunos {
    constructor(nome, sexo, curso, endereco, telefone, matricula) {
        this.nome = nome;
        this.sexo = sexo;
        this.curso = curso;
        this.endereco = endereco;
        this.telefone = telefone;
        this.matricula = matricula;
    }

    setNome = () => {
        this.nome = nome;
    }
    setMaticula = () => {
        this.matricula = matricula;
    }
    getNome = () => {
        return this.nome;
    }
    getMatricula = () => {
        return this.matricula;
    }

}


const aluno1 = new Alunos("Tereza", "Feminino", "Pedagogia", "ABC", 7399542211, 2020100646);
console.log(aluno1)
console.log(`O Aluno(a): ${aluno1.getNome()}, possui a matricula:${aluno1.getMatricula()}`)