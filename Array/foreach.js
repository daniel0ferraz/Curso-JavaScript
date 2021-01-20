const aprovados = ['Agatha', 'Alfredo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
