export { pegarValorDoInputPeloId, insereValorPeloId, removerTextoPeloId, controlC, removeHTMLPeloId }

let pegarValorDoInputPeloId = function (id) {
    let texto = document.getElementById(id);
    return texto.value;
}

let insereValorPeloId = function (id, texto) {
    if (document.getElementById(id) != null) {
        let valor = document.getElementById(id);
        valor.innerHTML = texto;
    } else {
        console.log('Elemento Html não Encontrado');
    }
}

let controlC = function (texto) {
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            alert('Texto Copiado Com Sucesso!')
        })
        .catch(() => {
            alert("Erro ao copiar texto!");
        });
}

let removeHTMLPeloId = function (id) {
    if (document.getElementById(id) != null){
        document.getElementById(id).remove();
    }else{
        console.log('Elemento Html não Encontrado');
    }
}

let removerTextoPeloId = function(id){
    if(document.getElementById(id)!=null){
        document.getElementById(id).value='';
    }else{
        console.log('Elemento Html não Encontrado');
    }
}