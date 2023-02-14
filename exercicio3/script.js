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


//Trocando o primeiro item com o último (Ex do Luan)

const lista = [false, null, 1, "banana", undefined]

const primaryPosition = lista[0]
const lastPosition = lista[lista.length -1]

lista[lista.length -1] = primaryPosition
lista[0] = lastPosition

console.log(lista)