//Tipos de datos JS

//undefined (valor indefinido)

let cliente
console.log(cliente)
console.log(typeof cliete)

//boolean (solo existen dos tipos de valores true o false)
const descuento = false
console.log(descuento)
console.log(typeof descuento)

//Number (todos los tipos de numeros entran en esta categoría de datos en JS)
//los números pueden ser decimales, enteros, negativos, etc.

const numeroCliente = 77
const numero3 = -89
const numero4 = 20.89

console.log(numeroCliente)
console.log(typeof numeroCliente)
console.log(typeof numero3)
console.log(typeof numero4)

//Strings (los valores son cadenas de texto encerrados por "doble comilla")
//(o también pueden ser cerrados con 'comilla simple', la combinación de..
//ambas comillas puede causar error---> 'no combinar" ERROR

const palabras = "Higo"
console.log(typeof palabras)

//Coercion JS (en algunos casos puede presentarse la necesidad de cambiar
//los tipos de datos en este caso se utiliza la coercion

const number = "34"
const number2 = 75 //aunque ambos son numeros uno es de tipo string

//no pueden ser sumados
console.log(number + number2)

//pero sin cambiamos el tipo string a tipo numero entonces si pueden sumarse
console.log(Number(number) + number2)


//BigInt (Es un valor número pero es muy grande)
//estos números tipo BigInt no pueden sumares con valores de tipo número normales

const numberBig = BigInt(2039479475983274598237945729347529054)
const number9 = 23

//console.log(numberBig + number9)

//Symbol (aunque varias variables compartan los mismos valores el symbol...
//... siempre mostrará que son valores únicos y que no son iguales

const symbol1 = Symbol(89)
const symbol2 = Symbol(89)

console.log(symbol1 === symbol2) //devuelve false aunque ambos tienen los mismos valores

//Null (Valor nulo que JS considera como tipo objeto)

const price = null

console.log(typeof price)