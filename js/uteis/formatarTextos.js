export {textoSemAcentoMinuscula};

var textoSemAcentoMinuscula = function (palavra) {
    palavra = palavra.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    return palavra;
}

