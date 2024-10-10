const input = require("prompt-sync")();

const alcool = 0
const gasolina = 0
const diesel = 0
const resposta = 0

while (resposta !== 4) {
      resposta = Number(input("Escolha o seu combustivel"))
      if (resposta === 1) {
            alcool++
      } else if(resposta === 2) {
            gasolina++
      } else if(resposta === 3) {
            diesel++
      }
}

console.log("muito obrigado")

console.log(`Álcool: ${alcool}`)

console.log(`Gasolina: ${gasolina}`)

console.log(`Diesel: ${diesel}`)
