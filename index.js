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
botaocriptografar.addEventListener("click", cripitografar)

const botaodescriptografar= document.getElementById("botaodescriptografar");
botaodescriptografar.addEventListener("click",cripitografar); 

function cripitografar (event){
    event.preventDefault();   
    let offiset = Number(document.getElementById("offiset").value);
    let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase(); 
    console.log (caixademensagem);       
    let mensagemCipher= "";
    mensagemCipher;
    caixademensagem;
    let string = document.getElementById ("mensagemCipher").value;
    document.getElementById("caixademensagem").innerHTML=cipher.encode (offiset, string);
    console.log (offiset)      
}

function descriptografar (event){
    event.preventDefault();   
    let offiset = Number(document.getElementById("offiset").value);
    let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase(); 
    console.log (caixademensagem);       
    let mensagemCipher= "";
    mensagemCipher;
    caixademensagem;
    let string = document.getElementById ("mmensagemCipher").value;
    document.getElementById("caixademensagem").innerHTML=cipher.decode (offiset, string);
    console.log (offiset)      
}
console.log(cipher);
