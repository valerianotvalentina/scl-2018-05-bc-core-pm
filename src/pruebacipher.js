function caesarCipher() {
    var mensaje = document.getElementById("cajaTextoUno").value;
    var numero = document.getElementById("desplazamiento").value;
    var deslizar = document.getElementById("botonElegir").value;

    switch (deslizar) {
        case 1:
            cifrar = mensaje;
            /* cifrar es el mensaje */
            let longitudMensaje = cifrar.lenght - 1;
            let letrasMensaje = [];
            for (let index = 0; index <= longitudMensaje; index = index++) {
                letrasMensaje[index] = cifrar.charCodeAt(index); /*aquí se guarda el número de cada caracter*/
            }
            let letrasCifradas = []; /*cree esta variable para guardar las letras cifradas*/

            for (let index = 0; index <= longitudMensaje; index = index++) {
                let ecuacionCesar = ((letrasMensaje[index] - 65 + desplazar) % 26 + 65);
                letrasCifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras cifradas*/
            }
            let mensajeCifrado = ""; /*cree esta variable para guardar el mensaje cifrado*/
            for (let index = 0; index <= longitudMensaje; index = index++) {
                mensajeCifrado = mensajeCifrado + letrasCifradas[index]; /*guardé el mensaje cifrado*/
            }

            document.getElementById("mostrar").innerHTML = mensajeCifrado; /*la función me devuelve el mensaje final cifrado para poder verlo*/
            break;

        case 2:
            descifrar = mensaje;
            /* Vamos a descifrar el mensaje */
            let longitudMensaje = descifrar.lenght - 1;
            let numeroCifrado = [];
            for (let index = 0; index <= longitudMensaje; index = index++) {
                numeroCifrado[index] = descifrar.charCodeAt(index); /*aquí se guarda el número de cada caracter*/
            }
            let letrasDescifradas = []; /*cree esta variable para guardar las letras descifradas*/

            for (let index = 0; index <= longitudMensaje; index = index++) {
                let ecuacionCesar = ((letrasMensaje[index] - 65 - desplazar) % 26 + 65);
                letrasDescifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras descifradas*/
            }
            let mensajeDescifrado = ""; /*cree esta variable para guardar el mensaje descifrado*/
            for (let index = 0; index <= longitudMensaje; index = index++) {
                mensajeDescifrado = mensajeDescifrado + letrasDescifradas[index]; /*guardé el mensaje descifrado*/
            }

            document.getElementById("mostrar").innerHTML = mensajeDescifrado; /*la función me devuelve el mensaje final descifrado para poder verlo*/
            break;
    }
}