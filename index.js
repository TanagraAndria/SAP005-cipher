//.submit(function()
// console.log "oi" e "thau" para testar o botão

import cipher from './cipher.js';

const botaocriptografar= document.getElementById("botaocriptografar")
console.log(botaocriptografar);
botaocriptografar.addEventListener("click",function name(event) {
    event.preventDefault()
    console.log("oi")    
})

const botaodescriptografar= document.getElementById("botaodescriptografar")
console.log(botaodescriptografar);
botaodescriptografar.addEventListener("click",function name(event) {
    event.preventDefault()
    console.log("thau")    
})



//Qual o texto, quantas casas é para andar


console.log(cipher);
