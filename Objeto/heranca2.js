// cadeia de protótipos 
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = { __proto__: avo, att2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.att2,filho.attr3)




