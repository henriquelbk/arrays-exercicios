const meusNumeros = [1, 2, 3, 4, 5]
const minhasStrings = ['arroz', 'feijão', 'carne moída']
const meusTudos = [true, true, 'maquina', 111]

const meusNumerosLength = meusNumeros.length
const minhasStringsLenght = minhasStrings.length
const meusTudosLenght = meusTudos.length

//a)
console.log(meusNumerosLength)
console.log(minhasStringsLenght)
console.log(meusTudosLenght)

//b)
console.log(meusNumeros[0])
console.log(minhasStrings[1])
console.log(meusTudos[2])

//c)
const incluiNumeros = meusNumeros.includes(4)
const incluiString = minhasStrings.includes('batata')

console.log(incluiNumeros)
console.log(incluiString)