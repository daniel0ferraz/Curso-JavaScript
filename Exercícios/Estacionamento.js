var veiculos = [{
    modelo: 'Toyota Hilux srv',
    placa: 'qwq-3025',
    cor: 'Preta',
    preco: 230.000
},
{
    modelo: 'Hiunday Elantra',
    placa: 'qjv-3025',
    cor: 'Vermelho',
    preco: 150.000,
},{
    modelo: 'S-10 highcountry',
    placa: 'jqj-2865',
    cor: 'Prata',
    preco: 180.000 
}, {
    modelo: 'Mitsubish Pajero',
    placa: 'mjj-5899',
    cor: 'Chumbo',
    preco: 80.000
},{
    modelo: 'Fiat Palio',
    placa: 'mas-5829',
    cor: 'Cinza',
    preco: 40.000

}];


function addVeiculo() {
   const vagaveiculo = Veiculo.placa;
   
}

console.log(veiculos)
veiculos.modelo

const Apenasmodelo = veiculo => veiculo.modelo
const Nplaca = veiculo => veiculo.preco 
console.log(veiculos.filter(Apenasmodelo).filter(Nplaca))

