const cipher = {
  encode: function (offset, mensaje1){
    if(offset === undefined || mensaje1 === undefined) {
      throw new TypeError ("Se requiere ingresar una clave")

    }else if (offset === 0 || mensaje1 === typeof 0){
      throw new TypeError ("Solo debes ingresar letras mayúsculas")}
     
     else if (offset === null || mensaje1 === null){
      throw new  TypeError("Ingresa un código válido")
     }
    let mensajeUsuario="";
    let textoCodificado= "";
      for (let i = 0; i<mensaje1.length; i++) {
        if (mensaje1.charCodeAt(i)>=65 && mensaje1.charCodeAt(i)<=90) { //Pasar las letras a codigo ASCII y delimitar las mayúsculas
          mensajeUsuario = ((mensaje1.charCodeAt(i) - 65 + parseInt(offset)) %26 ) + 65; //Aquí se aplica la fórmula cifrado César, se coloca "parseInt" para que no lea ningun desplazmaiento como cadena o letra
        textoCodificado += String.fromCharCode(mensajeUsuario) ; //Para regresar el texto y llamarlo a html
        }
          else 
          {textoCodificado += mensaje1[i] ; //Si no lo encuentra en el rango de 65 - 90 regresar igual 
              }
      } 
    return textoCodificado;
  },

//DESCIFRADO o DECODE
decode: function (offset, mensaje1){
  if(offset === undefined || mensaje1 === undefined) {
    throw new TypeError ("Se requiere ingresar una clave")

  }else if (offset === 0 || mensaje1 === typeof 0){
    throw new TypeError ("Solo debes ingresar letras mayúsculas")}
   
   else if (offset === null || mensaje1 === null){
    throw new  TypeError("Ingresa un código válido")
   }
  let mensajeUsuario1="";
  let  textoDecodificado= "";
    for (let i = 0; i<mensaje1.length; i++) {
      if (mensaje1.charCodeAt(i)>=65 && mensaje1.charCodeAt(i)<=90) { 
        String.fromCharCode(mensaje1)//Pasar las letras a codigo ASCII y delimitar las mayúsculas
        mensajeUsuario1 = ((mensaje1.charCodeAt(i) + 65 - parseInt(offset)) %26 ) + 65; //Aquí se aplica la fórmula cifrado César, se coloca "parseInt" para que no lea ningun desplazmaiento como cadena o letra
        

      textoDecodificado += String.fromCharCode(mensajeUsuario1) ; //Para regresar el texto y llamarlo a html
      }
        else 
        {textoDecodificado += mensaje1[i] ; //Si no lo encuentra en el rango de 65 - 90 regresar igual 
            }
    }
  return textoDecodificado;
}
};
export default cipher;
