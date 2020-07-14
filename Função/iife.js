(function() {
    console.log('Será Executado no hora!')
    console.log('Foge do escopo mais abrangente!')
} )()


// EXEMPLOS

// (function (){
//     let nome = "Daniel"
// }) (); // A variável nome não é acessivel fora do escopo da expressao
       // gera o erro "Uncaught ReferenceError: nome is not defined"

var result = (function () {
    var nome = "Daniel"
    return nome
}) ()

