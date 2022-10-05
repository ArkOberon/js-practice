//ARRAY METHODS Y ARROW FUNCTIONS

const tecnologias = ["GraphQL", "ReactJS", "NodeJS", "MongoDB", "PHP"]

const view1 = tecnologias.map( tech => {
  if(tech === "ReactJS"){
    return "Magento"    
  } else {
    return tech
  }
})

console.table(view1)

const view2 = tecnologias.filter( tech => tech !== "NodeJS" )

console.table(view2)
