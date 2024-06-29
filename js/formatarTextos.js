export {textoSemAcentoMinuscula};

var textoSemAcentoMinuscula = function (palavra) {
    palavra = palavra.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    return palavra;
}

// Area de Teste 
const passou = "Passou!";
const naoPassou = "Não Passou!"

var messagemTeste = function (nome, mensagem, arg) {
    console.log(`${nome} ----${mensagem}----- ${arg}`);
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


testePalavrasSemAcento();