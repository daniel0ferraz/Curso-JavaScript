maiorOuIgual = (n1, n2) => {
   if (typeof n1 != typeof n2) {
     return false;
   } else {
    return n1 >= n2
   }
}
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))