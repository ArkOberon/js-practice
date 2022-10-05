// FUNCTION EXPRESION

//No pueden ser inicializadas antes de que se defina la variable
//primero se debe definir la variable y después se debe iniciar la función
//const suma = function(numero1, numero2) {
//  return numero1 + numero2
//}

//const resultado = suma(1,2)

// console.log(resultado)

//ARROW FUNCTIONS

//Este es el código estándar sin arrow function
const etapa1 = function(param1, param2) {
  return param1 + param2
}

//Este es el código con arrow function, en caso de que la función contenga
//varias lineas de código
const etapa2 = (param1, param2) => {
  if(param1 === 33) {
    console.log("Algo va mal")
  }else {
    console.log(param2)
  }
}

//Este es el arrow function simplificado en el caso de que la función
//solo contenga una línea de código
const etapa3 = (param1, param2) => param1 + param2

//Si solo enviamos un parámetro se puede simplificar aún más
const etapa4 = param1 => param1 + 87

//Si no pasa ningun parámetro
const etapa5 = () => 2 + 45
