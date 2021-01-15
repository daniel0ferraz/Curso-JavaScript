Banco(1, 100)
Banco(2,100.90)

function Banco(operacao, valor) {
    let saldo = 1000

    switch(operacao) {
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

