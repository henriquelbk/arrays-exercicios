const meusNumeros = [1, 2, 3, 4, 5]
const minhasStrings = ['arroz', 'feijão', 'carne moída']
const meusTudos = [true, true, 'maquina', 111]

const meusNumerosCopia = meusNumeros.slice()
const minhasStringsCopia = minhasStrings.slice()
const meusTudosCopia = meusTudos.slice()

//a)
meusNumerosCopia.unshift(23)

console.log(meusNumeros)
console.log(meusNumerosCopia)

//b)
minhasStringsCopia.pop()

console.log(minhasStrings)
console.log(minhasStringsCopia)

//c)
meusTudosCopia.splice(1,1)

console.log(meusTudos)
console.log(meusTudosCopia)