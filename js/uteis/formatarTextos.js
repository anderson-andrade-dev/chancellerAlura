export { textoSemAcentoMinuscula, isTextoValido, controlC };

var textoSemAcentoMinuscula = function (palavra) {
    palavra = palavra.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    return palavra;
}

var isTextoValido = function (texto) {
    let reg = /[^\w\s']/g;
    let textoVerificar = texto.normalize('NFD');
    if (textoVerificar.search(reg) < 0) {
        return true;
    }
    return false;
}

let controlC = function (texto) {
    let validador = false; 
    try {
        navigator.clipboard
            .writeText(texto);
        validador = true;
    } catch (error) {
        console.log(error);
    }
    return validador;
}