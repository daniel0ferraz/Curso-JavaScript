function Triangulo(lad1, lad2, lad3) {
  if (lad1 == lad2 && lad3 == lad1) {
    return console.log('Equilatero');
  } else if (lad1 == lad2) {
    return console.log('Isósceles');
  } else if (lad1 != lad2 && lad3 != lad1) {
    return console.log('Escaleno');
  }
}

Triangulo(1, 1, 1);
Triangulo(2, 2);
Triangulo(1, 2, 3);
