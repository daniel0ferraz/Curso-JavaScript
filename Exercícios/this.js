
// função Arrow (Seta)
// Nas arrow functions (funções seta), o this é definido lexicalmente, isto é, seu valor é definido na execução onde está inserido. Em um código global, this assumo o objeto global

//CONTEXTO DE CRIAÇÃO: GLOBAL

const arrowFunctionThis = () => {console.log(this) }


//CONTEXTO DE CRIAÇÃO: OBJETO // ERRADO
const arrowFunctionThis = {
    prop: 150,
    arrowF: () => { console.log(this) }
}



// Como méthodo de um objeto

const o = {
    prop: 100,
    f: function() {
        return this.prop;
    }
}

console.log(o.f())