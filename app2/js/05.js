// MANIPULAR OBJETOS

const producto = {
  nombre: "Caja",
  alto: 12,
  ancho: 34,
  largo: 23
}

//Si no quiero que modifiquen ni agreguen nuevos valores a la variable
//usamos freeze

//Object.freeze(producto)

//Si no quiero que agreguen nuevos valores pero si quiero
//que hagan modificaciones a los valores que ya existen
//usamos seal

//Object.seal(producto)

//Puedo cambiar la variable const si es objeto
producto.nombre = "Armario"

//Si no existe el valor, agrega uno nuevo
producto.precio = 59

//Si deseo eliminar 
//delete producto.precio

console.table(producto)