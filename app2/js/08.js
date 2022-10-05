//ARRAYS (arreglos)

//Los arreglos pueden contener todo tipo de valores (números, booleanos, etc.)
//Un array no es un tipo de valor por si mismo ya que es de tipo objeto

const tecnologias = ["NodeJS", "React", "NextJS", "Strapi"]

//TRABAJAR CON UN ARRAY

//para trabajar con react EVITAR los métodos pop, unshift, push, etc.
//Ya que estos alteran los valores de la variable original y esto no es viable en REACT

//PARA AGREGAR UN VALOR NUEVO, DELANTE DEL ARRAY

const nuevaTecno = ["MongoDB", ...tecnologias]

//console.table(nuevaTecno)

//PARA AGREGAR UN VALOR NUEVO, DETRÁS DEL ARRAY

const nuevaTecno2 = [...tecnologias, "Azure"]

//console.table(nuevaTecno2)

//PARA ELIMAR UN VALOR (dependiendo del condicional puede filtrar
//diferentes valores, eliminado varios o algunos según las condiciones)

const nuevaTecno3 = tecnologias.filter( function(tech) {
   return tech != "NodeJS"
})

//console.table(nuevaTecno3)

//PARA REEMPLAZAR UN VALOR

const nuevaTecno4 = tecnologias.map( function(tech) {
   if(tech === "NodeJS") {
    return "Magento"
   } else {
    return tech
   }
})

console.table(nuevaTecno4)