//var x = document.getElementById("caixademensagem");
//var text = "";
//var i;
//for (i = 0; i < x.length ;i++) {
 // text += x.elements[i].value;
//}
//document.getElementById("caixademensagem").innerHTML = text;
//Qual o texto, quantas casas é para andar

import cipher from './cipher.js';

const botaocriptografar= document.getElementById("botaocriptografar");
botaocriptografar.addEventListener("click",  crip)

const botaodescriptografar= document.getElementById("botaodescriptografar");
botaodescriptografar.addEventListener("click",crip); 

function crip (event){
    event.preventDefault();   
    let offiset = Number(document.getElementById("offiset").value);
    let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase();        
    let mensagemCodificada= "";
    mensagemCodificada;
    caixademensagem;
    document.getElementById("caixademensagem").innerHTML= mensagemCodificada;
    console.log (typeof offiset)      
}

console.log(cipher);
