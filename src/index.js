function encode(){
    //obtengo el mensaje
    var cifrar =  document.getElementById("cajaTextoUno").value;
    //obtengo el desplazamiento
    var desplazar = document.getElementById("desplazamiento").value;
    //obtengo el modo
    var mood =  document.getElementById("botonElegir").value;
    //Utilizo la libreria cipher para codificar el mensaje
    var mensajeCifrado = cipher.encode(cifrar,desplazar);
    //El mensaje encriptado lo muestro en el elemento "showMessage"
    document.getElementById("cajaTextoDos").value = mensajeCifrado;

  }
  
  function decode(){
    //obtengo el mensaje
    var descifrar =  document.getElementById("cajaTextoUno").value;
    //obtengo el desplazamiento
    var desplazar = document.getElementById("desplazamiento").value;
    //obtengo el modo
    var mood =  document.getElementById("botonElegir").value;
    //utilizo la libreria cipher para decodificar el mensaje
    var mensajeDescifrado = cipher.decode(cifrar,desplazar);
    //El mensaje encriptado lo muestro en el elemento "getMessage"
    document.getElementById("cajaTextoDos").value = mensajeDescifrado;
  
  }

function myFunction() {
    var x = document.getElementById("myRange").value;
    document.getElementById("demo").innerHTML = x;
}