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
botaodescriptografar.addEventListener("click",descriptografar); 

function cripitografar (event){
    event.preventDefault();   
    let offset = Number(document.getElementById("offset").value);
    let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase(); 
    let mensagemCriptografada= cipher.encode (offset, caixademensagem);       
    document.getElementById("caixademensagem").value= mensagemCriptografada;
    console.log (offset)    
    console.log (mensagemCriptografada)  
}

function descriptografar (event){
    event.preventDefault();   
    let offset = Number(document.getElementById("offset").value);
    let caixademensagem= document.getElementById ("caixademensagem").value.toUpperCase(); 
    console.log (caixademensagem);       
    document.getElementById("caixademensagem").value=cipher.decode (offset, caixademensagem);
    console.log (offset)      
}

console.log(cipher);
