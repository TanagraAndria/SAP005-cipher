 /* CIFRA DE CESAR
A   B  C  D  E  F  G  H  I  J  K   L   
0   1  2  3  4  5  6  7  8  9  10  11 
65  66 67 68 69 70 71 72 73 74 75  76  

M   N   O   P   Q   R   S    T  U   V   W   X   Y   Z
12  13  14  15  16  17  18  19  20  21  22  23  24  25  (26 letras) 
77  78  79  80  81  82  83  84  85  86  87  88  89 65
*/
    // if (offset=="" || string=="" || typeof offset!=="number"|| typeof string!=="string") {
  // throw new TypeError("Digite uma mensagem válida")  
  // }
  // else {     encode : function (offset, string) { 
  //   if (offset=="" || string=="" || typeof offset!=="number"|| typeof string!=="string") {
  //   throw new TypeError("Digite uma mensagem válida") 
  //   } 
const cipher = {

  encode : function (offset, string) { 
    let mensagemCipher= "";  
    for (let i = 0; i < string.length; i++ ) {
      let codigoASC = string.charCodeAt(i);
      let forEncode = ((codigoASC- 65 + offset) %26 + 65);
      mensagemCipher += String.fromCharCode(forEncode);
    } 
    return mensagemCipher;  
    },
  
  decode : function (offset, string) { 
    let  mensagemCipher= ""; 
    for (let i = 0; i < string.length; i++ ){
      let codigoASC = string.charCodeAt(i); 
      let forEncode= ((codigoASC- 65 - offset) %26 + 65);
      mensagemCipher += String.fromCharCode(forEncode);
    } 
   return  mensagemCipher;
  }
};

export default cipher;

