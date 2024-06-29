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

let pegarValorDoInputPeloId = function (id) {
    texto = document.getElementById(id).value
    return texto;
}

let insereValorInputPeloId = function (id, texto) {
    valorInput = document.getElementById(id);
    valorInput.value = texto;
}

let limparImputPeloId = function (id) {
    document.getElementById(id).value = "";
}

let controlC = function (id) {
    let textoCopiado = document.getElementById(id).value;
    navigator.clipboard
        .writeText(textoCopiado)
        .then(() => {
            console.log('Texto Copiado Com Sucesso!')
        })
        .catch(() => {
            alert("Erro ao copiar texto!");
        });
}

let criptografiaPassando = function (texto, conversor) {
    texto = textoSemAcentoMinuscula(texto);
    let textoCriptografado = "";
    conversor.forEach((value, key) => {
        textoCriptografado = textoCriptografado.replace(key, value);
    });
    return textoCriptografado;
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
