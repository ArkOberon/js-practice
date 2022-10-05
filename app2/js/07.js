//UNIR 2 OBJETOS

const producto1 = {
  nombre: "Mesa",
  precio: 35,
  marca: "Mumbasa"
}

const producto2 = {
  nombre: "Silla",
  precio: 38,
  marca: "Sifone"
}

//utilizamos los 3 puntos para no modificar los objetos ni las variables...
//...originales
const catalogo = {
  producto1: {...producto1},
  producto2: {...producto2}
}

//console.table(producto1)
//console.table(producto2)
console.table(catalogo)