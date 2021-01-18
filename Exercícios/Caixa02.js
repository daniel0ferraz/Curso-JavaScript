const Contabancaria = {
    titular: 'Daniel Ferraz',
    conta: 0100,
    agencia: 'Nupagamentos',
    saldo: 1000.00

    get transacoes(opcao, valor) {

        switch(opcao) {
            case 1:
               saldo += valor
               console.log(`Depósito: $+${valor}`)
               console.log(`Saldo Atualizado: ${saldo}`)
            break
        
            case 2:
                saldo -= valor
                console.log(`Saque: -$${valor}`)
                console.log(`Saldo Atualizado: ${saldo}`)
            break
        
            default:
              console.log("Valor Invlido")
    
        }
    }
}

console.log(Contabancaria)