
const Contabancaria = {
    titular: 'Daniel Ferraz',
    conta: 0100,
    agencia: 'Nupagamentos',
    saldo: 1000.00,

    trasation(opcao, valor) {
        switch (opcao) {
            case 1:
                // Depósito opção 1 case
                this.saldo += valor
                console.log(`Depósito: $+${valor}`)
                console.log(`Saldo Atualizado: ${this.saldo}`)
                break;

            case 2:
                this.saldo -= valor
                console.log(`Saque: -$${valor}`)
                console.log(`Saldo Atualizado: ${this.saldo}`)
                break;
        }
    }
}

console.log(Contabancaria.trasation(1, 30.6), Contabancaria.titular)
