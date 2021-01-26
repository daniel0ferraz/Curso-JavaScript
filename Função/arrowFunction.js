let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá';
} 

ola = () => 'Olá';
ola = _=> 'Olá'; // possui um param
console.log(ola());

let media = (n1, n2, n3) => {
    return (n1+n2+n3)/3
}

media(9,8,7)