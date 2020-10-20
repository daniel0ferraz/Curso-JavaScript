function notas(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  return media;
}

if (notas() >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

console.log(notas(8, 7, 8));

