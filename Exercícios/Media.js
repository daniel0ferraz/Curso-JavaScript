function Media(n1, n2, n3) {
  return (n1+n2+n3)/3
}

let nota1 = 10;
let nota2 = 6;
let nota3 = 5;

if (Media(nota1, nota2, nota3) >= 7) {
  console.log("Aprovado");
  console.log(`A Media=`+Media(nota1, nota2, nota3));
} else {
  console.log("Reprovado")
}