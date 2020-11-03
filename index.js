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
botaocriptografar.addEventListener("click",  cipher);

function criptografar (event){
 event.preventDefault();
let offiset = Number (document.getElementById("offiset").value);
console.log (typeof offiset)
let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase();        
let mensagem;
document.getElementById("caixademensagem").innerHTML=mensagemCodificada;
let mensagemCodificada;
}


const botaodescriptografar= document.getElementById("botaodescriptografar");
botaodescriptografar.addEventListener("click", decipher); 

function decipher () {

}

console.log(cipher);
