var pessoa = {
    nome: 'Daniel Ferraz',
    idade: 21,
    sexo: 'Masculino',
    interesses: ['musicas, ciclismo, aventuras'],

    bio() {
        console.log(this.nome + ' Tem ' + this.idade + ", é do sexo " + this.sexo + " possui os seguintes interesses" + this.interesses)
    }, suadacao() {
        console.log('Olá, sou o ' + this.nome + '!')
    }
};

pessoa.bio();
pessoa.suadacao();
pessoa.idade
console.log(pessoa)

//podemos também setar (atualizar) o valor de membros de objetos simplesmente declarando o membro que queremos setar (usando notação de ponto ou colchete), tipo assim:
pessoa['olhos'] = 'castanhos escuros';
pessoa.idade = 18;
console.log(pessoa)

pessoa[myDataName] = myDataValue;

var myDataName = 'altura';
var myDataValue = '1.75m';
pessoa[myDataName] = myDataValue;

pessoa.altura

