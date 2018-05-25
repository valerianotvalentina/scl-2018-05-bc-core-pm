function clickCifrar() {
    //obtengo el desplazamiento
    var desplazar = document.getElementById("desplazamiento").value;
    //obtengo el mensaje
    var mensaje = document.getElementById("escribeMensaje").value;
    //Utilizo la libreria cipher para codificar el mensaje
    var mensajeCifrado = cipher.encode(mensaje, desplazar);
    //El mensaje encriptado lo muestro en el elemento "showMessage"
    document.getElementById("muestraMensaje").value = mensajeCifrado;

}

function clickDescifrar() {
    //obtengo el desplazamiento
    var desplazar = document.getElementById("desplazamiento").value;
    //obtengo el mensaje
    var mensaje = document.getElementById("escribeMensaje").value;
    //utilizo la libreria cipher para decodificar el mensaje
    var mensajeDescifrado = cipher.decode(mensaje, desplazar);
    //El mensaje encriptado lo muestro en el elemento "getMessage"
    document.getElementById("muestraMensaje").value = mensajeDescifrado;

}