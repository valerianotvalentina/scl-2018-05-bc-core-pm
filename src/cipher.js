window.cipher = {
    encode: (cifrar, desplazar) => {
        /* borrar despues de aqui
sea x el numero de la letra
sea n el numero del desplazamiento
caso 1: (x-32+n)%33+32 para simbolos y numeros
caso 2: (x-65+n)%26+65 para mayusculas
caso 3: (x-32+n)%6+91 mas simbolos
caso 4: (x-32+n)%26+97 minusculas
caso 5: (x-32+n)%5+123 otros simbolos
condiciones
caso 1: x >= 32 y x < 65
caso 2: x >= 65 y x < 91
caso 3: x >= 91 y x < 97
caso 4: x >= 97 y x < 123
caso 5: x >= 123 y x < 127
        */
        /* cifrar es el mensaje */
        let letrasMensaje = [];
        for (let index = 0; index <= cifrar.length - 1; index++) {
            letrasMensaje[index] = cifrar.toUpperCase().charCodeAt(index); /*aquí se guarda el número de cada caracter*/
        }
        let letrasCifradas = []; /*creé esta variable para guardar las letras cifradas*/

        for (let index = 0; index <= cifrar.length - 1; index++) {

            if (letrasMensaje[index] > 64 && letrasMensaje[index] < 91) {
                let numerador = parseInt(letrasMensaje[index]) - parseInt(65);
                let numeradorDesplazado = parseInt(numerador) + parseInt(desplazar);
                let resto = parseInt(numeradorDesplazado) % parseInt(26);
                let ecuacionCesar = parseInt(resto) + 65;
                letrasCifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras cifradas*/

            } else if (letrasMensaje[index] > 31 && letrasMensaje[index] < 65) {
                let ecuacionCesar = ((parseInt(letrasMensaje[index]) - 32 + parseInt(desplazar)) % 33 + 32);
                letrasCifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras cifradas*/
            }

        }
        let mensajeCifrado = ""; /*creé esta variable para guardar el mensaje cifrado*/
        for (let index = 0; index <= cifrar.length - 1; index++) {
            mensajeCifrado = mensajeCifrado + letrasCifradas[index]; /*guardé el mensaje cifrado*/
        }

        return mensajeCifrado; /*la función me devuelve el mensaje final cifrado para poder verlo*/

    },

    decode: (descifrar, desplazar) => {
        /* Vamos a descifrar el mensaje */
        let letrasMensaje = [];
        for (let index = 0; index <= descifrar.length - 1; index++) {
            letrasMensaje[index] = descifrar.toUpperCase().charCodeAt(index); /*aquí se guarda el número de cada caracter*/
        }
        let letrasDescifradas = []; /*creé esta variable para guardar las letras descifradas*/

        for (let index = 0; index <= descifrar.length - 1; index++) {

            if (letrasMensaje[index] > 64 && letrasMensaje[index] < 91) {
                let ecuacionCesar = ((parseInt(letrasMensaje[index]) - 90 - parseInt(desplazar)) % 26 + 90);
                letrasDescifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras descifradas*/

            } else if (letrasMensaje[index] > 31 && letrasMensaje[index] < 65) {
                let ecuacionCesar = ((parseInt(letrasMensaje[index]) - 64 - parseInt(desplazar)) % 33 + 64);
                letrasDescifradas[index] = String.fromCharCode(ecuacionCesar); /*guardé las letras descifradas*/
            }

        }
        let mensajeDescifrado = ""; /*cree esta variable para guardar el mensaje descifrado*/
        for (let index = 0; index <= descifrar.length - 1; index++) {
            mensajeDescifrado = mensajeDescifrado + letrasDescifradas[index]; /*guardé el mensaje descifrado*/
        }

        return mensajeDescifrado; /*la función me devuelve el mensaje final descifrado para poder verlo*/

    }
}