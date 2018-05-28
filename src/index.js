function clickCifrar() {
    //obtengo el desplazamiento
    const desplazar = document.getElementById("desplazamiento").value;
    //obtengo el mensaje
    const mensaje = document.getElementById("escribeMensaje").value;
    //Utilizo la libreria cipher para codificar el mensaje
    const mensajeCifrado = cipher.encode(mensaje, desplazar);
    //El mensaje encriptado lo muestro en el elemento "showMessage"
    document.getElementById("muestraMensaje").value = mensajeCifrado;

}

function clickDescifrar() {
    //obtengo el desplazamiento
    const desplazar = document.getElementById("desplazamiento").value;
    //obtengo el mensaje
    const mensaje = document.getElementById("escribeMensaje").value;
    //utilizo la libreria cipher para decodificar el mensaje
    const mensajeDescifrado = cipher.decode(mensaje, desplazar);
    //El mensaje encriptado lo muestro en el elemento "getMessage"
    document.getElementById("muestraMensaje").value = mensajeDescifrado;

}