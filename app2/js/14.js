//ARRAY METHODS 
const tecnologias = ["GraphQL", "ReactJS", "NodeJS", "MongoDB", "PHP"]
const numeros = [12, 14, 15, 78, 67, 59]

//SOME si se cumple alguna de las condiciones devuelve true, 
//si no se cumple ninguna devuelve false
const arrayMethod1 = numeros.some(number => number > 16)

console.log(arrayMethod1)

//FIND devuelve el primer elemento que cumple la condición
const arrayMethod2 = numeros.find(number => number >= 70)

console.log(arrayMethod2)

//EVERY devuelve un true si todos cumplen la condición
const arrayMethod3 = numeros.every(number => number >= 90)

console.log(arrayMethod3)

//REDUCE hace una sumatoria de todos los numeros de un array
const arrayMethod4 = numeros.reduce((total, number) => number + total, 0)

console.log(arrayMethod4)

//FILTER filtra según la condición establecida
const arrayMethod5 = tecnologias.filter(tech => tech === "ReactJS")

console.table(arrayMethod5)

//MAP itera en cada valor del array y retorna uno o 
//varios en función de una condición
const arrayMethod6 = tecnologias.map(tech => tech === "ReactJS")

console.table(arrayMethod6)