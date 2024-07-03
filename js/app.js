import { criptografa, descriptografa } from './uteis/criptografia.js'
import { controlC, isTextoValido } from './uteis/formatarTextos.js';
import { conversor } from './uteis/regraCriptografia.js';

var btCopiar;
var textAreaCriptografar;
var textAreaCriptografado;
var imagem;
var divMenssagem;
var btCriptografar;
var btDescriptografar;

var init = function () {
    btCopiar = document.getElementById('bt_control_c');
    textAreaCriptografar = document.getElementById('txa_valor_a_criptografar');
    textAreaCriptografado = document.getElementById('txa_criptografado_usuario');
    imagem = document.getElementById('div_imagem_usuario');
    divMenssagem = document.getElementById('div_menssagem_usuario');
    btCriptografar = document.getElementById('bt_criptografar');
    btDescriptografar = document.getElementById('bt_descriptografar');
}


window.onload = function () {

    init();

    btCopiar.onclick = () => {
        let texto = textAreaCriptografado.value;
        let resposta = controlC(texto);
        if (resposta) {
            textAreaCriptografado.value = '';
            textAreaCriptografar.value = '';
            btCopiar.hidden = true;
            imagem.style.display = "block";
            divMenssagem.style.display = 'block';
            alert('Texto copiado com sucesso!');
        } else {
            alert('Erro ao Copiar texto!');
        }
    }

    btCriptografar.onclick = () => {

        let texto = textAreaCriptografar.value;
        let textoCriptografado = '';

        if (isTextoValido(texto)) {
            textoCriptografado = criptografa(texto, conversor);

            if (textoCriptografado != '') {
                imagem.style.display = 'none';
                divMenssagem.style.display = 'none';
                textAreaCriptografado.value = textoCriptografado;
                btCopiar.hidden = false;
            } else {
                divMenssagem.style.display = 'block';
                imagem.style.display = "block";
                btCopiar.hidden = true;
            }
        } else {
            alert('Verifique o texto ele não pode ter acentos nem letras maiúsculas!');
        }

    }

    btDescriptografar.onclick = () => {
        let texto = textAreaCriptografar.value;
        if (isTextoValido(texto)) {
            if (texto != '') {
                textAreaCriptografado.value = descriptografa(texto, conversor);
                btCopiar.hidden = false;
                imagem.style.display = 'none';
                divMenssagem.style.display = 'none';
            } else {
                btCopiar.hidden = true;
                imagem.style.display = "block";
                divMenssagem.style.display = 'block';
            }
        } else {
            alert("Verifique o texto ele não é valido!");
        }
    }

    textAreaCriptografar.addEventListener('keypress', (event) => {

        if (!isTextoValido(event.key)) {
            confirm(`Você não pode usar  " ${event.key} "`);
            btCriptografar.disabled = true;
            btDescriptografar.disabled = true;
        } else {
            btCriptografar.disabled = false;
            btDescriptografar.disabled = false;
        }

    });
}


