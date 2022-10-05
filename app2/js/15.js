const precio = 300
const saldo = 500
const tarjeta = true

tarjeta ? console.log("la tarjeta es válida") : 
    console.log("Tarjeta invalida")
    saldo < precio ?  
      console.log("no tiene saldo") :
      console.log("tiene saldo")