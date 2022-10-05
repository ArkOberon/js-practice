//ITERADORES DE ARREGLOS
const tecnologias = ["NodeJS", "React", "NextJS", "Strapi"]

//Si usamos el método forEach de esta forma, podremos ver como
//repite la función tantas veces como valores tenga el array 

//tecnologias.forEach( function(tech) {
//  console.log(tech)
//})

//Si usamos el método forEach para crear una nueva variable
//envía un undefined

const newTech = tecnologias.forEach( function(tech) {
  return tech
})


//Pero si usamos map (que es el método que más se utiliza en react)entonces
//asignará a una nueva variable los valores del array original

const newMap = tecnologias.map( function(tech) {
  return tech
})


console.log(newTech)
console.log(newMap)