export{pegarValorDoInputPeloId,insereValorInputPeloId,limparImputPeloId,controlC}

let pegarValorDoInputPeloId = function (id) {
    let texto = document.getElementById(id);
    return texto.value;
}

let insereValorInputPeloId = function (id, texto) {
    let valorInput = document.getElementById(id);
    valorInput.value = texto;
}

let limparImputPeloId = function (id) {
    let input = document.getElementById(id);
    input.value = "";
}

let controlC = function (id) {
    let textoCopiado = pegarValorDoInputPeloId(id);
    navigator.clipboard
        .writeText(textoCopiado)
        .then(() => {
            console.log('Texto Copiado Com Sucesso!')
        })
        .catch(() => {
            alert("Erro ao copiar texto!");
        });
}