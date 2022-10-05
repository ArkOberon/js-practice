//Funciones - Function Declaration

//Las propiedades de este lenguaje permiten utilizar la función incluso
//antes de definirla gracias al Hoisting
function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2)
}

sumar(1,2)
sumar(1)

function restar(numero1 = 0, numero2 = 0) {
  return numero1 - numero2
}

function restarArrayDestructuring(numero1, numero2) {
  return [numero1 - numero2, "Hola mundo"]
}

const [resta, string] = restarArrayDestructuring(23, 22)

console.log(resta)
console.log(string)

function restaObjectDestructuring(numero1, numero2) {
  return {
    resultado: numero1 - numero2,
    texto: "hola mundo"
  }
}

const { resultado, texto } = restaObjectDestructuring(45, 78)

console.log(resultado)
console.log(texto)