import { criptografa, descriptografa } from './criptografia.js'
import { controlC, insereValorInputPeloId, limparImputPeloId, pegarValorDoInputPeloId } from './manipularDOM.js';
import { conversor } from './uteis/regraCriptografia.js';

window.onload = function () {
    copiarTexto();
    pegarTextoECriptografar();
    pegarTextoEDescriptografar();
    limparInputs();

    // Area de Chamada dos Testes
    testTodosOsElementosHTMLEstaoNaPagina();

}

let copiarTexto = function () {
    document.getElementById('bt_control_c').onclick = () => {
        controlC('in_inserir_valor');
    }
}

let pegarTextoECriptografar = function () {
    document.getElementById('bt_criptografar').onclick = () => {
        let texto = pegarValorDoInputPeloId('in_valor_a_criptografar');
        let textoCriptografado = criptografa(texto, conversor);
        insereValorInputPeloId('in_inserir_valor', textoCriptografado);
    }
}

let pegarTextoEDescriptografar = function () {
    document.getElementById('bt_descriptografar').onclick = () => {
        let texto = pegarValorDoInputPeloId('in_inserir_valor');
        let textoDescriptografado = descriptografa(texto, conversor);
        insereValorInputPeloId('in_valor_descriptografado', textoDescriptografado);
    }
}

let limparInputs = function () {
    document.getElementById('in_valor_a_criptografar').onfocus = () => {
        insereValorInputPeloId('in_valor_a_criptografar', '');
        insereValorInputPeloId('in_inserir_valor', '');
        insereValorInputPeloId('in_valor_descriptografado', '');
    }
}


let testTodosOsElementosHTMLEstaoNaPagina = function () {
    let elementos = [];
    let validadorTeste = true;
    let elementosNaoEncontrados = [];
    // Nome dos inputs Html 
    elementos.push('in_valor_a_criptografar');
    elementos.push('in_inserir_valor');
    elementos.push('in_valor_descriptografado');

    // Nome dos Botões Html
    elementos.push('bt_control_c');
    elementos.push('bt_criptografar');
    elementos.push('bt_descriptografar');

    elementos.forEach(elemento => {
        if (document.getElementById(elemento) == null) {
            validadorTeste = false;
            elementosNaoEncontrados.push(elemento);
        }
    });

    if (validadorTeste) {
        console.log('testTodosOsElementosHTMLEstaoNaPagina ----Passou!---- todos os elementos encontrados----');
       
    } else {
        console.log('testTodosOsElementosHTMLEstaoNaPagina ----Não Passou!---- não encontrou estes elementos:         ---- ${elementosNaoEncontrados} ----');
    }


}