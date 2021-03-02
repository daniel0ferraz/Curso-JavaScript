// Referência do fileSystem
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(caminho)

// assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (arr, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})