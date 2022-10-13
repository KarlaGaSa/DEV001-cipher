import cipher from './cipher.js';

//Cambiar a mayusculas
  document.getElementById("textOriginal").addEventListener("keyup",function() { 
  this.value = this.value.toUpperCase();
  }
  );
  //Llamar datos para cifrar
  document.getElementById("botonCifrar").addEventListener("click", function() {
    const mensaje1 = document.getElementById("textOriginal");
    const offset = document.getElementById("cifrado");
  //Regresar datos a caja de cifrado
    document.getElementById("textoCifrado").value = cipher.encode(offset.value,mensaje1.value);
  });
  //Llamar datos para DEScifar
  document.getElementById("botonDescifrar").addEventListener("click", function() {
    const mensaje1 = document.getElementById("textOriginal");
    const offset = document.getElementById("cifrado");
  //Regresar datos a caja de cifrado
    document.getElementById("textoCifrado").value = cipher.decode(offset.value, mensaje1.value,);
  })
