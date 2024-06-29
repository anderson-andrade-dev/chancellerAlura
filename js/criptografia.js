import {textoSemAcentoMinuscula} from './formatarTextos.js';
import {conversor} from './uteis/regraCriptografia.js'
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

//Area de Testes
const passou = "Passou!";
const naoPassou = "Não Passou!"
var messagemTeste = function (nome, mensagem, arg) {
    console.log(`${nome} ----${mensagem}----- ${arg}`);
}

let testcriptografaTexto = function () {
    let texto = "gato";
    let textoEsperado = "gaitober";
    let textoCriptografado = criptografa(texto, conversor);
    if (textoEsperado === textoCriptografado) {
        messagemTeste('testcriptografaTexto', passou, textoCriptografado)
    } else {
        messagemTeste('testcriptografaTexto', naoPassou, textoCriptografado)
    }
}

let testeDescriptografaTexto = function () {
    let textoCriptografado = "enterntenterr";
    let textoEsperado = "enter";
    let textoDescriptografado = descriptografa(textoCriptografado, conversor);
    if (textoEsperado === textoDescriptografado) {
        messagemTeste('testeDescriptografaTexto', passou, textoDescriptografado)
    } else {
        messagemTeste("testeDescriptografaTexto", naoPassou, textoDescriptografado);
    }
}

testcriptografaTexto();
testeDescriptografaTexto();