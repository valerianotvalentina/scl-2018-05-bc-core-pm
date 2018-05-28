window.cipher = {
    encode: (cifrar, desplazar) => {
        /* cifrar es el mensaje */
        let longitudMensaje = cifrar.length - 1;
        let letrasMensaje = [];
        for (let index = 0; index <= longitudMensaje; index++) {
            letrasMensaje[index] = cifrar.charCodeAt(index); /*aquí se guarda el número de cada caracter*/
        }
        let letrasCifradas = []; /*creé esta variable para guardar las letras cifradas*/

        for (let index = 0; index <= longitudMensaje; index++) {
            let numerador = parseInt(letrasMensaje[index]) - parseInt(65);
            let numeradorDesplazado = parseInt(numerador) + parseInt(desplazar);
            let resto = parseInt(numeradorDesplazado) % parseInt(26);
            let ecuacionCesar = parseInt(resto) + 65;
            letrasCifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras cifradas*/
        }
        let mensajeCifrado = ""; /*creé esta variable para guardar el mensaje cifrado*/
        for (let index = 0; index <= longitudMensaje; index++) {
            mensajeCifrado = mensajeCifrado + letrasCifradas[index]; /*guardé el mensaje cifrado*/
        }

        return mensajeCifrado; /*la función me devuelve el mensaje final cifrado para poder verlo*/

    },

    decode: (descifrar, desplazar) => {
        /* Vamos a descifrar el mensaje */
        let longitudMensaje = descifrar.length - 1;
        let letrasMensaje = [];
        for (let index = 0; index <= longitudMensaje; index++) {
            letrasMensaje[index] = descifrar.charCodeAt(index); /*aquí se guarda el número de cada caracter*/
        }
        let letrasDescifradas = []; /*creé esta variable para guardar las letras descifradas*/

        for (let index = 0; index <= longitudMensaje; index++) {
            let ecuacionCesar = ((letrasMensaje[index] - 65 - desplazar) % 26 + 65);
            letrasDescifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras descifradas*/
        }
        let mensajeDescifrado = ""; /*cree esta variable para guardar el mensaje descifrado*/
        for (let index = 0; index <= longitudMensaje; index++) {
            mensajeDescifrado = mensajeDescifrado + letrasDescifradas[index]; /*guardé el mensaje descifrado*/
        }

        return mensajeDescifrado; /*la función me devuelve el mensaje final descifrado para poder verlo*/

    }
}