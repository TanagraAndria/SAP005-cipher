 /* CIFRA DE CESAR
A   B  C  D  E  F  G  H  I  J  K   L   
0   1  2  3  4  5  6  7  8  9  10  11 
65  66 67 68 69 70 71 72 73 74 75  76  

M   N   O   P   Q   R   S    T  U   V   W   X   Y   Z
12  13  14  15  16  17  18  19  20  21  22  23  24  25  (26 letras) 
77  78  79  80  81  82  83  84  85  86  87  88  89  90
*/
//   /*(codigo da letra + deslocamento) % tamanaho do alfabeto*/ ...
// codigoASC=> codigo1a25 => desloco=> giro => codigoASC
// js puro aqui o texto vai ser criptografado e descriptografado
 
//codigoASC= codigo0a25 
//códigodaletra= 65
 
const cipher = {
  encode: function (string){ 
    for (let i = 0; i < caixademensagem.lenght; i++ )
    mensagemCodificada= ((codigoASC- 65 + offiset) %26 +65);
   // return = mensagemCodificada;
    function codigoASC (a) { return a.charCodeAt(0) }
},


 decode: function ( ) {

  }

  // ...
};

export default cipher;

