import {textoSemAcentoMinuscula} from './formatarTextos.js';
import {conversor} from './regraCriptografia.js'
export {criptografa,descriptografa};

let criptografa = function (texto, conversor) {
    texto = textoSemAcentoMinuscula(texto);
    conversor.forEach((value, key) => {       
        texto = texto.replaceAll(key, value);
    });
    return texto;
}

let descriptografa = function (texto, conversor) {
    texto = textoSemAcentoMinuscula(texto);
    conversor.forEach((value, key) => {
        texto = texto.replaceAll(value, key)
    });
    return texto;
}
