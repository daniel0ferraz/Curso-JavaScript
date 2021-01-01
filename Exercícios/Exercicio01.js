function calculadora(op1, op2) {
    console.log("SOMA=", op1 + op2, "SUBTRAÇÃO",op1 - op2, "MULTIPLICAÇÃO", op1 * op2, "DIVISÂO", op1 / op2)
}

calculadora(4, 5)

function dobro(n1) {
   return n1 * 2;
}

console.log(dobro(3))

 Media = (nota1, nota2) => {
   return (nota1 + nota2 ) / 2;
   if (Media() > 7) {
       console.log("Aprovado")
   }
   else {
    console.log("Reprovado")
   }
    
 }

Media(5, 6)