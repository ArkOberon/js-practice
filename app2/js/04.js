//OBJETOS

//los objetos se crean mediante { } y tienen la capacidad de agrupar...
//...diversas variables con diferentes tipos de valores

const producto = {
  nombre: "Smartphone",
  altura: 15,
  ancho: 16,
  peso: 50
}

console.table(producto)

console.log(producto.nombre) //si solo queremos extraer una variable de un objeto

//DESTRUCTURING
//Si queremos extraer múltiples variables de un objeto hacemos destructuring
//Extraemos variables individualmente de un objeto ya creado.S

const product = {
  productName: "Iphone",
  weight: 34
}

const { productName, weight} = product

console.log(productName)
console.log(weight)

//OBJECT LITERAL ENHACEMENT si queremos mejor, ampliar con variables...
//...un objeto, entonces usamos OLE. 
//Agregamos variables dentro de un nuevo objeto

const autenticado = true
const userName = "Perez"

const newObject = {
  autenticado: autenticado,//cuando ambos son iguales puedes 
                          //quitar el valor del lado derecho.
  userName: userName
}

console.table(newObject)
