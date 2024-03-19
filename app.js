let ocultaConteudo = document.querySelector('.botao__descriptografar');

ocultaConteudo.addEventListener('click', ocultarConteudoDes);

function ocultarConteudoDes () {
  let areaDesciptografada = document.getElementById('areaDesConteudo');
  areaDesciptografada.style.display = 'none';
}

let criptografa = document.querySelector('.botao__criptografar');
let textoDigitado = document.getElementById('textooriginal');
let textoCriptografado = document.getElementById('areaDesConteudo');

criptografa.addEventListener('click', criptografar)

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
  console.log(textoCripto);
}