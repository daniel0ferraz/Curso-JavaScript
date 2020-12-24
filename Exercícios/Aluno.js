function Aluno(nome, matricula, n1, n2, n3, media) {
    return {
        nome,
        matricula,
        n1, n2, n3,
    
        getMedia() {
            console.log("---Resultado---")
            console.log(`Av1: ${n1} Av2: ${n2}`)
            console.log("---Media---")
            return  media =( n1 + n2 + n3 ) / 3;
    
        }
    }
}

const a1 = new Aluno("Daniel", 2020100646, 4, 9, 10)
const a2 = new Aluno("Felipe",2020100647, 8, 7, 8 )
const a3 = new Aluno("Daniela Nascimento Prates", 2020100648, 10, 9.0, 9.5)
console.log(a1, a2, a3)
