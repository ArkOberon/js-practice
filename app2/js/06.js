//DESTRUCTURING DE DOS OBJETOS CON VARIABLES IGUALES

const cliente = {
  nombre: "Alonso",
  edad: 23,
  altura: 1.70
}

const producto = {
  nombre: "Caja",
  peso: 15,
  altura: 2.30
}

const { nombre, edad, altura } = cliente

//utilizamos los ":" para crear una nueva variable "alias" que cambie el... 
//...nombre de la variable que se repite de esta forma el código funciona
const { nombre: nombreProducto, peso, altura: alturaProducto } = producto

console.table(nombre, altura)
console.table(nombreProducto, alturaProducto)