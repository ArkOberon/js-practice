//ARRAY DESTRUCTURING

const tecnologias = ["NodeJS", "React", "NextJS", "Strapi"]

//Podríamos escribir [var1, var2, var3, var4] pero es inútil declarar variables
//que no vamos a usar, por eso usamos var4 y el resto de espacios usamos , dejando.
//cada campo en blanco ya que, extrae los valores por posición [valor1,valor2,valor3,valor4]

const [,,,var4] = tecnologias

console.log(var4)