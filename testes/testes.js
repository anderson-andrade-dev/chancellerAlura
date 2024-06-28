const passou = "Passou!";
const naoPassou = "Não Passou!"
const conversor = new Map();
conversor.set("e", "enter")
    .set("i", "imes")
    .set("a", "ai")
    .set("o", "ober")
    .set("u", "ufat");

var messagemTeste = function (nome, mensagem, arg) {
    console.log(`${nome} ----${mensagem}----- ${arg}`);
}

var textoSemAcentoMinuscula = function (palavra) {
    palavra = palavra.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    return palavra;
}

let criptografiaPassando = function (texto, conversor) {
    texto = textoSemAcentoMinuscula(texto);
    let textoCriptografado = "";

    for (let index = 0; index < texto.length; index++) {
        if (conversor.get(texto[index]) === undefined) {
            textoCriptografado = textoCriptografado.concat(texto[index])
        } else {
            textoCriptografado = textoCriptografado.concat(conversor.get(texto[index]))
        }
    }

    return textoCriptografado

}

let descriptografia = function (texto, conversor) {
    texto = textoSemAcentoMinuscula(texto);
    conversor.forEach((value, key) => {
        texto = texto.replace(value, key)
    });

    // Correção de quando temos as palavras como "enter" e "ai" que são iguais as palavras de criptografia
    texto = texto.replace('aa', 'a')
        .replace('ee', 'e')
        .replace('ii', 'i')
        .replace('oo', 'o')
        .replace('uu', 'u');

    return texto;
}


let testCriptografiaPassandoTexto = function () {
    let texto = "gato";
    let textoEsperado = "gaitober";
    let textoCriptografado = criptografiaPassando(texto, conversor);
    if (textoCriptografado === textoCriptografado) {
        messagemTeste('testCriptografiaPassandoTexto', passou, textoCriptografado)
    } else {
        messagemTeste('testCriptografiaPassandoTexto', naoPassou, textoCriptografado)
    }
}

let testeDescriptografiaPassandoTexto = function () {
    let textoCriptografado = "eenternter";
    let textoEsperado = "enter";
    let textoDescriptografado = descriptografia(textoCriptografado, conversor);
    if (textoEsperado === textoDescriptografado) {
        messagemTeste('testeDescriptografiaPassandoTexto', passou, textoDescriptografado)
    } else {
        messagemTeste("testeDescriptografiaPassandoTexto", naoPassou, textoDescriptografado);
    }
}

let testePalavrasSemAcento = function () {
    let palavraComAcento = "São Paulo do ùaiì";
    let palavraEsperada = "sao paulo do uaii";
    let palavraDevolvida = textoSemAcentoMinuscula(palavraComAcento);
    if (palavraEsperada === palavraDevolvida) {

        messagemTeste('testPalavrasSemAcento', passou, palavraEsperada);
    } else {
        console.log(palavraDevolvida)
        messagemTeste('testPalavrasSemAcento', naoPassou, palavraDevolvida);
    }
}

testCriptografiaPassandoTexto();
testeDescriptografiaPassandoTexto();
testePalavrasSemAcento();
