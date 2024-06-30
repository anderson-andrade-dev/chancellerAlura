import { criptografa, descriptografa } from './uteis/criptografia.js'
import { controlC, insereValorPeloId, removerTextoPeloId, pegarValorDoInputPeloId, removeHTMLPeloId } from './uteis/manipularDOM.js';
import { conversor } from './uteis/regraCriptografia.js';

window.onload = function () {
    copiarTexto();
    pegarTextoECriptografar();
    pegarTextoEDescriptografar();

}

let copiarTexto = function () {
    document.getElementById('bt_control_c').onclick = () => {
        let texto = document.getElementById('texto_criptografado_usuario').innerHTML;
        controlC(texto);
        removerTextoPeloId('in_valor_a_criptografar');
    }
}

let pegarTextoECriptografar = function () {
    document.getElementById('bt_criptografar').onclick = () => {
        let texto = pegarValorDoInputPeloId('in_valor_a_criptografar');
        let textoCriptografado = criptografa(texto, conversor);
        removeHTMLPeloId('messagemUsurario');
        removeHTMLPeloId('imagemUsuario');
        insereValorPeloId('texto_criptografado_usuario', textoCriptografado);
        document.getElementById('bt_control_c').hidden=false;
        removerTextoPeloId('in_valor_a_criptografar');
    }
}

let pegarTextoEDescriptografar = function () {
    document.getElementById('bt_descriptografar').onclick = () => {
        let texto = pegarValorDoInputPeloId('in_valor_a_criptografar');
        let textoDescriptografado = descriptografa(texto, conversor);
        insereValorPeloId('texto_criptografado_usuario', textoDescriptografado);
    }
}

