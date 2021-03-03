console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Reverte toda literal atravez de funções
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
console.log("Algoritmo".reverse());

//Retorna primeiro elemento de array
Array.prototype.first = function () {
  return this[0];
};
console.log([1, 2, 3, 4, 5, 6].first());
console.log(["D", "A", "N", "i", "E", "L"].first());
