const media = 0
function notas(n1, n2){
       media = n1 + n2 / 2
    if (notas > 7){
        console.log(`Aprovado media: ${media}`)
    } else {
        console.log('Reprovado')
    }
}

notas(8 , 7)
console.log(media)