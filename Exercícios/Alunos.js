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


class Alunos extends Boletim {
    constructor(n1, n2, n3) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    }

    // Media(media) {
    //     return (n1 + n2 + n3) / media;
    // }
}


//Class Aluno herda Boletim
console.log(Boletim)


const aluno1 = new Alunos("Tereza", "Feminino", "Pedagogia", "ABC", 7399542211, 2020100646);
console.log(`O Aluno(a): ${aluno1.getNome()}, possui a matricula:${aluno1.getMatricula()}`)