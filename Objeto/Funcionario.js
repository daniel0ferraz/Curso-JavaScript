class Funcionario {
  constructor(nome, valorHora, horasTrabalhadas) {
    this.nome = nome;
    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  setNome = () => {
    this.nome = nome;
  };

  setValorHora = () => {
    this.valorHora = valorHora;
  };

  setHorasTrab = () => {
    this.horasTrabalhadas = horasTrabalhadas;
  };

  getcalculaSalario = () => {
    return this.valorHora * this.horasTrabalhadas;
  };
}

class Gerente extends Funcionario {
  constructor(bonus) {
    this.bonus = bonus;
  }

  setBonus = () => {
    this.bonus = bonus;
  };

  getcalculaSalario = () => {
    return this.valorHora * this.horasTrabalhadas + this.bonus;
  };
}

const g1 = new Gerente();
g1.setNome('Daniel Ferraz');
g1.setHorasTrab(250);
g1.valorHora(150);
g1.setBonus(1000);
console.log(g1.getNome(), g1.calculaSalario());

const f1 = new Funcionario();
f1.setNome('Maria Tereza');
f1.setHorasTrab(250);
f1.setValorHora(80);
console.log(`${f1.getNome()} tem o salario R$ ${f1.calculaSalario()}`);
