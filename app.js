let criptografa = document.querySelector('.botao__criptografar');
let descriptografa = document.querySelector('.botao__descriptografar');
let textoDigitado = document.getElementById('textooriginal');
let textoCriptografado = document.getElementById('areaDesConteudo');

criptografa.addEventListener('click', criptografar)
descriptografa.addEventListener('click', descriptografar);

function criptografar () {
  let textoOriginal = textoDigitado.value;
  let textoCripto = '';

  for (let i = 0; i < textoOriginal.length; i++) {
    let letra = textoOriginal[i];

    switch (letra) {
      case 'e':
        textoCripto += 'enter';
        break;
      case 'i':
        textoCripto += 'imes';
        break;
      case 'a':
        textoCripto += 'ai';
        break;
      case 'o':
        textoCripto += 'ober';
        break;
      case 'u':
        textoCripto += 'ufat';
        break;
      default:
        textoCripto += letra;
        break;          
    }
} 
  textoCriptografado.textContent = textoCripto;
}

function descriptografar () {
  let conteudoCriptografado = textoDigitado.value;

  let textoDescripto = conteudoCriptografado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  textoCriptografado.textContent = textoDescripto;
  console.log(textoDescripto);
}

let apagaTexto = document.getElementById('limpaTexto');
apagaTexto.addEventListener('click', limparTexto);


function limparTexto () {
  document.getElementById('textooriginal').value = "";
  document.getElementById('areaDesConteudo').innerHTML = "";
}

let botaoCopiar = document.querySelector('.botao__copiar');
let areaCopiada = document.getElementById('areaDesConteudo');

botaoCopiar.addEventListener('click', copiarTexto);

function copiarTexto () {
  let textoParaCopiar = areaCopiada.innerText;

  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch(err => {
      console.error("Erro ao copiar o texto: ", err);
    })
}